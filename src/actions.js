export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: 'start'})
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json,
                })
            })
    }
}

export const removeUser = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
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