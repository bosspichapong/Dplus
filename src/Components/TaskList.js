import styled from 'styled-components'
import Task from '../Components/Task'

const Tasks = styled.div`
    margin-top: 70px;
`;

const TaskList = (props) => {

    return (
        <Tasks>
            {props.tasks.length > 0 ?
                props.tasks.map((task, index) => {
                    return (
                        <Task key={index} task={task} index={index} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
                    )
                })
                :
                null
            }

        </Tasks >
    );
}

export default TaskList;
