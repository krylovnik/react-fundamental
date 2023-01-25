import PostList from "./components/PostList/PostList";
import {useState} from "react";
import './App.css'
import AddPostForm from "./components/AddPostForm/AddPostForm";

function App() {

  let [posts, addPost] = useState([
      {id: 1, title: "JavaScript1", body: "First post about JavaScript"},
      {id: 2, title: "JavaScript2", body: "Second post About JavaScript"},
      {id: 3, title: "JavaScript3", body: "Third post about JavaScript"},
  ])
  return (
    <div className="App">
        <AddPostForm />
        <PostList posts={posts} title="Posts about JavaScript"/>
    </div>
  );
}
export default App;
