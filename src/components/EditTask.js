import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

const EditTask = () => {
  const [selectedTask, setSelectedTask] = useState({ id: "", task: "" });
  const { tasks, editTask, deleteTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const currentTaskId = useParams();

  useEffect(() => {
    const taskId = currentTaskId;
    const selectedTask = tasks.find((task) => task.id === taskId.id);
    setSelectedTask(selectedTask);
  }, [(currentTaskId, tasks)]);

  const onSubmit = () => {
    if (selectedTask.task === "") {
      deleteTask(selectedTask.id);
      navigate("/");
    } else {
      editTask(selectedTask);
      navigate("/");
    }
  };

  const onChange = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Task</Label>
        <Input
          type="text"
          value={selectedTask.task}
          onChange={onChange}
          name="task"
          placeholder="Enter new Task Name"
        ></Input>
      </FormGroup>
      <Button className="btn btn-success" type="submit">
        Submit
      </Button>
      <Link to="/" className="mx-2 btn btn-danger">
        Cancel
      </Link>
    </Form>
  );
};

export default EditTask;
