import React, { useEffect, useState } from "react";
import axios from "axios";

const Superheros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4001/superheros")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading....</h1>;

  if (isError) return <h1>{isError}</h1>;

  return (
    <div>
      <h2>Super Hero Page</h2>
      {data.map((d) => {
        return <div key={d.name}>{d.name}</div>;
      })}
    </div>
  );
};

export default Superheros;
