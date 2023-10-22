import { useEffect, useState } from "react";
import route from "./routes";
import api from "./services/Api";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api}?page=${currentPage}`);
      const dataJason = await response.json();
      setAnimes(dataJason.data);
      console.log(dataJason);
    };

    fetchData();
  }, [setAnimes, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage += 1));
  };

  return (
    <main>
      <RouterProvider router={route} />
    </main>
  );
}
