import React from 'react';
import Search from './Search'
import { Link } from 'react-router';

const Main = React.createClass({

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <h1>hello!</h1>
        <Search/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }

});

export default Main;
