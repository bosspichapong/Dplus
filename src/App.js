import './App.css';
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

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
      try {
        var res = await fetch("http://206.189.89.204/app/with_auth/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBiOWVhODQyZDQxZGEyNzMyYjcyMWIzIiwiaWF0IjoxNjIyNzk3MTc5LCJleHAiOjE2MjUzODkxNzl9.gEejm1B_XbGNh4kcJkmDZ3ROoro8DKQS1EnuZacL_H4"
          },
          body:
            JSON.stringify({ title: value })
        });
        var data = await res.json()
        console.log(data)
      } catch (e) {
        alert(e)
      }
      getData()
      // setTasks([...tasks, value])
    }
  }

  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    getData()
  }, [])

  const getData = async () => {
    try {
      var res = await fetch("http://206.189.89.204/app/no_auth/todos", {
        method: "GET",
      });
      var data = await res.json()
      var tmp = data.data.map((d) => {
        return { _id: d._id, title: d.title }
      })
      setTasks(tmp)
    } catch (e) {
      alert(e)
    }
  }

  const handleDelete = async (id) => {
    try {
      var res = await fetch(`http://206.189.89.204/app/with_auth/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBiOWVhODQyZDQxZGEyNzMyYjcyMWIzIiwiaWF0IjoxNjIyNzk3MTc5LCJleHAiOjE2MjUzODkxNzl9.gEejm1B_XbGNh4kcJkmDZ3ROoro8DKQS1EnuZacL_H4"
        }
      });
      var data = await res.json()
      console.log(data)
      getData()
    } catch (e) {
      alert(e)
    }
    // setTasks(tasks.filter((_task, i) => i != index))
  }

  const handleUpdate = async (id, value) => {
    if (handleValidation(value)) {
      console.log(id)
      try {
        var res = await fetch(`http://206.189.89.204/app/with_auth/todos/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBiOWVhODQyZDQxZGEyNzMyYjcyMWIzIiwiaWF0IjoxNjIyNzk3MTc5LCJleHAiOjE2MjUzODkxNzl9.gEejm1B_XbGNh4kcJkmDZ3ROoro8DKQS1EnuZacL_H4"
          },
          body:
            JSON.stringify({ title: value })
        });
        var data = await res.json()
        console.log(data)
        getData()
        return true
      } catch (e) {
        alert(e)
        return false
      }
      // setTasks(tasks.slice(0, index).concat([value].concat(tasks.slice(index + 1, tasks.length))))
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
