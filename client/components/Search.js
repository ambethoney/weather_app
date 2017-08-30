import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = React.createClass({

  onSuggestSelect(suggest){
    const city = suggest;
    const cityLat= city.location.lat;
    const cityLng= city.location.lng;
    const cityName = city.gmaps.address_components[0].long_name

    this.props.getInput(cityLat, cityLng);
    this.props.fetchCity(cityLat, cityLng, cityName);
    this._geoSuggest.clear();
  },

  render() {
    const {city, i } = this.props;
    return (
      <div className="search-bar">
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Enter a location"
          onSuggestSelect={this.onSuggestSelect}
        />
      </div>
    );
  }
});

export default Search;
