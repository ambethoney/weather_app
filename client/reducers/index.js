import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SELECT_LOCATION, CLEAR_SUGGESTIONS, FETCHING_LOCATION, RECEIVE_LOCATION, ERROR_FETCHING } from '../actions/actionCreators'

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

const isFetching = (state = []) => {
  return state
}

const fetchLocation = (state = [], action) =>{
    switch(action.type){
      case SELECT_LOCATION:
        return [
          ...state,{
            locationCity: action.city,
            locationState: action.state
          }
        ]
        case FETCHING_LOCATION:
          return [
            ...state, {
              isFetching: true
            }
          ]
        case RECEIVE_LOCATION:
          return[
            ...state, {
              isFetching: false,
              locations: [action]
            }
          ]
      default:
        return state
    }
}

const addNewLocation = (state = [], action) => {
  switch (action.type){
    case FETCHING_LOCATION:
    case RECEIVE_LOCATION:
      return [
        ...state,{
        locations: fetchLocation(state[action.locations], action)
        }
      ]
    default:
      return state
  }
}


const rootReducer = combineReducers({addNewLocation, locations, routing: routerReducer})

export default rootReducer;
