import React, { useState } from 'react'

export default function TodoApp() {

  const [enteredText, setEnteredText] = useState('');

  const [updateTodo, setUpdateTodo] = useState('');

  const [counter, setCounter] = useState(1)

  const [todo, setTodo] = useState([])

  // console.log(enteredText, 'enteredtext')



  const handleAddTodo = () => {

    if (enteredText != '') {
      setTodo(

        [...todo,
        {
          id: counter,
          text: enteredText,
          isEditing: false,
          completed: false
        }
        ]
      )

      setCounter(counter + 1)

      setEnteredText('')
    }


  }

  console.log(todo, 'todos')

  const handleDelete = (todoId) => {

    const deleteTodo = todo.filter((each) => each.id !== todoId)

    setTodo(deleteTodo)

  }


  // [] contains {}


  // {} contains key-value

  // const exam1 = 
  //   {
  //     id : 1
  //   }


  // const exam2 = {

  //   ...exam1, text : 'hi'

  // }


  // const ternary = (false) ? 'action1' : 'action2'

  // console.log(ternary,'ternary')


  // console.log(exam2,"exam2")

  // console.log(!false,"false")

  const handleEdit = (todoId) => {
    console.log(todoId, 'id')

    const updateComplete = todo.map((eachTodo) =>

      (eachTodo.id == todoId) ? { ...eachTodo, isEditing: !eachTodo.isEditing } : eachTodo)


    setTodo(updateComplete)
  }

  const handleSave = (todoId) => {

    const updateComplete = todo.map((eachTodo) =>

      (eachTodo.id == todoId) ? { ...eachTodo, isEditing: false, text : updateTodo } : eachTodo)


    setTodo(updateComplete)
  }




const handleCheckbox = (todoId) => {

  const updateComplete = todo.map((eachTodo) =>

    (eachTodo.id == todoId) ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo)


  setTodo(updateComplete)


}
return (
  <div className='text-center'>

    <h1 >Todo List CRUD</h1>

    <div className='d-flex justify-content-center'>
      <input type="text"
        placeholder='enter the todo title'
        onChange={(e) => setEnteredText(e.target.value)}
        value={enteredText}
      />
      <button className='btn btn-success ms-2' onClick={handleAddTodo} >Add Todo</button>
    </div>

    <div>
      {
        todo.length === 0 ? (
          <h3> no todos available</h3>
        ) :
          (
            todo.map((each, index) => (

              <div className='my-3' key={index}>
                <input type='checkbox'
                  checked={each.completed}
                  placeholder='enter the todo title'
                  onClick={() => handleCheckbox(each.id)}
                  onChange={(e) => setEnteredText(e.target.value)}
                />

                {
                  each.isEditing ? (

                    <input type='text' value={updateTodo} onChange={(e) => setUpdateTodo(e.target.value)} />

                  ) : (
                    <span>{each.text}</span>
                  )
                }




                {
                  each.isEditing ? (
                    <button onClick={() => handleSave(each.id)}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(each.id)}>Edit</button>
                  )
                }

                <button onClick={() => handleDelete(each.id)}>delete</button>
              </div>

            ))
          )
      }
    </div>

  </div>
);
}