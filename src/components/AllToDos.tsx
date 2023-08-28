import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  description: string;
}

export default function AllToDos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:4000/todos");
    const jsonData = await response.json();
    console.log(jsonData);

    setTodos(jsonData);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ol>
    </>
  );
}
