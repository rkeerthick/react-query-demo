import React from "react";
import useFriends from "../Hooks/useFriends";

const RQParallelQuery = () => {
  const { data, isLoading, isFetching, isError, error } =
    useFriends();
  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <div>RQParallelQuery</div>
      {data?.data?.map((friend) => {
        return <div key={friend.id}>{friend.name}</div>;
      })}
    </>
  );
};

export default RQParallelQuery;
