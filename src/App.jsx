//app.js
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
  return <RouterProvider router={router} />;
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import  AppLayout  from "./app/AppLayuot"
// import Main from "./pages/main/Main";
// import Products from "./pages/products/Products";
// import Inuse from "./pages/inuse/Inuse";
// import Catalog from "./pages/dow_catalog/Catalog";

// function App() {
//   return (
//     <Router>
//       <AppLayout>
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/mahsulotlar" element={<Products />} />
//           <Route path="/namunalar" element={<Inuse />} />
//           <Route path="/katalog" element={<Catalog />} />
//         </Routes>
//       </AppLayout>
//     </Router>
//   );
// }

// export default App;
