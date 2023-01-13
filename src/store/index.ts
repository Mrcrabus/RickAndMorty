import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import {useDispatch} from "react-redux";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
