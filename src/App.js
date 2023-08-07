import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++  ", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <MyButton style = {{marginTop:  20}}  onClick = {() => setModal(true)}> Создать дело </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <h1>Todo list</h1>

      {posts.length === 0 ? (
        <h2>Создайте дело!</h2>
      ) : (
        <PostList remove={removePost} posts={posts} title={"Список дел"} />
      )}
    </div>
  );
}
export default App;
