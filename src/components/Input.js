import React, { useState } from "react";
import "./Input.css";
import { useIndexedDB } from "react-indexed-db";

function Input() {
  const { add } = useIndexedDB("todo");
  const [todo, setTodo] = useState(null);
  const Submit = () => {
    add({ title: todo }).then(
      (event) => {
        console.log("Add todo: ", event.target.result);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="할일을 입력하세요!"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={Submit}>추가</button>
      </form>
    </div>
  );
}

export default Input;
