import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { REQUEST_LOCATION, RECEIVE_LOCATION, SELECT_LOCATION } from '../actions/actionCreators'

/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

*/
import location from '../sample.js';


const locations = (state = [], action) => {
  return state
}

const addNewLocation = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type){
    case SELECT_LOCATION:
      return action.location
    case REQUEST_LOCATION:
      return{
        ...state,
        isFetching: true
      }
    case RECEIVE_LOCATION:
      return{
        ...state,
        isFetching: false,
        items: action.location
      }
    default:
      return state
  }
}




const rootReducer = combineReducers({addNewLocation, locations, routing: routerReducer})

export default rootReducer;
