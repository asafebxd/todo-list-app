import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);

  return (
    <ListGroup>
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => (
            <ListGroupItem
              className="d-flex justify-content-between"
              key={task.id}
            >
              <strong key={task.id}>{task.task}</strong>
              <div>
                <Link to={`/edit/${task.id}`} className="mx-2 btn btn-warning">
                  Edit
                </Link>
                <Button
                  onClick={() => deleteTask(task.id)}
                  className="mx-2 btn btn-danger"
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No tasks</h4>
      )}
    </ListGroup>
  );
};

export default TaskList;
