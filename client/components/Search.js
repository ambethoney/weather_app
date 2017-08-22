import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = React.createClass({

  onSuggestSelect(suggest){
    const location = suggest;
    const locationCity= suggest.label.split(", ")[0];
    const locationState= suggest.label.split(", ")[1];

    //console.log(location + " " + locationCity + " " +locationState)
    this.props.getInput(locationCity, locationState);
    this.props.fetchLocation(locationState, locationCity, location);
  },

  render() {
    const {location, i } = this.props;
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
