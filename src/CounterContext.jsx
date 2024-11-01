import React, { useContext } from 'react'
import { productsForTest } from './App'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'


function CounterContext() {

    const {setCount,count} = useContext(productsForTest)
    
  return (
    <div>
      <Comp1/>
      <Comp2/>
      <Comp3/>

      <button onClick={() => setCount(count+1)}>increment</button>
    </div>
  )
}

export default CounterContext
