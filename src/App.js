import PostList from "./components/PostList/PostList";
import {useMemo, useState} from "react";
import './App.css'
import AddPostForm from "./components/AddPostForm/AddPostForm";
import MySelect from "./UI/MySelect/MySelect";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";


function App() {

    let [posts, setPosts] = useState([
        {id: 1, title: "JavaScript1", body: "First post about JavaScript"},
        {id: 2, title: "JavaScript2", body: "Second post About JavaScript"},
        {id: 3, title: "JavaScript3", body: "Third post about JavaScript"},
    ])
    let [selectedSort, setSelectedSort] = useState('')
    let [searchQuery, setSearchQuery] = useState('')
    let sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        } else {
            return posts;
        }
    }, [selectedSort, posts])
    let sortedAndSearchedPosts = useMemo(() => {
        if (searchQuery) {
            return sortedPosts.filter(posts => posts.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return sortedPosts;
    }, [sortedPosts, searchQuery])
    let addPost = (title, body) => {
        let newPost = {
            id: posts.length + 1,
            title: title,
            body: body
        }
        setPosts([...posts, newPost])
    }
    let deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    let resetPostsSort = () => {
        setSelectedSort('')

    }

    let sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <AddPostForm addPost={addPost}/>
            <div className="sortBlock">
                <MySelect
                    sortFunction={sortPosts}
                    defaultValue="Sort by"
                    selectedSort={selectedSort}
                    options={[
                        {value: "title", name: "By title"},
                        {value: "body", name: "By post's text"},
                    ]}
                />
                <MyButton onClick={resetPostsSort}>Reset sort</MyButton>
            </div>
            <MyInput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search by title"/>
            {
                posts.length !== 0 ?
                    <PostList posts={sortedAndSearchedPosts} deletePost={deletePost} title="Posts about JavaScript"/> :
                    <div className="noPosts">There aren't any posts right now. Add new post using form above</div>
            }

        </div>
    );
}

export default App;
