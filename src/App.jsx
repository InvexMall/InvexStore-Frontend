import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
//import ProductCardGrid from "./pages/product/ProductCardGrid";
import ProductPage from "./pages/product/ProductPage"
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage/> },
    { path: "/product", element: <ProductPage/> },
    { path: "/signup",element:<SignUpPage/>},
    { path: "/signin",element:<SignInPage/>},
    
  ]);
  return <RouterProvider router={router} />;
}