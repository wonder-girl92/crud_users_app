export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: 'todos/load/start'})
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'todos/load/success',
                    payload: json,
                })
            })
    }
};

export const removeTodo = (id) => {
    return (dispatch) => {
        dispatch({type: 'todos/remove/start', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'todos/remove/success',
                    payload: id,
                })
            })
    }
};

export const checkTodo = (id, completed) => {
    return function (dispatch) {
        dispatch({type: 'todos/check/start', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({completed: !completed}),
                headers: {
                    "Content-type": "application/json"
                }
            }
        )
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'todos/check/success',
                    payload: id
                })
            })
    }
};