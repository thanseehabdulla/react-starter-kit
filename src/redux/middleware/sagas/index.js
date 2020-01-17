import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {TOGGLE_TODO, ADD_TODO} from './../../actions'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action){
  console.log("reached worker")
  //  const result = yield api()
   let data=["test"]
   yield put({type: TOGGLE_TODO, payload :data});
}

function* mySaga() {
  console.log("Reached worker action")
  yield takeEvery(ADD_TODO, fetchUser);
}

export default mySaga;