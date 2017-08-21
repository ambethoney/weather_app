import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = React.createClass({

  render() {
    const {post, i } = this.props;
    return (
      <div className="search-bar">
        <Geosuggest />
      </div>
    );
  }

});

export default Search;
