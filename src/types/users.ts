import {IUser} from "./user";

export interface IUserState {
  users: IUser[],
  loading: boolean,
  error: null | string;
  page: number;
  limit: number;
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  SET_USERS_PAGE = "SET_USERS_PAGE"
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface IFetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface ISetUsersPage {
  type: UserActionTypes.SET_USERS_PAGE;
  payload: number;
}

interface IUserAction {
  type: string;
  payload?: any;
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction | ISetUsersPage;

