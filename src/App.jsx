//app.js
import { lazy, Suspense } from "react";
import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayuot = lazy(() => import("./layout/app/AppLayuot"));
const Main = lazy(() => import("./pages/main/Main"));
const Products = lazy(() => import("./pages/products/Products"));
const Inuse = lazy(() => import("./pages/inuse/Inuse"));
const Catalog = lazy(() => import("./pages/dow_catalog/Catalog"));
import Loader from "./components/ui/loader";
import ProductInfo from "./pages/product_details/ProductInfo";
import ErrorBoundary from "./utils/errorBoundary";

const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <AppLayuot />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary>
            <Main />,
          </ErrorBoundary>
        ),
      },
      {
        path: "/products",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/products/:productId",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <ProductInfo />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/examples",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Inuse />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/catalog",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Catalog />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
