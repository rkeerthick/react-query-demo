/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useQuery } from 'react-query'

const useParallelQueries = () => {
    const fetchFriends = () => {
        return axios.get("http://localhost:4001/friends")
    }
    const fetchSuperHero = () => {
        return axios.get("http://localhost:4001/superheros")
    }
    const {data: superhero} = useQuery('superheros', fetchSuperHero)
    const {data: friends} = useQuery('friends', fetchFriends)
  return (
    <div>Hiii</div>
  )
}

export default useParallelQueries