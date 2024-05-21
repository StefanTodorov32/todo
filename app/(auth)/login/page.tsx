"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
            ></Input>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password:</label>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            ></Input>
          </div>
          <Button className="" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
