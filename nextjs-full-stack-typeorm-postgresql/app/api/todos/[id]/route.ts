import { AppDataSource } from "@/config/db/pg-connection";
import { TodosEntity } from "@/typeorm/todos/todos-entity";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const {
    params: { id },
  } = context;

  const todoRepository = AppDataSource.getRepository(TodosEntity);

  const newData = await todoRepository.findOneBy({ id });

  if (!newData) {
    return NextResponse.json({
      status: 400,
      message: "Todo not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Get a single Todo",
    data: newData,
  });
}

export async function DELETE(request: Request, context: any) {
  const {
    params: { id },
  } = context;

  const todoRepository = AppDataSource.getRepository(TodosEntity);

  const newData = await todoRepository.delete(id);

  if (!newData) {
    return NextResponse.json({
      status: 400,
      message: "Todo not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Todo Delete Successfully",
    data: newData,
  });
}

export async function PATCH(request: Request, context: any) {
  const {
    params: { id },
  } = context;
  const data = await request.json();

  const todoRepository = AppDataSource.getRepository(TodosEntity);

  const findData = await todoRepository.findOneBy({ id });

  if (!findData) {
    return NextResponse.json({
      status: 400,
      message: "Todo not found",
    });
  }

  const updateData = await todoRepository.merge(findData, data);

  await AppDataSource.manager.save(updateData);

  return NextResponse.json({
    status: 200,
    message: "Todo update Successfully",
    data: updateData,
  });
}
