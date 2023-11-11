import { useQuery } from "@tanstack/react-query"
import { useMutation } from "react-query"

/**
 * Fetch user by id 
 * @returns {Promise<User>}
 */
const fetchUser = async (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
            if (res.status === 404)
                throw new Error("User not found")

            return res
        })
        .then((res) => res.json())
}

export const useUser = (userId) => {
    return useQuery({
        queryKey: ["user", "get", userId],
        queryFn: () => fetchUser(userId),
    })
}


const fetchPosts = async () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
}

export const usePosts = () => {
    return useQuery({
        queryKey: ["post", "list"],
        queryFn: fetchPosts,
    })
}


