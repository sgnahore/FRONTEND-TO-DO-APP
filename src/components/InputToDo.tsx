import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
const todolist = "https://jsonplaceholder.typicode.com/posts";

export default function InputToDo() {
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = { description: newToDo };

      const response = await axios.post("http://localhost:4000/todos", body);

      console.log({ response });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="to-do-app">
        <header>
          <h1> To Do:</h1>
        </header>

        <form className="input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="to-Do-Item"
            placeholder="what do you need to add?"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
          />
          <button id="add" className="add-icon" type="submit">
            +
          </button>
        </form>
      </div>
    </>
  );
}
