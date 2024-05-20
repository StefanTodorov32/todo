import TodoTable from "@/components/TodoTable";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center pt-5">
        <h1 className="text-4xl font-bold">Todo App</h1>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <TodoTable />
        <Button>Add Todo</Button>
      </div>
    </main>
  );
}
