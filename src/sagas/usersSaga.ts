import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {UserActionTypes} from "../types/users";
import {setError, setUsers} from "../store/action-creators/userActions";

interface FetchUsersAction {
  type: typeof UserActionTypes.FETCH_USERS,
  payload: {
    page: number,
    limit: number
  }
}

const fetchUsersAPI = async (page: number, limit: number) => await axios.get('https://rickandmortyapi.com/api/character', {
  params: {page, _limit: limit}
})

function* fetchUsersSaga({payload}: FetchUsersAction) {
  try {
    const {page, limit} = payload;
    const {data} = yield call(fetchUsersAPI, page, limit);
    yield put(setUsers(data));
  } catch (error: any) {
    yield put(setError(error.message));
  }
}

function* watchFetchUsers() {
  yield takeLatest(UserActionTypes.FETCH_USERS, fetchUsersSaga);
}

export default watchFetchUsers;