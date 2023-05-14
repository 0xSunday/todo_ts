"use client";
import React, { useState } from "react";

import InputForm from "@/components/InputForm";
import { Todo } from "@/components/Modal";
import TodoList from "@/components/TodoList";
const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    console.log(todos);
  };

  return (
    <div className="flex text-yellow-400 h-[100vh] bg-zinc-950 flex-col items-center px-10 py-10">
      <h1 className="text-5xl font-bold py-10">ADD YOUR TASKS</h1>
      <InputForm todo={todo} setTodo={setTodo} handleClick={handleClick} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
