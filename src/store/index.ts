import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import {useDispatch} from "react-redux";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
