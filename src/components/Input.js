import React, { useState } from "react";
import { useCookies } from "react-cookie";

function Input() {
  const [todo, setTodo] = useState(null);
  const [todos, setTodos, removeTodos] = useCookies(["TODOdata"]);
  var inputdata;
  const Submit = () => {
    setTodo(inputdata);
    setTodos("TODOdata", todo);
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
