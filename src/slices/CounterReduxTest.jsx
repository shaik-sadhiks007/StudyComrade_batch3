import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'

function CounterReduxTest() {

    // const [counter, setCounter] = useState(0)

    const counterRedux = useSelector((state) => state.counter.value) // i am getting data from redux to react

    const dispatch = useDispatch()

    console.log(counterRedux,"counterRedux")

    const handleButton = () => {
        console.log('button triggered')

        dispatch(increment()) // data from react to redux useDispatch

        // setCounter(counter + 1)
    }
    return (
        <div>

            <h1>Counter : {counterRedux}</h1>

            <button onClick={handleButton}> increment</button>
        </div>
    )
}

export default CounterReduxTest
