
import { useNavigate } from "react-router-dom";
import useSuperHeros from "../Hooks/useSuperHeros";

const RQSuperheros = () => {
  const navigate = useNavigate();
  const onSuccess = (data) => {
    console.log("success ", data);
  };
  const onError = (data) => {
    console.log("error ", data);
  };
        debugger;

  const handleClick = (hero) => {
    console.log(hero.id, 'heroID')
    navigate(`/rq-super-hero/${hero.id}`)
  }

  const { data, isLoading, isError, error, isFetching } = useSuperHeros(onSuccess, onError)
  console.log(data)

  let content = (
    <>
      <h2>RQSuperheros</h2>

      {data?.data.map((hero) => {
        return <div style={{cursor: 'pointer'}} onClick={() => handleClick(hero)} key={hero.name}>{hero.name}</div>;
      })}
      
    </>
  );

  (isLoading || isFetching) && (content = "Loading..");

  isError && (content = <h1>{error?.message}</h1>);

  return <>{content}</>;
};


export default RQSuperheros;