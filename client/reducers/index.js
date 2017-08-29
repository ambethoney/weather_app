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
          id: action.index,
          city:action.payload.current_observation.display_location.city,
          state: action.payload.current_observation.display_location.state_name,
          stateAbbrev: action.payload.current_observation.display_location.state,
          zip: action.payload.current_observation.display_location.zip,
          country: action.payload.current_observation.display_location.country,
          feelsLike: action.payload.current_observation.feelslike_f,
          tempC: action.payload.current_observation.temp_c,
          tempF: action.payload.current_observation.temp_f,
          feelsLikeString: action.payload.current_observation.feelslike_string,
          icon: action.payload.current_observation.icon_url,
          weather: action.payload.current_observation.weather,
          lastObservation: action.payload.current_observation.observation_time,
          humidity: action.payload.current_observation.relative_humidity,
          wind: action.payload.current_observation.wind_string,
          windChill: action.payload.current_observation.windchill_f
        }
      ]
    default:
      return state
  }
  return state
}


const rootReducer = combineReducers({addNewCity, cities, routing: routerReducer})

export default rootReducer;
