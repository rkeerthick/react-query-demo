import axios from "axios";
import { useQuery } from "react-query";

const fetchFriends = () => {
  return axios.get("http://localhost:4001/friends");
};
const useFriends = () => {
  return useQuery("friends", fetchFriends);
};

export default useFriends;
