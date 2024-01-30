import { NextRequest, NextResponse } from "next/server";

import product from "@/json-data/product.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  //   console.log("🚀 ~ params:", params.productid);
  const result = product.find((item) => item.id === +params.productid);

  return NextResponse.json({
    status: 200,
    message: "success",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const { params } = context;
  console.log("Hello Delete");

  return NextResponse.json({
    starus: 200,
    message: "Delete Successfull",
    data: {},
  });
}

export async function PATCH(request: Request, context: any) {
  const { params } = context;
  console.log("🚀 ~ params:", params);
  console.log("Hello PUT");

  return NextResponse.json({
    starus: 200,
    message: "Update a single product Successfull",
    data: {},
  });
}
