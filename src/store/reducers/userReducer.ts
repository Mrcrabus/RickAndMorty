import {IFetchUsersAction, IUserState, UserActionTypes} from "../../types/users";

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  limit: 20
}


export const userReducer = (state = initialState, action: IFetchUsersAction<UserActionTypes, any>): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS :
      return {...state, loading: true}
    case UserActionTypes.FETCH_USERS_SUCCESS :
      return {...state, loading: false, users: [...state.users, ...action.payload]}
    case UserActionTypes.FETCH_USERS_ERROR :
      return {...state, loading: false, error: action.payload, users: []}
    case UserActionTypes.SET_USERS_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}