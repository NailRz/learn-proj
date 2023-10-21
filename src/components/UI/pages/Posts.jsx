import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import { getPagesCount } from "../../../utils/page";
import MyModal from "../modal/MyModal";
import PostForm from "../../PostForm";
import MyButton from "../button/MyButton";
import PostFilter from "../../PostFilter";
import PostList from "../../PostList";
import Pagination from "../pagination/Pagination";
import MySelect from "../select/MySelect";
import { useObserver } from "../../hooks/useObserver";

function Posts() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({ sort: "", query: "" });
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const lastElement = useRef();

	const [fetchPosts, isPostsLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page);
			setPosts([...posts, ...response.data]);
			const totalCount = response.headers["x-total-count"];
			console.log(totalCount, "totalcount");
			console.log(limit, "limit");
			console.log(page, "page");
			setTotalPages(getPagesCount(totalCount, limit));
			console.log(posts);
			// setPosts([])
		}
	);
	console.log(totalPages);

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1);
	});

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page, limit]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
		console.log(posts);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		setPage(page);
	};

	const [modal, setModal] = useState(false);

	return (
		<div className="App">
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<MyButton
				style={{ marginTop: 20, marginInline: 15 }}
				onClick={() => setModal(true)}
			>
				Создать...
			</MyButton>
			<PostFilter
				style={{ marginInline: 15 }}
				filter={filter}
				setFilter={setFilter}
			/>
			<MySelect
				value={limit}
				onChange={(value) => setLimit(value)}
				defaultValue="Кол-во элементов на странице"
				options={[
					{ value: 5, name: "5" },
					{ value: 10, name: "10" },
					{ value: 25, name: "25" },
					{ value: -1, name: "Показать все" },
				]}
			/>
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={"Список"}
			/>
			<div ref={lastElement} style={{ height: 20, background: "red" }} />
			{postError && <h1>Произошла ошибка: ${postError}</h1>}
			{isPostsLoading && <h1>Идет загрузка...</h1>}
			<Pagination totalPages={totalPages} page={page} changePage={changePage} />
		</div>
	);
}
export default Posts;
