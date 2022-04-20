import { applyMiddleware, combineReducers, createStore  } from "redux";
import thunk from "redux-thunk";
import { flatReducer } from "./reducer";


const reducer =combineReducers({
    flat :flatReducer
})

export const store =createStore(
    reducer,
    applyMiddleware(thunk)
)