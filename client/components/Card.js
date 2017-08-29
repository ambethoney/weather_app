import React from 'react';
import { Link } from 'react-router';

const Card = React.createClass({
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
  //


  render() {
    const{city, i} = {...this.props};
    return (
      <Link to={`/view/${city.city}`} id={this.props.id}>
        <h5>{city.city}, {city.state}</h5>
        <img src={city.icon} alt={city.weather}/>
        <h3>{city.feelsLike}</h3>
      </Link>
    );
  }

});

export default Card;
