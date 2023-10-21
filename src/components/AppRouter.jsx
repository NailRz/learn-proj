import React, { useContext, useState } from "react";
import { Navigate, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import About from "./UI/pages/About";
import Posts from "./UI/pages/Posts";
import Page404 from "./UI/pages/Page404";
import PostIdPage from "./UI/pages/PostIdPage";
import routes, { publicRoutes, privateRoutes } from "./router/routes";
import MyButton from "./UI/button/MyButton";
import Login from "./UI/pages/Login";
import { AuthContext } from "./context";

const AppRouter = () => {
	const { isAuth } = useContext(AuthContext);

  const routing = useRoutes(routes(isAuth));

  return (
    <>
      {routing}
    </>
  );
};

export default AppRouter;
