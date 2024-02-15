import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Rootlayout";
import Home from "./pages/Home/Home";
import Manga from "./pages/Manga";
import AnimeInfo from "./pages/AnimeInfo/AnimeInfo";
import Favoritos from "./pages/Favoritos";

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
        path: "favoritos",
        element: <Favoritos />,
      },
      {
        path: "manga",
        element: <Manga />,
      },
    ],
  },
]);

export default route;
