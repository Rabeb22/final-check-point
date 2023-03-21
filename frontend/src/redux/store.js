import {applyMiddleware, compose, createStore} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"

// const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store=createStore(reducer,applyMiddleware(thunk))

export default store 