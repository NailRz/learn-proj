import { Navigate, Outlet } from "react-router-dom";
import About from "../UI/pages/About";
import Login from "../UI/pages/Login";
import PostIdPage from "../UI/pages/PostIdPage";
import Posts from "../UI/pages/Posts";
import Page404 from "../UI/pages/Page404";

const routes = (isAuth) => [
	{
		path: "/posts",
		element: isAuth ? <Posts /> : <Navigate to="/login" />,
		children: [],
	},
	{ path: "/posts/:id", element: <PostIdPage />, exact: "True" },
	{ path: "/", element: <Navigate to="/posts" />, exact: "True" },
	{ path: "/login", element: isAuth ? <Navigate to="/posts" /> : <Login /> },
    { path: "*", element: <Page404/>   },
    

	{
		path: "/about",
		element: <About />,
		// children: [<Navigate to="/about"></Navigate>],
	},
];

export default routes;

// export const privateRoutes =[
//     {path: '/about', element: About, exact: true},
//     {path: '/posts', element: Posts, exact: true},
//     {path: '/posts/:id', element: PostIdPage, exact: true},
// ]

// export const publicRoutes = [
//     {path: '/login', component: Login, exact: true},
// ]
