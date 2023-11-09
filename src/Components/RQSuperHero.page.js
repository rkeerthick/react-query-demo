import React from "react";
import { useParams } from "react-router";
import useSuperHeroId from "../Hooks/useSuperHeroId";

const RQSuperHero = ({ hero }) => {
  const { heroID } = useParams();
  const { data, isLoading, isFetching, error, isError } =
    useSuperHeroId(heroID);

  if (isLoading || isFetching) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <p>{data?.data?.name}</p>
      <p>{data?.data?.alterEgo}</p>
    </>
  );
};

export default RQSuperHero;
