import PostList from "./components/PostList/PostList";
import {useState} from "react";
import './App.css'
import AddPostForm from "./components/AddPostForm/AddPostForm";

function App() {

    let [posts, setPost] = useState([
        {id: 1, title: "JavaScript1", body: "First post about JavaScript"},
        {id: 2, title: "JavaScript2", body: "Second post About JavaScript"},
        {id: 3, title: "JavaScript3", body: "Third post about JavaScript"},
    ])
    let addPost = (title,body) => {
        let newPost = {
            id: posts.length+1,
            title: title,
            body: body
        }
        setPost([...posts, newPost])
    }


    return (
        <div className="App">
            <AddPostForm addPost={addPost}/>
            <PostList posts={posts} title="Posts about JavaScript"/>
        </div>
    );
}

export default App;
