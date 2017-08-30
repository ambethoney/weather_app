import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SELECT_CITY, CLEAR_SUGGESTIONS, FETCHING_CITY, ADD_CITY, DISPLAY_CITY, ERROR_FETCHING } from '../actions/actionCreators'

/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

*/



const cities = (state = [], action) => {
  switch(action.type){
    case ADD_CITY:
      return{
          [action.id]:addNewCity(state[action.city], action)
        }

    default:
      return state
  }
  return state;
}


const addNewCity = (state = [], action) =>{
  switch(action.type){
    case ADD_CITY:
      return[
        ...state,{
          city:action.cityName,
          currentIcon: action.payload.currently.icon,
          currentTemp: action.payload.currently.temperature,
          currentSummary: action.payload.currently.summary,
          dailySummary: action.payload.daily.summary,
          dailyIcon: action.payload.daily.icon,
          dailyForecast: action.payload.daily.data
        }
      ]
    default:
      return state
  }
  return state
}


const rootReducer = combineReducers({addNewCity, cities, routing: routerReducer})

export default rootReducer;
