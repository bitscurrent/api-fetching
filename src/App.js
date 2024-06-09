import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData.results[0]);
    } catch (error) {
      setError(error);
      console.log("Error Fetching Data", error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]); // If the data changes, it will trigger a re-fetch

  return (
    <>
      {error ? (
        <p>Error fetching data: {error.message}</p>
      ) : data ? (
        <Card data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default App;
