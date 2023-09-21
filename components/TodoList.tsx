"use client";
import React from "react";

const TodoList = () => {
  const makeACall = async () => {
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
    });
  };
  return <button onClick={makeACall}>make a call</button>;
};

export default TodoList;
