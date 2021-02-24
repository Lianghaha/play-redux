import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { applyMiddleware, createStore } from "redux"
import allReducers from "./allReducers"
import * as act from "./allActions"
import { Provider } from "react-redux"
import { useSelector, useDispatch } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const resetAtTwenty = (store) => (next) => (action) => {
   if (store.getState().counter >= 20) {
      return next({ type: "RESET_COUNTER" })
   }
   return next(action)
}

const store = createStore(
   allReducers,
   composeWithDevTools(applyMiddleware(thunk, resetAtTwenty))
)

const GrandChild = () => {
   const counter = useSelector((state) => state.counter)
   const isLogged = useSelector((state) => state.isLogged)
   const posts = useSelector((state) => state.posts)
   const dispatch = useDispatch()

   return (
      <div className="GrandChild">
         <h1>GrandChild: </h1>
         <h2>Counter: {counter}</h2>
         <button onClick={() => dispatch(act.decrement())}>Decrement</button>
         <button onClick={() => dispatch(act.increment())}>Increment</button>
         <button onClick={() => dispatch(act.resetCounter())}>Reset</button>

         <h2>isLogged: {isLogged.toString()}</h2>
         <button onClick={() => dispatch(act.login())}>Login</button>
         <button onClick={() => dispatch(act.logout())}>Logout</button>

         <h2>Posts: </h2>
         <button onClick={() => dispatch(act.getPosts())}>getPosts</button>
         <button onClick={() => dispatch(act.resetPosts())}>resetPosts</button>
         {posts.map((item) => {
            return <p key={item.id}>{item.title}</p>
         })}
      </div>
   )
}

const Child = () => {
   return (
      <div className="Child">
         <h1>Child:</h1>
         <GrandChild />
      </div>
   )
}

const APP = () => {
   const counter = useSelector((state) => state.counter)
   const isLogged = useSelector((state) => state.isLogged)

   return (
      <div className="App">
         <div className="Parent">
            <h1>Parent: </h1>
            <h2>Counter: {counter}</h2>
            <h2>isLogged: {isLogged.toString()}</h2>
            <Child />
         </div>
      </div>
   )
}

ReactDOM.render(
   <Provider store={store}>
      <APP />
   </Provider>,
   document.getElementById("root")
)
