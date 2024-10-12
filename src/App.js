import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "../src/components/Body";
import Header from "../src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import ResInfo from "./components/ResInfo";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            {" "}
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/res/:resid",
        element: <ResInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
