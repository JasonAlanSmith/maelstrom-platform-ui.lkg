import {
  NextRequest,
  NextResponse,
} from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { sid: string } }) {
  const requestUrl = request.url;

  return NextResponse.json({
    message: `Hello, API! ${params.sid}`,
    request: requestUrl,
  });
}
