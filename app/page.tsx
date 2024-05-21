'use client'
import TodoTable from "@/components/todo/TodoTable";
import { Button } from "@/components/ui/button";
import { Todo } from "@/utils/types";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Buy groceries",
      description: "Buy groceries from the store",
      status: "Completed"
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Buy groceries from the store",

      status: "In Progress"
    },
    {
      id: 3,
      title: "Buy groceries",
      description: "Buy groceries from the store",
      status: "In Progress"
    }
  ]);
  return (
    <main>
      <div className="p-5 flex flex-col gap-3">
        <TodoTable todos={todos} />
      </div>
    </main>
  );
}
