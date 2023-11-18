import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4001/superheros");
};

const postSuperHero = (hero) => {
  return axios.post("http://localhost:4001/superheros", hero);
}
export const useSuperHeros = (onSuccess, onError) => {
  return useQuery("super-heros", fetchSuperHeros, {
    onSuccess,
    onError,
  });
};

export const useAddSuperHero = () => {
  return useMutation(postSuperHero);
}

