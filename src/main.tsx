import { QueryClientProvider } from "@tanstack/react-query";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import queryClient from "./client";
import "./index.css";
import Layout from "./Layouts/DashboardLayout";
import ButtonStory from "./Pages/ButtonStory";
import IconStory from "./Pages/IconsStory";
import ImagesStory from "./Pages/ImagesStory";
import InputStory from "./Pages/InputStory";
import TableStory from "./Pages/TableStory";
import TabsStory from "./Pages/TabsStory";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/buttons",
            element: <ButtonStory />,
          },
          {
            path: "/tabs",
            element: <TabsStory />,
          },
          {
            path: "/iconStory",
            element: <IconStory />,
          },
          {
            path: "/tableStory",
            element: <TableStory />,
          },
          {
            path: "/inputStory",
            element: <InputStory />,
          },
          {
            path: "/imagesStory",
            element: <ImagesStory />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
