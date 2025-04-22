import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage/> },
    
  ]);
  return <RouterProvider router={router} />;
}