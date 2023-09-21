import React from "react";

import TodoList from "@/components/TodoList";
const Home = () => {
  return (
    <div className="flex text-yellow-400 h-[100vh] bg-zinc-950 flex-col items-center px-10 py-10">
      <h1 className="text-5xl font-bold py-10">ADD YOUR TASKS</h1>
      <TodoList />
    </div>
  );
};

export default Home;
