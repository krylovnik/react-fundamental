import React from 'react';
import PostItem from "./Posts/PostItem";
import s from './PostList.module.css'
const PostList = ({posts,title}) => {
    return (
        <div>
            <div className={s.title}>{title}</div>
            {posts.map((post) =>
                <PostItem post={post} key={posts.id}/>
            )}
        </div>
    );
};

export default PostList;