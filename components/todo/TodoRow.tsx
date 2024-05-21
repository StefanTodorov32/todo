import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Todo } from "@/utils/types";
import { CheckIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const TodoRow = ({id, title, description, status}: Todo) => {
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>
        <Badge className="px-2 py-1 rounded-full" variant={status === "Completed" ? "default" : "outline"}>
          {status}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <Button size="sm" variant="ghost" className="hover:text-emerald-700 hover:bg-white">
          <CheckIcon className="w-5 h-5" />
        </Button>
        <Button size="sm" variant="ghost" className="hover:text-yellow-600 hover:bg-white">
          <Pencil1Icon className="w-5 h-5" />
        </Button>
        <Button size="sm" variant="ghost" className="hover:text-red-600 hover:bg-white">
          <TrashIcon className="w-5 h-5" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoRow;
