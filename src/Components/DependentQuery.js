import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const DependentQuery = ({ email }) => {
  const fetchUser = (email) => {
    return axios.get(`http://localhost:4001/users/${email}`);
  };
  const {data: user} = useQuery(["user", email], () => fetchUser(email))

  const currentId = user?.data.channelId

  const fetchChannel = (currentId) => {
    return axios.get(`http://localhost:4001/channels/${currentId}`)
  }
  useQuery(['channel', currentId], () => fetchChannel(currentId), {enabled: !!currentId})
  return <div>DependentQuery</div>;
};

export default DependentQuery;
