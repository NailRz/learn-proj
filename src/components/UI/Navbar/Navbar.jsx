import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	console.log(isAuth)

	// useEffect(() => {
	// 	authHandler()
	// }, [setIsAuth])

	const authHandler = () => {
		setIsAuth(!isAuth);
		// console.log(isAuth)
	};

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	};

	return (
		<div className="navbar">
			<div className="navbar__links">
				<Link to="/posts">Posts</Link>
				<Link to="/about">About</Link>
				{isAuth
				? <MyButton onClick={authHandler}>Login/Logout</MyButton>
				: <MyButton onClick={authHandler}>Login/Logout</MyButton>
				}
				 <MyButton onClick={logout}>Logout</MyButton>
			</div>
		</div>
	);
};

export default Navbar;
