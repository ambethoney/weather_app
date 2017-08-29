import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = React.createClass({

  onSuggestSelect(suggest){
    const city = suggest;
    const cityLat= city.location.lat;
    const cityLng= city.location.lng;
    
    this.props.getInput(cityLat, cityLng);
    this.props.fetchCity(cityLat, cityLng, city);
    this._geoSuggest.clear();
  },

  render() {
    const {city, i } = this.props;
    return (
      <div className="search-bar">
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Check New Location"
          onSuggestSelect={this.onSuggestSelect}
        />
      </div>
    );
  }

});

export default Search;
