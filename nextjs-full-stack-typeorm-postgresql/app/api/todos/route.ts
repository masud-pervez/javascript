import { AppDataSource } from "@/config/db/pg-connection";
import { TodosEntity } from "@/typeorm/todos/todos-entity";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const todoRepository = await AppDataSource.getRepository(TodosEntity);

  const newTodo = todoRepository.create(data);

  const result = await todoRepository.save(newTodo);

  return NextResponse.json({
    message: "Create new Todo",
    status: 200,
    data: result,
  });
}

export async function GET(request: Request) {
  const todoRepository = AppDataSource.getRepository(TodosEntity);

  const result = await todoRepository.find();

  return NextResponse.json({
    message: "Get all Todos",
    status: 200,
    length: result.length,
    data: result,
  });
}
