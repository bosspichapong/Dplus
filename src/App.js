import './App.css';
import styled from 'styled-components'
import React, { useEffect } from 'react'

import AddBar from './Components/AddBar';
import TaskList from './Components/TaskList';

import { addTasks, getTasks, deleteTasks, editTasks } from "./Redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Header = styled.div`
    text-align: center;
`;

function App() {

  const handleValidation = (value) => {

    let fields = value
    let formIsValid = true;

    if (fields !== "") {
      if (!fields.match(/^[a-zA-Z0-9ก-๏ ]+$/)) {
        alert("The entered data must be A-Z, a-z, Thai letters and numbers 0-9 only")
        formIsValid = false;
      }
      if (fields.length < 2 || fields.length > 50) {
        alert("Minimum length 2 maximum length 50")
        formIsValid = false;
      }
    } else {
      alert("The entered data cannot be null")
      formIsValid = false;
    }

    return formIsValid
  }

  const handleSubmit = async (value) => {
    if (handleValidation(value)) {
      dispatch(addTasks(value))
      // setTasks([...tasks, value])
    }
  }

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks)

  useEffect(async () => {
    dispatch(getTasks());
  }, [])

  const handleDelete = async (id) => {
    dispatch(deleteTasks(id))
    // setTasks(tasks.filter((_task, i) => i != index))
  }

  const handleUpdate = async (id, value) => {
    if (handleValidation(value)) {
      console.log(id)
      dispatch(editTasks(id, value));
      return true;
      // setTasks(tasks.slice(0, index).concat([value].concat(tasks.slice(index + 1, tasks.length))))
    } else {
      return false;
    }
  }

  return (
    <div>
      <Header as="h1">
        {"What's the Plan for Today?"}
      </Header>
      <AddBar handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
