import { NextResponse } from "next/server";

import product from "@/json-data/product.json";

export async function GET(request: Request, context: any) {
  return NextResponse.json({
    status: 200,
    message: "success",
    data: product,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log("req");

  return NextResponse.json({
    status: 201,
    message: "success",
    data: data,
  });
}
