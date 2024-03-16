import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json({
    message: "Create new Todo",
    status: 200,
    data: {},
  });
}

export async function GET(request: Request) {
  return NextResponse.json({
    message: "Get all Todos",
    status: 200,
    data: {},
  });
}
