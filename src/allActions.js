import Axios from "axios"

const getPosts = () => {
   return async (dispatch, getState) => {
      const response = await Axios.get(
         "https://jsonplaceholder.typicode.com/posts"
      )
      dispatch({ type: "GET_POSTS", payload: response.data })
   }
}

const resetPosts = () => {
   return {
      type: "RESET_POSTS",
   }
}

const increment = () => {
   return {
      type: "INCREMENT",
      payload: 2,
   }
}

const decrement = () => {
   return {
      type: "DECREMENT",
      payload: 2,
   }
}

const resetCounter = () => {
   return {
      type: "RESET_COUNTER",
   }
}

const login = () => {
   return {
      type: "LOGIN",
      payload: true,
   }
}

const logout = () => {
   return {
      type: "LOGOUT",
      payload: false,
   }
}

export { increment, decrement, login, logout, resetCounter, getPosts, resetPosts }
