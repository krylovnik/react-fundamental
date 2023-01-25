import React from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";

const AddPostForm = () => {
    return (
        <div>
            <form>
                <MyInput type="text" placeholder="Input post title"/>
                <MyInput type="text" placeholder="Input post text"/>
                <MyButton>Add post</MyButton>
            </form>
        </div>
    );
};

export default AddPostForm;