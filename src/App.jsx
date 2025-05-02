import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
//import ProductCardGrid from "./pages/product/ProductCardGrid";
import ProductPage from "./pages/product/ProductPage"

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage/> },
    { path: "/product", element: <ProductPage/> },
    
  ]);
  return <RouterProvider router={router} />;
}