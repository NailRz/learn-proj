import { Navigate, Outlet } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Page404 from "../pages/Page404";

const routes = (isAuth) => [
	{
		path: "/posts",
		element: isAuth ? <Posts /> : <Navigate to="/login" />,
		children: [],
	},
    { path: '/', element: <Navigate to="/posts" /> },
    { path: '/login', element: <Login/> },

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
