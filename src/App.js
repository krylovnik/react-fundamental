import PostList from "./components/PostList/PostList";
import {useEffect, useState} from "react";
import './App.css'
import AddPostForm from "./components/AddPostForm/AddPostForm";
import MySelect from "./UI/MySelect/MySelect";
import MyButton from "./UI/MyButton/MyButton";



function App() {

    let [posts, setPosts] = useState([
        {id: 1, title: "JavaScript1", body: "First post about JavaScript"},
        {id: 2, title: "JavaScript2", body: "Second post About JavaScript"},
        {id: 3, title: "JavaScript3", body: "Third post about JavaScript"},
    ])
    let [selectedSort, setSelectedSort] = useState('')
    let [postsCopy,setPostsCopy] = useState([]);
    let addPost = (title,body) => {
        let newPost = {
            id: posts.length+1,
            title: title,
            body: body
        }
        setPosts([...posts, newPost])
    }
    let resetPostsSort = () => {
        setSelectedSort('')
        setPosts([...posts].sort((a,b)=>a["id"]-b["id"]))
    }
    let deletePost = (post) => {
        setPosts(posts.filter(p=>p.id !== post.id))
    }
    let sortPosts = (sort) => {
        setSelectedSort(sort);
        if(postsCopy.length === 0) {
            setPostsCopy([...posts])
        }
        setPosts([...posts].sort(( a, b)=> a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <AddPostForm addPost={addPost}/>
            <div className="sortBlock">
                <MySelect
                    sortFunction={sortPosts}
                    defaultValue = "Sort by"
                    selectedSort={selectedSort}
                    options={[
                        {value:"title", name:"By title"},
                        {value: "body", name:"By post's text"},
                    ]}
                />
                <MyButton onClick={resetPostsSort}>Reset sort</MyButton>
            </div>
            {
                posts.length !== 0 ? <PostList posts={posts} deletePost={deletePost} title="Posts about JavaScript"/> :
                    <div className="noPosts">There aren't any posts right now. Add new post using form above</div>
            }

        </div>
    );
}

export default App;
