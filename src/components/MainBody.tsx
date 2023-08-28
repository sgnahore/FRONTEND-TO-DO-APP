import InputToDo from "./InputToDo";
import AllToDos from "./AllToDos";
import "./styles.css";
import React, { useState } from "react";

const allToDos = "https://jsonplaceholder.typicode.com/posts";

export default function MainBody() {
  return (
    <>
      <AllToDos />
      <InputToDo />
    </>
  );
}
