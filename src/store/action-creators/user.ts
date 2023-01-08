import {UserAction, UserActionTypes} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = (page = 1, limit = 20) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {page, _limit: limit}
      })
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data.results})

    } catch (e) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error'})
    }
  }
}

export const setUsersPage = (page: number): UserAction => {
  return {type: UserActionTypes.SET_USERS_PAGE, payload: page}
}