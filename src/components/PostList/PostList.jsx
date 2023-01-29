import React from 'react';
import PostItem from "./Posts/PostItem";
import s from './PostList.module.css'
const PostList = ({posts,title,deletePost}) => {
    if (!posts.length ) {
        return <div className="noPosts">There aren't any posts right now. Add new post using button above</div>
    }
    return (
        <div>
            <div className={s.title}>{title}</div>
            {posts.map((post) =>
                <PostItem deletePost={deletePost} key={post.id} post={post} />
            )}
        </div>
    );
};

export default PostList;