import { combineReducers } from "redux"

const initialState = []
const postsReducer = (state = initialState, action) => {
   switch (action.type) {
      case "GET_POSTS":
         return action.payload
      case "RESET_POSTS":
         return []
      default:
         return state
   }
}


const loginReducer = (state = false, action) => {
   switch (action.type) {
      case "LOGIN":
         return action.payload
      case "LOGOUT":
         return action.payload
      default:
         return state
   }
}

const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case "INCREMENT":
         return state + action.payload
      case "DECREMENT":
         return state - action.payload
      case "RESET_COUNTER":
         return 0
      default:
         return state
   }
}

const allReducers = combineReducers({
   counter: counterReducer,
   isLogged: loginReducer,
   posts: postsReducer
})

export default allReducers
