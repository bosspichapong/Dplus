import './App.css';
import styled from 'styled-components'
import { useState } from 'react'

import AddBar from './Components/AddBar';
import TaskList from './Components/TaskList';

const Header = styled.div`
    text-align: center;
`;

function App() {

  const handleSubmit = (value) => {
    console.log(value)
    setTasks([...tasks, value])
  }

  const [tasks, setTasks] = useState([]);

  const handleDelete = (index) => {
    if (index === 0) {
      setTasks(tasks.slice(1, tasks.length))
    } else if (index === tasks.length - 1) {
      setTasks(tasks.slice(0, index))
    } else {
      setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1, tasks.length)))
    }
  }

  const handleUpdate = (index, value) => {
    setTasks(tasks.slice(0, index).concat([value].concat(tasks.slice(index + 1, tasks.length))))
  }

  return (
    <div>
      <Header as="h1">
        What's the Plan for Today?
      </Header>
      <AddBar handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
