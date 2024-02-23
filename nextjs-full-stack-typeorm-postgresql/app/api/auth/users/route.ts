import { NextRequest, NextResponse } from "next/server";
import { AppDataSource } from "@/config/db/pg-connection";
import { UsersEntity } from "@/typeorm/users/user-entity";
import { getSignJwtToken, hashedPassword } from "@/middlewares/auth.middleware";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("🚀 ~ data:", data)
  const userRepository = await AppDataSource.getRepository(UsersEntity);

  // data.password = hashedPassword(data.password)

  const newUser = userRepository.create({
    ...data,
    password: hashedPassword(data.password),
  });



  const result = await userRepository.save(newUser);

  return NextResponse.json({
    message: "Create new User",
    status: 200,
    data: result,
  });
}

export async function GET(request: Request) {
  const userRepository = await AppDataSource.getRepository(UsersEntity);

  const result = await userRepository.find();

  return NextResponse.json({
    status: 200,
    message: "success get users",
    length: result.length,
    data: result,
  });
}
