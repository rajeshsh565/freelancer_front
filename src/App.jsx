import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";
import HomeLayout from "./pages/HomeLayout";
import { loader as projectsLoader } from "./pages/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "browse",
        element: <Browse></Browse>,
        loader: projectsLoader
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
