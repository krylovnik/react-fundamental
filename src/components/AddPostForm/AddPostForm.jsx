import React, {useState} from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";

const AddPostForm = ({addPost}) => {

    let [title, setTitle] = useState("")
    let [postText, setPostText] = useState("")
    let AddPost = (e) => {
        e.preventDefault()
        addPost(title,postText);
        setTitle("");
        setPostText("");
    }

    return (
        <div>
            <form>
                <MyInput value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Input post title"/>
                <MyInput value={postText} onChange={(e)=>setPostText(e.target.value)} type="text" placeholder="Input post text"/>
                <MyButton onClick={AddPost}>Add post</MyButton>


            </form>
        </div>
    );
};

export default AddPostForm;