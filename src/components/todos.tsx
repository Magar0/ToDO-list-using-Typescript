"use client";

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import { todo } from "node:test";

const Todos = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");

  let { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();

  let filterTodos = todos;
  if (todosFilter === "active") {
    filterTodos = filterTodos.filter((item) => !item.completed);
  } else if (todosFilter === "completed") {
    filterTodos = filterTodos.filter((item) => item.completed);
  }

  return (
    <ul className="main-task">
      {filterTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />

            <label htmlFor="{`todo-${todo.id}`}">{todo.task}</label>
            {todo.completed && (
              <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
