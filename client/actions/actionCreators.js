import fetch from 'isomorphic-fetch';

export const SELECT_LOCATION = 'SELECT_LOCATION'
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS'
export const FETCHING_LOCATION = 'FETCHING_LOCATION'
export const RECEIVE_LOCATION =  'DISPLAY_LOCATION'
export const ERROR_FETCHING = 'ERROR_FETCHING'



//RECEIVE SEARCHBAR DATA

export const getInput = (locationCity, locationState) =>({
  type: SELECT_LOCATION,
  locationCity,
  locationState
})

// export const clearSuggestions = input => ({
//   type:CLEAR_SUGGESTIONS
// })



//FETCH LOCATION DATA

export const fetchingLocation =  (locationCity, locationState) =>({
  type: FETCHING_LOCATION,
  location
})

export const receiveLocation = (locations, json) => ({
    type: RECEIVE_LOCATION,
    locations,
    card: json
})

export const fetchLocation = (locationCity, locationState, location) => dispatch => {
  dispatch(fetchingLocation(locationCity, locationState))
  return fetch(`http://api.wunderground.com/api/9591ee1195472466/conditions/q/${locationCity}/${locationState}.json`)
  .then(
    response => console.log(response),
    error => console.log(error)
  )
  .then(json=>dispatch(receiveLocation(location, json)))
}
