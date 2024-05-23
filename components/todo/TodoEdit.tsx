'use client'

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {};

const TodoEdit = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Pencil1Icon className="w-5 h-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="mb-4">
          <label className="block mb-2">Title:</label>
          <Input type="password"></Input>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <Input type="password"></Input>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Status:</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TodoEdit;
