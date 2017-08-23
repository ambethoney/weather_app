import fetch from 'isomorphic-fetch';

export const SELECT_LOCATION = 'SELECT_LOCATION'
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS'
export const FETCHING_LOCATION = 'FETCHING_LOCATION'
export const ADD_LOCATION =  'ADD_LOCATION'
export const ERROR_FETCHING = 'ERROR_FETCHING'



//RECEIVE SEARCHBAR DATA

export const getInput = (locationCity, locationState) =>({
  type: SELECT_LOCATION,
  locationCity,
  locationState
})

//FETCH LOCATION DATA

export const fetchingLocation =  (location) =>({
  type: FETCHING_LOCATION,
  location
})

export const receiveLocation = (location, json) => ({
    type: ADD_LOCATION,
    location,
    card: json.data
})

export const fetchLocation = (location, locationCity, locationState) => dispatch => {
  dispatch(fetchingLocation(location))
  return fetch(`http://api.wunderground.com/api/9591ee1195472466/conditions/q/${locationCity}/${locationState}.json`)
  .then(
    response => response.json,
    error => console.log(error)
  )
  .then(json=>dispatch(receiveLocation(location, json)))
}
