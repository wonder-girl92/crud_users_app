import {useDispatch, useSelector} from "react-redux";
import {loadTodos, removeTodo, checkTodo} from "./actions";
import {useEffect} from "react";
import fl from "./fl.jpg"

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos())
    }, []);

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="head-text"> Список дел: </h1>
      </header>
<main>
    {loading ? 'идет загрузка...' : (todos.map(todo => {
        return (
            <div className="todo">
                <div>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleCheck(todo.id, todo.completed)}
                    />
                </div>
                <div className="name">
                {todo.title}
                </div>
                <div className="actions">
                    <button onClick={() => handleDelete(todo.id)}>
                    <img src={fl} alt="fl"/>
                    </button>
                </div>
            </div>
        )
    })
    )}

</main>

    </div>
  );
}

export default App;
