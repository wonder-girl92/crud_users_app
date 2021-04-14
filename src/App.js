import {useDispatch, useSelector} from "react-redux";
import {loadUsers, removeUser} from "./actions";
import {useEffect} from "react";
import fl from "./fl.jpg"

function App() {
    const users = useSelector(state => state.users);
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, []);

    const handleDelete = (id) => {
        dispatch(removeUser(id))
    }

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="head-text"> INVITED GUESTS: </h1>
      </header>
<main>
    {loading ? 'идет загрузка...' : (users.map(user => {
        return (
            <div className="user">
                <div>
                    <input type="checkbox"/>
                </div>
                <div className="name">
                {user.name}
                </div>
                <div className="actions">
                    <button onClick={() => handleDelete(user.id)}>
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
