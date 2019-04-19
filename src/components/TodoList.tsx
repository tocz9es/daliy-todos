import * as React from "react";
import { TodoListItem } from "./TodoListItem";
import { FilterTypes, Todos } from "../TodoApp.types";

interface TodoListProps {
  filter: FilterTypes;
  todos: Todos;
  complete: (id: string) => void;
  remove: (id: string) => void;
  edit: (id: string, label: string) => void;
}

export class TodoList extends React.Component<TodoListProps, any> {
  render() {
    const { filter, todos, complete, remove, edit } = this.props;

    const filteredTodos = Object.keys(todos).filter(id => {
      return (
        filter === "all" ||
        (filter === "completed" && todos[id].completed) ||
        (filter === "active" && !todos[id].completed)
      );
    });

    return (
      <ul className="todos">
        {filteredTodos.map(id => (
          <TodoListItem
            key={id}
            id={id}
            complete={complete}
            edit={edit}
            remove={remove}
            {...todos[id]}
          />
        ))}
      </ul>
    );
  }
}
