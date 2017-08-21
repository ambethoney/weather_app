import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = React.createClass({

  onSuggestSelect(suggest){
    const location = suggest;
    this.props.selectLocation(location);
  },

  render() {
    return (
      <div className="search-bar">
        <Geosuggest
          placeholder="Check New Location"
          onSuggestSelect={this.onSuggestSelect}
        />
      </div>
    );
  }

});

export default Search;
