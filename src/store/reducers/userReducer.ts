import {IFetchUsersAction, IUserState, UserActionTypes} from "../../types/users";

const initialState: IUserState = {
  users: [],
  error: '',
  loading: false
}


export const userReducer = (state = initialState, action: IFetchUsersAction<UserActionTypes, any>): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS :
      return {
        ...state,
        loading: true
      }
    case UserActionTypes.SET_USERS:
      console.log(action.payload)
      return {...state, loading: false, users: [...state.users, ...action.payload.results]}
    case UserActionTypes.SET_ERROR :
      return {...state, error: action.payload, users: []}
    default:
      return state
  }
}