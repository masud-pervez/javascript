import { NextRequest, NextResponse } from "next/server";

import { getSignJwtToken, hashedPassword } from "@/middlewares/auth.middleware";

export async function POST(request: Request) {
  const data = await request.json();

  // const userRepository = await AppDataSource.getRepository(UsersEntity);

  // const newUser = userRepository.create({
  //   ...data,
  //   password: hashedPassword(data.password),
  // });

  // const result = await userRepository.save(newUser);

  return NextResponse.json({
    message: "Create new User",
    status: 200,
    data: data,
  });
}

export async function GET(request: Request) {
  // const userRepository = await AppDataSource.getRepository(UsersEntity);

  // const result = await userRepository.find();

  return NextResponse.json({
    status: 200,
    message: "success get users",
    length: 100,
    data: {},
  });
}
