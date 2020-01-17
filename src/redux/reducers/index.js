import {TOGGLE_TODO} from './../actions'

const initialState = {
    temp : {used:false},
    result:{hello:"Result"}
}


export default function globalState(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      console.log("reached reducer")
      return {...state,result:action.payload}
    default:
      return state
  }
}
