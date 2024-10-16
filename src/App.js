import React, { useState } from "react";
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
import usercontext from "./utils/usercontext";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./components/cart";
const App = () => {
  const [user, setuser] = useState("harsh jha");
  return (
    <>
      <Provider store={appstore}>
        <usercontext.Provider value={{ username: user, setuser }}>
          <Header></Header>
          <Outlet />
        </usercontext.Provider>
      </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
