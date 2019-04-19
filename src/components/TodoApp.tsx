import * as React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";
import { TodoFooter } from "./TodoFooter";
import { Todos, FilterTypes } from "../TodoApp.types";

let index = 0;

interface TodoAppState {
  todos: Todos;
  filter: FilterTypes;
}

export class TodoApp extends React.Component<{}, TodoAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: {},
      filter: "all"
    };
  }

  render() {
    const { filter, todos } = this.state;
    return (
      <div>
        <TodoHeader
          addTodo={this._addTodo}
          setFilter={this._setFilter}
          filter={filter}
        />
        <TodoList
          todos={todos}
          filter={filter}
          complete={this._complete}
          remove={this._remove}
          edit={this._edit}
        />
        <TodoFooter todos={todos} clear={this._clear} />
      </div>
    );
  }

  private _addTodo = (label: string) => {
    const { todos } = this.state;
    const id = index++;

    this.setState({
      todos: { ...todos, [id]: { label, completed: false } }
    });
  };

  private _setFilter = (filter: FilterTypes) => {
    this.setState({
      filter: filter
    });
  };

  private _complete = (id: string) => {
    const { todos } = this.state;
    const todo = todos[id];
    const newTodos = {
      ...todos,
      [id]: { ...todo, completed: !todo.completed }
    };

    this.setState({
      todos: newTodos
    });
  };

  private _remove = (id: string) => {
    const newTodos = { ...this.state.todos };
    delete newTodos[id];

    this.setState({
      todos: newTodos
    });
  };

  private _edit = (id: string, label: string) => {
    const newTodos = { ...this.state.todos };
    newTodos[id] = { ...newTodos[id], label };

    this.setState({
      todos: newTodos
    });
  };

  private _clear = () => {
    const { todos } = this.state;
    const newTodos = {};

    Object.keys(this.state.todos).forEach(key => {
      if (todos[key].completed) {
        // newTodos[key] = todos[key];
        delete todos[key];
      }
    });

    this.setState({
      todos
    });
  };
}
