import React, { useContext } from 'react'
import { test } from './App'

function NewTest() {
    const {test1} = useContext(test)
    console.log(test1,'test1')
  return (
    <h1>
      New test
    </h1>
  )
}

export default NewTest
