import * as React from "react";
import { FilterTypes } from "../TodoApp.types";
import { Input, Button } from "@material-ui/core";

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
  filter: FilterTypes;
}

interface TodoHeaderState {
  labelInput: string;
}

export class TodoHeader extends React.Component<
  TodoHeaderProps,
  TodoHeaderState
> {
  constructor(props: any) {
    super(props);
    this.state = { labelInput: "" };
  }

  render() {
    const { filter, setFilter } = this.props;
    return (
      <header>
        <h1>Daily Todos</h1>
        <div className="addTodo">
          <Input
            value={this.state.labelInput}
            onChange={this._onChange}
            className="textfield"
            placeholder="Add Todo"
          />
          <Button
            onClick={this._onAdd}
            className="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </div>
        <nav className="filter">
          <button
            onClick={this._onFilter}
            className={filter === "all" ? "selected" : ""}
          >
            all
          </button>
          <button
            onClick={this._onFilter}
            className={filter === "active" ? "selected" : ""}
          >
            active
          </button>
          <button
            onClick={this._onFilter}
            className={filter === "completed" ? "selected" : ""}
          >
            completed
          </button>
        </nav>
      </header>
    );
  }

  _onChange = (evt: any) => {
    this.setState({ labelInput: evt.target.value });
  };

  _onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: "" });
  };

  _onFilter = (evt: any) => {
    this.props.setFilter(evt.target.innerText);
  };
}
