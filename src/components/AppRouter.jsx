import React, { useContext, useState } from "react";
import { Navigate, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Page404 from "./pages/Page404";
import PostIdPage from "./pages/PostIdPage";
import routes, { publicRoutes, privateRoutes } from "./router/routes";
import MyButton from "./UI/button/MyButton";
import Login from "./pages/Login";
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
