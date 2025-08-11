import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/MainLayout/RootLayout";
import Home from "../Components/home/Home";
import ProjectList from "../Project/ProjectList";
import ProjectDetails from "../Project/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects",
        Component: ProjectList,
      },
      {
        path: "projects/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);
