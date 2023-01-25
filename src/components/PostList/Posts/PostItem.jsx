import React from 'react';
import s from "./PostItem.module.css"

const PostItem = ({post}) => {
    return (
        <div className={s.post}>
            <div>
                <div className={s.title}>{post.id}. {post.title }</div>
                <div>{post.body}</div>
            </div>
            <div className={s.buttonBlock}>
                <button>Удалить</button>
            </div>

        </div>
    );
};

export default PostItem;