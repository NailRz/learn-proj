import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import PostFilter from "./components/PostFilter";
import { usePosts } from "./components/UI/hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([            
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++  ", body: "Description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <h1>Todo list</h1>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <MyButton style={{ marginTop: 20 }} onClick={() => setModal(true)}>
        Создать дело
      </MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список дел"}
      />
    </div>
  );
}
export default App;
