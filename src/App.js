import "./App.css";
import CreateUser from "./components/CreateUser";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Users />
      <Movies />
      <User />
      <Movie />
      <hr />
      <CreateUser />
    </div>
  );
}

export default App;
