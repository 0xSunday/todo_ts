"use client";
import React, { useState } from "react";

import InputForm from "@/components/InputForm";
import { Todo } from "@/components/Modal";
const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
  };
  if (todo) {
    setTodos([...todos, { id: Date.now(), todo, isDown: false }]);
  }
  console.log(todos);
  return (
    <div className="flex text-yellow-400 bg-zinc-950 flex-col items-center justify-center px-10 py-10">
      <h1 className="text-5xl font-bold py-10">ADD YOUR TASKS</h1>
      <InputForm todo={todo} setTodo={setTodo} handleClick={handleClick} />
    </div>
  );
};

export default Home;
