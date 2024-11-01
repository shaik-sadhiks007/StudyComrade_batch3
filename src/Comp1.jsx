import React, { useContext } from 'react'
import { productsForTest } from './App'

function Comp1() {

    const { count } = useContext(productsForTest)

    console.log('comp1 is triggered')
    return (
        <div>

            <h1>
                comp1 counter : {count}
            </h1>
            
        </div>
    )
}

export default Comp1
