import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
//import ProductCardGrid from "./pages/product/ProductCardGrid";
import ProductPage from "./pages/product/ProductPage"
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ProductDetail from "./components/product/product detail/ProductDetail"
import ProductDetailPage from "./pages/product/ProductDetailPage"


export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage/> },
    { path: "/product", element: <ProductPage/> },
    { path: "/signup",element:<SignUpPage/>},
    { path: "/signin",element:<SignInPage/>},
    { path: "/ProductDetail",element:<ProductDetail/>},
    { path: "/ProductDetailPage",element:<ProductDetailPage/>},
    
  ]);
  return <RouterProvider router={router} />;
}