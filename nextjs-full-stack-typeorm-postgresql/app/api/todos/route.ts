import  PostgresDatabaseConnection  from '@/db/posgresql_db';
import { NextRequest, NextResponse } from "next/server";
import { DataSource } from "typeorm";
// import { DataSource } from "typeorm"
export async function GET(request: Request) {
  PostgresDatabaseConnection
  return NextResponse.json({ name: "Gowtamkumar" });
}
