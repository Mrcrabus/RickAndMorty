import {IUser} from "./user";

export interface IUserState {
  users: IUser[],
  error: null | string;
  loading: boolean;
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  SET_USERS = 'SET_USERS',
  SET_ERROR = 'SET_ERROR'
}

export interface IFetchUsersAction<T, P> {
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

