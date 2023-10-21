import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostService";

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(
        async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});

	const [fetchComments, isCommentsLoading, commentsError] = useFetching(
		async (id) => {
			const response = await PostService.getCommentsByPostId(id);
			setComments(response.data);
		}
	);

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);

	return (
		<div>
			<h1>PostPage </h1>
			{isLoading ? (
				<h1>Идет загрузка...</h1>
			) : (
				<div className="post">
					<div className="post-content">
						<strong>
							{post.id}. {post.title}
						</strong>
						<div>{post.body}</div>
					</div>
				</div>
			)}
			<h1>Comments</h1>
			{isCommentsLoading ? (
				<h1>Идет загрузка комментариев...</h1>
			) : (
				<div>
					{comments.map((comm) => (
						<div key={comm.id} style={{   }}>
							<h5>{comm.email}</h5>
							<div>{comm.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PostIdPage;
