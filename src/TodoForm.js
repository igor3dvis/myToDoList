import { useState } from "react";
import "./App.css";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input className="todo-input"
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
      <button className="btn-save">Сохранить</button>
    </form>
  );
}

export default ToDoForm;
