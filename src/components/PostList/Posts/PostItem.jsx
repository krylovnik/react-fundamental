import React from 'react';
import s from "./PostItem.module.css"
import MyButton from "../../../UI/MyButton/MyButton";

const PostItem = ({post, deletePost}) => {
    return (
        <div className={s.post}>
            <div>
                <div className={s.title}>{post.id}. {post.title }</div>
                <div>{post.body}</div>
            </div>
            <div className={s.buttonBlock}>
                <MyButton onClick={()=>{deletePost(post)}}>Удалить</MyButton>
            </div>

        </div>
    );
};

export default PostItem;