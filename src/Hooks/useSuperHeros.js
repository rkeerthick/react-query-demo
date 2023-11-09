import axios from "axios";
import { useQuery } from "react-query";

const useSuperHeros = (onSuccess, onError) => {
  const fetchSuperHeros = () => {
    return axios.get("http://localhost:4001/superheros");
  };
  return useQuery("super-heros", fetchSuperHeros, {
    onSuccess,
      onError,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 30000
    // select: (data) => {
    //   const heroName = data.data.map((hero) => hero.name);
    //   return heroName;
    // },
  });
};

export default useSuperHeros;
