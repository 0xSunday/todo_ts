import React from "react";
import { Todo } from "./Modal";
interface Props {
  todos: Todo[];
  setTodos: (value: React.SetStateAction<Todo[]>) => void;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <ul className="flex justify-start text-start align-baseline flex-col gap-4 py-10">
      {todos.map((t) => (
        <li className="text-3xl">{t.todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
