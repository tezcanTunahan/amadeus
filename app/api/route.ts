import { NextResponse } from 'next/server';
import { connect } from '@/utils/database';

connect();
export async function GET(request: Request) {
  return NextResponse.json(
    {
      message: 'Hello from the API',
    },
    {
      headers: {
        'Cache-Control': 's-maxage=1, stale-while-revalidate',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}
