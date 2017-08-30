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

export const addCity = (payload, cityName) => ({
    type: ADD_CITY,
    payload,
    cityName
})


export const fetchCity = (cityLat, cityLng, cityName) => {
  const URL = `https://api.darksky.net/forecast/08d6adb1c407092ec8396774780062ac/${cityLat},${cityLng}?${cityName}`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
	return (dispatch) => {
  	dispatch(fetchingCity());
    return fetch(proxyurl + URL)
      .then( response => Promise.all([response, response.json()]))
      .then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(addCity(json, cityName))
      }
      else{
      	console.log(err)
      }
    })
  }
}
