import styled from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'
import React from 'react'

const TaskDec = styled.div`
    width: 40%;
    height: 60px;
    padding: 10px;
    border: 2px solid rgba(235, 234, 234, .7);
    border-radius: 5px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
`;

const Text = styled.p`
    padding: 2px;
    padding-left: 10px;
`;

const GroupOfButton = styled.div`
    padding-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
`;

const Button = styled.button`
    background-color: ${props => props.color ? props.color : null};
    border-color: transparent;
    color: white;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    opacity: ${props => props.disabled ? 0.3 : 0.8};
    border-radius: ${props => props.left ? "5px 0px 0px 5px" : props.oneButton ? "5px" : "0px 5px 5px 0px"};
    padding: 10px;
    width: 70px;
    height: 45px;
    &:hover {
        opacity: 1;
    }
`;

const Input = styled.input`
    width: 90%;
    height: 40px;
    margin: auto;
    margin-left: 10px;
    margin-right: 20px;
    border: 2px solid rgba(235, 234, 234, .7);
    border-radius: 5px;
`;

const Task = (props) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleClick = async () => {
        if (await props.handleUpdate(props.task._id, value)) {
            setIsEdit(false)
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const [value, setValue] = useState(props.task.title);

    return (
        <TaskDec>
            { isEdit ?
                <>
                    <Input value={value} onChange={handleChange} />
                    <GroupOfButton>
                        <Button oneButton onClick={handleClick} color="#00a48e">Update</Button>
                    </GroupOfButton>
                </>
                :
                <>
                    <Text>{props.task.title}</Text>
                    <GroupOfButton>
                        <Button disable={isEdit} left onClick={() => setIsEdit(true)} color="#00a48e">Edit</Button>
                        <Button color="red" onClick={() => props.handleDelete(props.task._id)}>Delete</Button>
                    </GroupOfButton>
                </>
            }
        </TaskDec>
    );
}

Task.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    left: PropTypes.string,
    oneButton: PropTypes.bool,
    index: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired
}

export default Task;
