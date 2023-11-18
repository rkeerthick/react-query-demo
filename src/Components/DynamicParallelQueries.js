import axios from "axios";
import { useQueries } from "react-query";

const DynamicParallelQueries = ({ ids }) => {
  const fetchSuperHero = (id) => {
    return axios.get(`http://localhost:4001/superheros/${id}`);
  };
  const filteredIds = useQueries(
    ids?.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log({filteredIds});
  return <div>Dynamic Parallel Queries</div>;
};

export default DynamicParallelQueries;
