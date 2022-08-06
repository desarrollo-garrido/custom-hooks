import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  // ADD Item al TODO
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  // Borrar Item del TODO
  const handleDeleteTodo = (id) => {
    dispatch({
      action: "[TODO] Remove Todo",
      payload: id,
    });
  };

  // Toggle Item del TODO
  const handleToggleTodo = (id) => {
    // console.log(id);
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount : todos.filter(todo=>!todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  };
};
