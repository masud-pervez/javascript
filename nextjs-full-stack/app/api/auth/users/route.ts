import "reflect-metadata";
import { NextResponse } from "next/server";
import { hashedPassword } from "@/middlewares/auth.middleware";
import { UsersEntity } from "@/typeorm/users/user-entity";
import { getDBConnection } from "@/config/db/db-connection";

export async function POST(request: Request) {
  const data = await request.json();
  const connection = await getDBConnection();

  const user = await connection.getRepository(UsersEntity);

  const newUser = user.create({
    ...data,
    password: hashedPassword(data.password),
  });

  const result = await user.save(newUser);

  return NextResponse.json({
    message: "Create new User",
    status: 200,
    data: data,
  });
}

export async function GET(request: Request) {
  const connection = await getDBConnection();
  const user = await connection.getRepository(UsersEntity);

  const result = await user.find();

  return NextResponse.json({
    status: 200,
    message: "Get a users",
    length: 100,
    data: result,
  });
}
