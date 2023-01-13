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

export interface IFetchUsersAction <T, P>{
  type: T;
  payload?: P;
}


// interface IFetchUsersSuccessAction {
//   type: UserActionTypes.FETCH_USERS_SUCCESS;
//   payload: any[];
// }
// interface IFetchUsersErrorAction {
//   type: UserActionTypes.FETCH_USERS_ERROR;
//   payload: string;
// }
// interface ISetUsersPage {
//   type: UserActionTypes.SET_USERS_PAGE;
//   payload: number;
// }


// export type UserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction | ISetUsersPage;

