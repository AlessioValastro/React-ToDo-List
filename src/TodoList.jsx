/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
    </ul>
  );
}
