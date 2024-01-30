import { NextRequest, NextResponse } from "next/server";
import user from "@/json-data/user.json";
export async function GET(request: Request, context: any) {
  return NextResponse.json({
    status: 200,
    message: "success get users",
    data: user,
  });
}
