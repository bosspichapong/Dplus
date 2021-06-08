import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "./Redux/Test/actions"

const Test = () => {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [v, setV] = useState(0)
    return (
        <div>
            <center>
                {value}
            </center>
            <center>
                <input value={v} onChange={(event) => setV(event.target.value)}></input>
            </center>
            <center>
                <button onClick={() => dispatch(increment(v))}>
                    {"+"}
                </button>
                <button onClick={() => dispatch(decrement(v))}>
                    {"-"}
                </button>
            </center>
        </div>
    );

}

export default Test