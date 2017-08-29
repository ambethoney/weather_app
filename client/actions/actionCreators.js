import fetch from 'isomorphic-fetch';

export const SELECT_CITY = 'SELECT_CITY'
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS'
export const FETCHING_CITY = 'FETCHING_CITY'
export const ADD_CITY =  'ADD_CITY'
export const DISPLAY_CITY =  'DISPLAY_CITY'
export const ERROR_FETCHING = 'ERROR_FETCHING'



//RECEIVE SEARCHBAR DATA

export const getInput = (cityLat, cityLng) =>({
  type: SELECT_CITY,
  cityLat,
  cityLng
})

//FETCH LOCATION DATA

export const fetchingCity = () =>({
  type: FETCHING_CITY
})

export const addCity = (payload) => ({
    type: ADD_CITY,
    payload
})


export const fetchCity = (cityLat, cityLng) => {
  const URL = `http://api.wunderground.com/api/9591ee1195472466/conditions/q/${cityLat},${cityLng}.json`;
	return (dispatch) => {
  	dispatch(fetchingCity());
    return fetch(URL, { method: 'GET'})
      .then( response => Promise.all([response, response.json()]))
      .then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(addCity(json))
      }
      else{
      	console.log(err)
      }
    })
  }
}
