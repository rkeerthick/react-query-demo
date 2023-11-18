import React, { useState } from "react";
import {useSuperHeros, useAddSuperHero} from "../Hooks/useSuperHeros";

const RQHSuperheros = () => {
  const { data, isError, isFetching, refetch, error, isLoading } = useSuperHeros();
  const [isClicked, setIsClicked] = useState(false);
  
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { mutate } = useAddSuperHero();

  
  const handleName = (name) => {
    setName(name);
  };
  const handleAlterEgo = (alterEgo) => {
    setAlterEgo(alterEgo);
  };

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    const hero = {name, alterEgo};
    mutate(hero);
  };

  const handleFetchUser = () => {
    setIsClicked(prev => !prev);
    refetch();
  }

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
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => handleName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => handleAlterEgo(e.target.value)}
        />
        <button type="button" onClick={handleAddHero}>
          Add Hero
        </button>
      </div>
      <button type="button" onClick={handleFetchUser}>
        View Superheros
      </button>
      {isClicked && <div>{content}</div>}
    </div>
  );
};

export default RQHSuperheros;
