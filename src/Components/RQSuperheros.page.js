import { useQuery } from "react-query";
import axios from "axios";
// import { useState } from "react";

const RQSuperheros = () => {
  // const [interval, setInterval] = useState(5000);
  const onSuccess = (data) => {
    console.log("success ", data);
  };
  const onError = (data) => {
    console.log("error ", data);
  };

  const { data, isLoading, isError, error, isFetching } = useQuery(
    "super-heros",
    () => {
      return axios.get("http://localhost:4001/superheros");
    },
    {
      staleTime: 0,
      // refetchOnWindowFocus: false
      // refetchInterval: interval === 0 ? false : interval,
      onSuccess,
      onError,
      select: (data) => {
        const heroName = data.data.map((hero) => hero.name);
        return heroName;
      },
    }
  );

  let content = (
    <>
      <h2>RQSuperheros</h2>
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {data?.map((hero) => {
        return <div key={hero}>{hero}</div>;
      })}
    </>
  );
  // if (isError || (interval && data?.data.length === 4)) {
  //   content = isError && <h1>{error?.message}</h1>;
  //   setInterval(0);
  // }

  (isLoading || isFetching) && (content = "Loading..");

  isError && (content = <h1>{error?.message}</h1>);

  return <>{content}</>;
};

export default RQSuperheros;
