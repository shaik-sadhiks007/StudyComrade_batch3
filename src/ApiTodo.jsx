import React from 'react'
import useFetch from './useFetch';

function ApiTodo() {

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

    // console.log(data,'todos data')

    return (
        <div>
            hello
        </div>
    )
}

export default ApiTodo
