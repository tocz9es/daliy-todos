import * as React from "react";
import { Todos } from "../TodoApp.types";
import Button from "@material-ui/core/Button";

interface TodoFooterProps {
  clear: () => void;
  todos: Todos;
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(
    id => !props.todos[id].completed
  ).length;

  const _onClick = () => {
    props.clear();
  };

  return (
    <footer>
      <span>
        {itemCount} item{itemCount > 1 ? "s" : ""} left
      </span>
      <Button
        onClick={_onClick}
        className="submit"
        variant="contained"
        color="primary"
      >
        Clear Completed
      </Button>
    </footer>
  );
};
