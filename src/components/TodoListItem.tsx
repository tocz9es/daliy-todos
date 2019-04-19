import * as React from "react";
import { TodoItem } from "../TodoApp.types";
import { Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

interface TodoListItemProps extends TodoItem {
  id: string;
  remove: (id: string) => void;
  complete: (id: string) => void;
  edit: (id: string, label: string) => void;
}

interface TodoListItemState {
  editing: boolean;
  editLabel: string;
}

export class TodoListItem extends React.Component<TodoListItemProps, any> {
  constructor(props: TodoListItemProps) {
    super(props);
    this.state = { editing: false, editLabel: undefined };
  }

  render() {
    const { label, completed, complete, id, remove } = this.props;

    return (
      <li className="todo">
        <label>
          <Checkbox checked={completed} onChange={() => complete(id)} />
          {label}
        </label>
        {/* <IconButton aria-label="Edit" onClick={this._onEdit}>
          <EditIcon fontSize="small" />
        </IconButton> */}
        <IconButton aria-label="Delete" onClick={() => remove(id)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </li>
    );
  }

  _onEdit = () => {};
}
