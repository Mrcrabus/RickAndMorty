import {IUser} from "../../types/user";
import {UserActionTypes} from "../../types/users";



export const fetchUsers = (page: number, limit: number) => ({
  type: UserActionTypes.FETCH_USERS,
  payload: { page, limit }
});

export const setUsers = (users: IUser) => ({
  type: UserActionTypes.SET_USERS,
  payload: users
});

export const setError = (error: string) => ({
  type: UserActionTypes.SET_ERROR,
  payload: error
});