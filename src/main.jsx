import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import SingleData from "./components/SingleData.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Loder from "./components/Loder.jsx";
import Blog from "./components/Blog.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";
import PrivetRoute from "./components/privetRoute/PrivetRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-side-cyan.vercel.app/data"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "single/:id",
        element:<PrivetRoute><SingleData></SingleData></PrivetRoute> ,
        loader: ({ params }) =>
          fetch(`https://server-side-cyan.vercel.app/food/${params.id}`),
      },
      {
        path: "loder",
        element: <Loder></Loder>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
