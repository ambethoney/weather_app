import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SELECT_LOCATION, CLEAR_SUGGESTIONS, FETCHING_LOCATION, ADD_LOCATION, ERROR_FETCHING } from '../actions/actionCreators'

/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

*/
import location from '../sample.js';

function locations(
  state = {
    isFetching: false,
    location:[]
  }, action){
  switch(action.type){
    case SELECT_LOCATION:
      return [
        ...state
      ]
      case ADD_LOCATION:
        return[
          ...state, {
            isFetching: false,
            locationId: action.id,
            locationCity: action.city,
            locationState: action.state
          }
        ]
    default:
      return state
  }
}

const addNewLocation = (state = [], action) =>{
  switch(action.type){
    case FETCHING_LOCATION:
    case ADD_LOCATION:
      return{
        ...state,
        [action.locationId]:locations(state[action.locationId], action)
      }
  }
  return state
}

const rootReducer = combineReducers({addNewLocation, locations, routing: routerReducer})

export default rootReducer;
