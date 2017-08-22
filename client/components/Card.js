import React from 'react';
import { Link } from 'react-router';

const Card = React.createClass({

  render() {
    const {location, i } = this.props;
    return (
      <Link to={`/view/${location}`}>
        <figure className="card">
          {location}
        </figure>
      </Link>
    );
  }

});

export default Card;
