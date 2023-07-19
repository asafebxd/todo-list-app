import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    if (task === "") {
      return alert("Make sure you give the task a name :)");
    } else {
      const newTask = {
        id: uuidv4(),
        task: task,
      };
      addTask(newTask);
      navigate("/");
    }
  };

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Task</Label>
        <Input
          type="text"
          value={task}
          onChange={onChange}
          placeholder="Enter Task Name"
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

export default AddTask;
