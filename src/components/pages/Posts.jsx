import React, { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { getPagesCount } from "../../utils/page";
import MyModal from "../UI/modal/MyModal";
import PostForm from "../PostForm";
import MyButton from "../UI/button/MyButton";
import PostFilter from "../PostFilter";
import PostList from "../PostList";
import Pagination from "../UI/pagination/Pagination";
import MySelect from "../UI/select/MySelect";


function Posts() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({ sort: "", query: "" });
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers["x-total-count"];
		setTotalPages(getPagesCount(totalCount, limit));
		console.log(posts)
		// setPosts([])
	});

	useEffect(() => {
		fetchPosts();
	}, [page, limit]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
		console.log(posts)
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

  const changePage = (page) => {
    setPage(page)
  }

	const [modal, setModal] = useState(false);

	return (
		<div className="App">
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<MyButton style={{ marginTop: 20, marginInline: 15 }} onClick={() => setModal(true)}>
				Создать...
			</MyButton>
			<PostFilter style = {{marginInline: 15}} filter={filter} setFilter={setFilter} />
			<MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Показать все'},
                ]}
            />
			{postError && <h1>Произошла ошибка: ${postError}</h1>}
			{isPostsLoading ? (
				<h1>Идет загрузка...</h1>
			) : (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title={"Список"}
				/>
			)}
			<Pagination  totalPages={totalPages} page={page} changePage={changePage} ></Pagination>
		</div>
	);
}
export default Posts;
