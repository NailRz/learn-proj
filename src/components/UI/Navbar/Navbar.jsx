import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const authHandler = () => {
		// console.log(isAuth)
		setIsAuth((prev) => !prev);
		// console.log(isAuth)
	};

	return (
		<div className="navbar">
			<div className="navbar__links">
				<Link to="/posts">Posts</Link>
				<Link to="/about">About</Link>
				<MyButton onClick={authHandler}> lofdf</MyButton>
			</div>
		</div>
	);
};

export default Navbar;
