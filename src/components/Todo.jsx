import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");

  return (
    <>
      {/* 📝 Todo */}
      <h2>Todo List</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add todo"
      />
      <button
        onClick={() => {
          if (todoInput.trim()) {
            dispatch(addTodo(todoInput));
            setTodoInput("");
          }
        }}
      >
        Add Todo
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => dispatch(removeTodo(index))}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
