import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const {
    params: { id },
  } = context;

  return NextResponse.json({
    status: 200,
    message: "Get a single Todo",
    data: [],
  });
}

export async function DELETE(request: Request, context: any) {
  const {
    params: { id },
  } = context;

  return NextResponse.json({
    status: 200,
    message: "Todo Delete Successfully",
    data: {},
  });
}

export async function PATCH(request: Request, context: any) {
  const {
    params: { id },
  } = context;
  const data = await request.json();

  return NextResponse.json({
    status: 200,
    message: "Todo update Successfully",
    data: data,
  });
}
