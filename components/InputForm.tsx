import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (e: React.FormEvent) => void;
}
const InputForm = ({ todo, setTodo,handleClick }: Props) => {
  return (
    <form className="flex gap-3" onSubmit={handleClick}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        type="text"
        className="no-underline bg-transparent border shadow-2xl  rounded-full p-3"
      />
      <button
        className="bg-yellow-300 active:bg-yellow-600  hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};

export default InputForm;
