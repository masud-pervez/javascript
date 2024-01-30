import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("req");

  return NextResponse.json({
    status: 201,
    message: "success register",
    data: data,
  });
}
