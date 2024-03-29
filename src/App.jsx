//app.js
import { lazy, Suspense } from "react";
import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayuot = lazy(() => import("./layout/app/AppLayuot"));
const Main = lazy(() => import("./pages/main/Main"));
const Products = lazy(() => import("./pages/products/Products"));
const Inuse = lazy(() => import("./pages/inuse/Inuse"));
const Catalog = lazy(() => import("./pages/dow_catalog/Catalog"));
// const ProductInfo = lazy(() => import("./pages/product_details/ProductInfo"));
import Loader from "./utils/loader";
import ProductFetcher from "./components/products_fetcher/ProductsFetcher";
import ProductInfo from "./pages/product_details/Productinfo";

// const ProductFetcher = lazy(() => import("./components/products_fetcher/ProductsFetcher"));
const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayuot />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: <ProductFetcher />,
          },
          {
            path: ":productId",
            element: <ProductInfo />,
          },
        ],
      },
      {
        path: "/examples",
        element: (
          <Suspense fallback={<Loader />}>
            <Inuse />
          </Suspense>
        ),
      },
      {
        path: "/catalog",
        element: (
          <Suspense fallback={<Loader />}>
            <Catalog />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
