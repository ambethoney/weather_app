import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({

  render() {
    return (
      <main>
        <Link to= "/"><h1 className="title">What's the Weather?</h1></Link>
        {React.cloneElement(this.props.children, this.props)}
      </main>
    );
  }

});

export default Main;
