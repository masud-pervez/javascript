import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const {
    params: { id },
  } = context;

  // const userRepository = await AppDataSource.getRepository(UsersEntity);

  // const result = await userRepository.findOneBy({ id });

  // if (!result) {
  //   return NextResponse.json({
  //     status: 400,
  //     message: "user not found",
  //   });
  // }

  return NextResponse.json({
    status: 200,
    message: "get a single user successfull",
    data: {},
  });
}

export async function DELETE(request: Request, context: any) {
  const {
    params: { id },
  } = context;

  // const userRepository = await AppDataSource.getRepository(UsersEntity);

  // const result = await userRepository.delete(id);

  // if (!result) {
  //   return NextResponse.json({
  //     status: 400,
  //     message: "user not found",
  //   });
  // }

  return NextResponse.json({
    starus: 200,
    message: "Delete a single user Successfull",
    data: {},
  });
}

export async function PATCH(request: Request, context: any) {
  const {
    params: { id },
  } = context;

  const data = await request.json();

  // const userRepository = AppDataSource.getRepository(UsersEntity);

  // const findData = await userRepository.findOneBy({ id });

  // if (!findData) {
  //   return NextResponse.json({
  //     status: 400,
  //     message: "User not found",
  //   });
  // }

  // const updateData = await userRepository.merge(findData, data);

  // const result = await AppDataSource.manager.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a single user Successfull",
    data: {},
  });
}
