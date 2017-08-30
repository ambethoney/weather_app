import React from 'react';
import { Link } from 'react-router';
import ReactAnimatedWeather from 'react-animated-weather';


const Card = React.createClass({

  render() {
    const{city, i} = {...this.props};
    return (
      <Link to={`/view/${city.city}`} id={this.props.id} className="card">
        <div className="card-header">
          <h3>{city.city}</h3>
          <h3>{city.currentTemp}&#176;F</h3>
        </div>
        <ReactAnimatedWeather color='black' icon={city.currentIcon.toUpperCase().replace(/[-]/g, '_')} className="card-icon"/>
      </Link>
    );
  }

});

export default Card;
