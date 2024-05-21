import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { Todo } from "@/utils/types";
import { todo } from "node:test";
import TodoRow from "./TodoRow";

type Props = {
  todos: Todo[];
};

const TodoTable = ({ todos }: Props) => {
  console.log(todos);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Todo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Todo</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="title">
                  Title
                </Label>
                <Input
                  className="col-span-3"
                  id="title"
                  placeholder="Buy groceries"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="description">
                  Description
                </Label>
                <Textarea
                  className="col-span-3"
                  id="description"
                  placeholder="Pick up milk, eggs, and bread"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="complete">
                  Complete
                </Label>
                <Checkbox className="col-span-3" id="complete" />
              </div>
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              todos.map((todo, index) => (
                <TodoRow {...todo} key={index}/>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TodoTable;
