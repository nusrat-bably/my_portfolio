import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// This automatically connects using the URL and Token from your .env file
const redis = Redis.fromEnv();

export async function POST() {
  try {
    // 1. Always increment the view count in the database
    const views = await redis.incr('portfolio-views');

    // 2. Check if the toggle is set to true
    const showPublicly = process.env.SHOW_VIEW_COUNTER === 'true';

    // 3. Return the data to the frontend
    if (!showPublicly) {
      return NextResponse.json({ show: false });
    }

    return NextResponse.json({ show: true, views });
  } catch (error) {
    console.error('Failed to update views:', error);
    return NextResponse.json({ show: false }, { status: 500 });
  }
}