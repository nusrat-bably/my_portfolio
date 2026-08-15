'use server';

import { Client } from '@notionhq/client';
import { revalidatePath } from 'next/cache';

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
}

// Automatically retrieves the underlying data source ID from your database ID
async function getDataSourceId(notion: Client, databaseId: string): Promise<string> {
  const db: any = await notion.databases.retrieve({ database_id: databaseId });
  if (db.data_sources && db.data_sources.length > 0) {
    return db.data_sources[0].id;
  }
  return databaseId;
}

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return [];
  }

  const notion = new Client({ auth: apiKey });

  try {
    const dataSourceId = await getDataSourceId(notion, databaseId);

    const response: any = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: 'Approved',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => {
      const name = page.properties?.Name?.rich_text?.[0]?.plain_text || 'Anonymous';
      const message = page.properties?.Message?.title?.[0]?.plain_text || '';
      const date = page.properties?.Date?.created_time || page.created_time;

      return {
        id: page.id,
        name,
        message,
        date,
      };
    });
  } catch (error) {
    console.error('Error fetching guestbook entries:', error);
    return [];
  }
}

export async function addGuestbookEntry(formData: FormData) {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return { success: false, error: 'Database not configured.' };
  }

  const name = (formData.get('name') as string)?.trim() || 'Anonymous';
  const message = (formData.get('message') as string)?.trim();

  if (!message) {
    return { success: false, error: 'Message cannot be empty.' };
  }

  try {
    const notion = new Client({ auth: apiKey });
    const dataSourceId = await getDataSourceId(notion, databaseId);

    await notion.pages.create({
      parent: { data_source_id: dataSourceId },
      properties: {
        Message: {
          title: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        Name: {
          rich_text: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Approved: {
          checkbox: false,
        },
      },
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error creating guestbook entry:', error);
    return { success: false, error: 'Failed to submit entry to Notion.' };
  }
}