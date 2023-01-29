import PostList from "./components/PostList/PostList";
import {useMemo, useState} from "react";
import './App.css'
import AddPostForm from "./components/AddPostForm/AddPostForm";
import MyButton from "./UI/MyButton/MyButton";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./UI/MyModal/MyModal";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript1", body: "First post about JavaScript"},
        {id: 2, title: "JavaScript2", body: "Second post About JavaScript"},
        {id: 3, title: "JavaScript3", body: "Third post about JavaScript"},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible, setVisible] = useState(false)

    let sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
            return posts;
        }
    }, [filter.sort, posts])
    let sortedAndSearchedPosts = useMemo(() => {
        if (filter.query) {
            return sortedPosts.filter(posts => posts.title.toLowerCase().includes(filter.query.toLowerCase()))
        }
        return sortedPosts;
    }, [sortedPosts, filter.query])
    let addPost = (title, body) => {
        let newPost = {
            id: posts.length + 1,
            title: title,
            body: body
        }
        setPosts([...posts, newPost])
        setVisible(false)
    }
    let deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{fontSize: "20px"}} onClick={()=>setVisible(true)}>Create a new post</MyButton>
            <MyModal visible={visible} setVisible={setVisible}><AddPostForm addPost={addPost}/></MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchedPosts} deletePost={deletePost} title="Posts about JavaScript"/>
        </div>
    );
}

export default App;
