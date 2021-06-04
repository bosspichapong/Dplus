import styled from 'styled-components'
import Task from '../Components/Task'
import PropTypes from 'prop-types'
import React from 'react'

const Tasks = styled.div`
    margin-top: 70px;
`;

const TaskList = (props) => {

    return (
        <Tasks>
            {props.tasks.length > 0 ?
                props.tasks.map((task, index) => {
                    return (
                        <Task key={index} task={task} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
                    )
                })
                :
                null
            }
        </Tasks >
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired
}

export default TaskList;
