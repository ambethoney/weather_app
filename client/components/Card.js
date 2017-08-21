import React from 'react';
import { Link } from 'react-router';

const Card = React.createClass({

  render() {
    const {post, i } = this.props;
    return (
      <Link to={`/view/${post}`}>
        <figure className="card">
          <p>hello</p>
        </figure>
      </Link>
    );
  }

});

export default Card;
