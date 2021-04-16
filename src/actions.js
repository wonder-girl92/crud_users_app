export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: 'start'})
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json,
                })
            })
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete',
                    payload: id,
                    })
            })
    }
}

export const checkTodo = (id, completed) => {
    return function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers: {
            "Content-type": "application/json"
        }}
    )
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                type: 'check',
                payload: id
                })
            })
    }
}