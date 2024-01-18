import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Restaurant from "../pages/Restaurant";
import News from "../pages/News";
import Contact from "../pages/Contact";

export const ROOT = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
