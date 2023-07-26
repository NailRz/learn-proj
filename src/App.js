import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++  ", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    console.log(posts);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <PostForm create={createPost}></PostForm>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={"Список дел"} />
      ) : (
        <h2>Создайте дело!</h2>
      )}
    </div>
  );
}

export default App;
