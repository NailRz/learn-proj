import React from 'react';
import Post from './Post';

const PostList = ({posts, title, remove}) => {
    return (
        <div>
        <h1 style = {{textAlign: 'center'}}>{title}</h1>
        
      { posts.map((post, index) => 
        <Post remove = {remove} number = {index + 1} post = {post} key = {post.id}/>
        )}
        </div>
    );
};

export default PostList;

// posts.lenght !== 0 ? <h2>Создайте дело!</h2> : 