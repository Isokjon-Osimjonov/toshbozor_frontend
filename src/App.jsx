import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/navbar/Navbar";
import BGAwrapper from "./components/BGA/_bgaWrapper/BGAwrapper";
import Main from "./pages/main/Main";
import Products from "./pages/products/Products";
import Inuse from "./pages/inuse/Inuse";
import Catalog from "./pages/dow_catalog/Catalog";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayuot from "./ui/AppLayuot";

const router = createBrowserRouter([
  {
    element: <AppLayuot />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/mahsulotlar",
        element: <Products />,
      },
      {
        path: "/namunalar",
        element: <Inuse />,
      },
      {
        path: "/katalog",
        element: <Catalog />,
      },
    ],
  },
]);

function App() {
  // const [activeNav, setActiveNav] = useState("b");
  return <RouterProvider router={router} />;
}

export default App;
