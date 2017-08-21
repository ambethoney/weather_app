
export const GET_INPUT_VALUE = 'GET_INPUT_VALUE'
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS'
export const REQUEST_LOCATION = 'REQUEST_LOCATION'
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION'
export const SELECT_LOCATION =  'SELECT_LOCATION'

//RECEIVE SEARCHBAR DATA

export const getInput = input =>({
  type: GET_INPUT_VALUE,
  input
})

export const clearSuggestions = input => ({
  type:CLEAR_SUGGESTIONS
})



//FETCH LOCATION DATA

export const requestLocation = locations =>({
    type: REQUEST_LOCATION,
    locations
})

export const receiveLocation = (locations, json) => ({
    type: RECEIVE_LOCATION,
    locations,
    card: json.data.children.map( child => child.data )
})

export const selectLocation = locations => ({
    type: SELECT_LOCATION,
    locations
})

export const fetchLocation = locations => dispatch => {
  dispatch(requestLocation(locations))
  return fetch(`http://api.wunderground.com/api/${MY_KEY}/conditions/q/${locations}.json`)
  .then(response => response.json())
  .then(json=>dispatch(receiveLocation(locations, json)))
}
