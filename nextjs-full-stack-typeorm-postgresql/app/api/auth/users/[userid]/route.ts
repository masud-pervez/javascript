import { NextRequest, NextResponse } from "next/server";

import user from "@/json-data/user.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const result = user.find((item) => item.id === +params.userid);

  return NextResponse.json({
    status: 200,
    message: "get a single user successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const { params } = context;
  console.log("Hello Delete");

  return NextResponse.json({
    starus: 200,
    message: "Delete a single user Successfull",
    data: {},
  });
}

export async function PATCH(request: Request, context: any) {
  const { params } = context;

  return NextResponse.json({
    starus: 200,
    message: "Update a single user Successfull",
    data: {},
  });
}
