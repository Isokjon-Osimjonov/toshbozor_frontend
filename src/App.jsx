//app.js
import "./styles/App.css";
import Main from "./pages/main/Main";
import Products from "./pages/products/Products";
import Inuse from "./pages/inuse/Inuse";
import Catalog from "./pages/dow_catalog/Catalog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayuot from "./app/AppLayuot";

const router = createBrowserRouter([
  {
    element: <AppLayuot />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/examples",
        element: <Inuse />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
