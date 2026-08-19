import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// FIX: This now checks for both Upstash AND Vercel KV environment variables!
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || '',
});

export async function GET() {
  try {
    const likes = await redis.get('portfolio-likes') || 0;
    const showPublicly = process.env.SHOW_LIKE_COUNT === 'true';
    return NextResponse.json({ show: showPublicly, likes });
  } catch (error) {
    console.error("Redis GET Error:", error);
    return NextResponse.json({ show: false, likes: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    const likes = await redis.incr('portfolio-likes');
    const showPublicly = process.env.SHOW_LIKE_COUNT === 'true';
    return NextResponse.json({ show: showPublicly, likes });
  } catch (error) {
    console.error("Redis POST Error:", error);
    return NextResponse.json({ show: false, likes: 0 }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const likes = await redis.decr('portfolio-likes');
    const showPublicly = process.env.SHOW_LIKE_COUNT === 'true';
    return NextResponse.json({ show: showPublicly, likes });
  } catch (error) {
    console.error("Redis DELETE Error:", error);
    return NextResponse.json({ show: false, likes: 0 }, { status: 500 });
  }
}