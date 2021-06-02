import styled from 'styled-components'
import { useState } from 'react'

const FormGroup = styled.form`
  text-align: center;
  margin-top: 20px;
`;

const Input = styled.input`
    padding: 10px;
    width: 20%;
    border: 2px solid rgba(235, 234, 234, .7);
    border-radius: 5px 0px 0px 5px;
`;

const Button = styled.input`
    padding: 10px;
    width: 70px;
    background-color: ${props => props.color ? props.color : null};
    color: white;
    border-color: transparent;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`;

const AddBar = (props) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            props.handleSubmit(value);
        } else {
            alert("Form has errors.")
        }
        setValue('');
    }

    const handleValidation = () => {

        let fields = value
        let formIsValid = true;

        if (fields !== "") {
            if (!fields.match(/^[a-zA-Z0-9ก-๛]+$/)) {
                formIsValid = false;
            }
        } else {
            formIsValid = false;
        }

        if (fields.length < 2 || fields.length > 50) {
            formIsValid = false;
        }

        return formIsValid;
    }


    return (
        <FormGroup onSubmit={handleClick}>
            <Input type="text" placeholder="Enter some plan" value={value} onChange={handleChange} />
            <Button type="submit" value="Add" color="#00a48e" />
        </FormGroup>
    );
}

export default AddBar;
