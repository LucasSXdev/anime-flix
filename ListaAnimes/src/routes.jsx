import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Rootlayout";
import Home from "./pages/Home/Home";
import News from "./pages/News";
import Manga from "./pages/Manga";
import AnimeInfo from "./pages/AnimeInfo/AnimeInfo";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "animeinfo/:mal_id",
        element: <AnimeInfo />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "manga",
        element: <Manga />,
      },
    ],
  },
]);

export default route;
