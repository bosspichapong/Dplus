import { SET_TASKS } from './types'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBiOWVhODQyZDQxZGEyNzMyYjcyMWIzIiwiaWF0IjoxNjIzMDY2NjgzLCJleHAiOjE2MjU2NTg2ODN9.DSzvo92GqJgssKvw8PZfl9alZ0IZK9xwqyQ9RpuUYO8"

export const setTasks = (task) => ({
    type: SET_TASKS,
    payload: task
});

export const getTasks = () => async (dispatch) => {
    try {
        var res = await fetch("http://206.189.89.204/app/no_auth/todos", {
            method: "GET",
        });
        var data = await res.json()
        var tmp = data.data.map((d) => {
            return { _id: d._id, title: d.title }
        })
        dispatch(setTasks(tmp))
    } catch (e) {
        console.log(e)
    }
};

export const addTasks = (value) => async (dispatch) => {
    try {
        var res = await fetch("http://206.189.89.204/app/with_auth/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:
                JSON.stringify({ title: value })
        });
        var data = await res.json()
        console.log(data)
    } catch (e) {
        alert(e)
    }
    dispatch(getTasks());
}

export const deleteTasks = (id) => async (dispatch) => {
    try {
        var res = await fetch(`http://206.189.89.204/app/with_auth/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        var data = await res.json()
        console.log(data)
    } catch (e) {
        alert(e)
    }
    dispatch(getTasks());
}

export const editTasks = (id, value) => async (dispatch) => {
    try {
        var res = await fetch(`http://206.189.89.204/app/with_auth/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:
                JSON.stringify({ title: value })
        });
        var data = await res.json()
        console.log(data)
    } catch (e) {
        alert(e)
    }
    dispatch(getTasks());
}