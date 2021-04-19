import React from 'react';
import ReactLoading from "react-loading";
import fl from "./fl.jpg";
import {checkTodo, removeTodo} from "../redux/actions";
import {useDispatch} from "react-redux";

function Todo(props) {

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }

    const dispatch = useDispatch();

    return (
        <div className="todo">
            <div>
                {props.todo.checking ? (
                    <ReactLoading
                        color="blue"
                        type="spinningBubbles"
                        width={22} height={22}
                    />
                ) : (
                    <input
                        type="checkbox"
                        checked={props.todo.completed}
                        onChange={() => handleCheck(
                            props.todo.id,
                            props.todo.completed)}
                    />
                )}
            </div>
            <div className="name">
                {props.todo.title}
            </div>
            <div className="actions">
                <button
                    onClick={() => handleDelete(props.todo.id)}
                    disabled={props.todo.deleting}
                >
                    <img src={fl} alt="fl"/>
                </button>
            </div>
        </div>
    );
}

export default Todo;