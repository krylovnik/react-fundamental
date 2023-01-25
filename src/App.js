import './App.css';
import PostList from "./components/PostList/PostList";

function App() {

  let [posts, addPost] = [
      {id: 1, title: "JavaScript1", body: "First post about JavaScript"},
      {id: 2, title: "JavaScript2", body: "Second post About JavaScript"},
      {id: 3, title: "JavaScript3", body: "Third post about JavaScript"},
  ]
  return (
    <div className="App">
        <PostList posts title="Posts about JavaScript"/>
    </div>
  );
}
export default App;
