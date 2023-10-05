import React from "react";
import Post from "./Post";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h2>Посты не найдены!</h2>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {posts.map((post, index) => (
        <Post remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
