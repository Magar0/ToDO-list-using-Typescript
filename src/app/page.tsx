import AddTodo from "@/components/add-todo";
import Navbar from "@/components/navbar";
import Todos from "@/components/todos";
import Image from "next/image";
import { RiTodoLine } from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <h2>
        <RiTodoLine className="icons" /> TODO NEXT + TYPESCRIPT
        <RiTodoLine className="icons" />{" "}
      </h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
}
