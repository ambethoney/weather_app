import React from 'react';
import { Link } from 'react-router';

const Single = React.createClass({


  // city:action.payload.current_observation.display_location.city,
  // state: action.payload.current_observation.display_location.state_name,
  // stateAbbrev: action.payload.current_observation.display_location.state,
  // zip: action.payload.current_observation.display_location.zip,
  // country: action.payload.current_observation.display_location.country,
  // feelsLike: action.payload.current_observation.feelslike_f,
  // tempC: action.payload.current_observation.temp_c,
  // tempF: action.payload.current_observation.temp_f,
  // feelsLikeString: action.payload.current_observation.feelslike_string,
  // icon: action.payload.current_observation.icon_url,
  // weather: action.payload.current_observation.weather,
  // lastObservation: action.payload.current_observation.observation_time,
  // humidity: action.payload.current_observation.relative_humidity,
  // wind: action.payload.current_observation.wind_string,
  // windChill: action.payload.current_observation.windchill_f


  render() {
    const{city, i} = {...this.props};
    const cityInfo = this.props.card.filter(card => card.city === this.props.params.cityId)[0];
    console.log('our city info', cityInfo)
    return(
      <div>
        <h3>{cityInfo.city}, {cityInfo.state}</h3>
      </div>
    )
  }
});


export default Single;
