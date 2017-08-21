import React from 'react';
import { Link } from 'react-router';
import Card from './Card';

const WeatherCards = React.createClass({

  render() {
    // Then we go ahead and return some JSX

    // {this.props.post.map((post, i) => <Card {...this.props} key={i} id={i} post={post}/>)}
    return (
      <div className="weather-card-grid">
        <Card/>
      </div>
    );
  }

});

export default WeatherCards;
