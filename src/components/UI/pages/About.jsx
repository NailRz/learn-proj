import React, { useContext } from "react";
import { AuthContext } from "../../context";

const About = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	return (
		<div>
			<h1>About</h1>
			{isAuth ? (
				<h1> Вы авторизаваны: {isAuth.toString()}</h1>
			) : (
				<h1> Вы не авторизаны: {isAuth.toString()}</h1>
			)}
		</div>
	);
};

export default About;
