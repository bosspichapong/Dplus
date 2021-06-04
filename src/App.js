import './App.css';
import styled from 'styled-components'
import React, { useState } from 'react'

import AddBar from './Components/AddBar';
import TaskList from './Components/TaskList';

const Header = styled.div`
    text-align: center;
`;

function App() {

  const handleValidation = (value) => {

    let fields = value
    let formIsValid = true;

    if (fields !== "") {
      if (!fields.match(/^[a-zA-Z0-9ก-๏]+$/)) {
        alert("The entered data cannot be null, And must be A-Z, a-z, Thai letters and numbers 0-9 only")
        formIsValid = false;
      }
      if (fields.length < 2 || fields.length > 50) {
        alert("Minimum length 2 maximum length 50")
        formIsValid = false;
      }
    } else {
      alert("Please fill")
      formIsValid = false;
    }

    return formIsValid
  }

  const handleSubmit = (value) => {
    if (handleValidation(value)) {
      setTasks([...tasks, value])
    }
  }

  const [tasks, setTasks] = useState([]);

  const handleDelete = (index) => {
    setTasks(tasks.filter((_task, i) => i != index))
  }

  const handleUpdate = (index, value) => {
    if (handleValidation(value)) {
      setTasks(tasks.slice(0, index).concat([value].concat(tasks.slice(index + 1, tasks.length))))
      return true
    } else {
      return false
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
