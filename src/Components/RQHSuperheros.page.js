import React, { useState } from "react";
import useSuperHeros from "../Hooks/useSuperHeros";

const RQHSuperheros = () => {
  const { data, isError, isFetching, error, isLoading } = useSuperHeros();
  const [isClicked, setIsClicked] = useState(false);

  let content = (
    <>
      <h2>RQHSuperheros</h2>
      {data?.data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
  (isLoading || isFetching) && (content = <p>Loading...</p>);
  isError && (content = <p>{error.message}</p>);

  return (
    <div>
      <button type="button" onClick={() => setIsClicked((prev) => !prev)}>
        View Superheros
      </button>
      {isClicked && <div>{content}</div>}
    </div>
  );
};

export default RQHSuperheros;
