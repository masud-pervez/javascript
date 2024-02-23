import { AppDataSource } from "@/config/db/connection";
import { PhotoEntity } from "@/typeorm/photos/photo-entity";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: Request) {

  

  const photo =  new PhotoEntity();
  // console.log("🚀 ~ photo:", photo)
  photo.description = "dd"
  photo.name = "eeeeee"

  await AppDataSource.manager.save(photo)
  

  return NextResponse.json(photo);
}
