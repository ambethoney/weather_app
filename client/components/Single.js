import React from 'react';
import { Link } from 'react-router';
import ReactAnimatedWeather from 'react-animated-weather';

const bgColor={
  'RAIN': '#4A89DC',
  'SLEET':'#CCD1D9',
  'SNOW': '#E6E9ED',
  'FOG': '#CCD1D9',
  'CLEAR_DAY': '#43C189',
  'CLEAR_NIGHT':'#4A89DC',
  'PARTLY_CLOUDY_DAY': '#E6E9ED',
  'PARTLY_CLOUDY_NIGHT':'#656D78',
  'CLOUDY': '#CCD1D9',
  'WIND': '#3BAFDA'

}

const Single = React.createClass({


  renderTemp(forecast, i){
    let date = new Date(forecast.time*1000)
    return(
      <div className="daily-forecast" key={i}>
       <p>{date.toDateString()}</p>
       <ReactAnimatedWeather   color='black' icon={forecast.icon.toUpperCase().replace(/[-]/g, '_')} />
       <p className="tempHigh">{forecast.apparentTemperatureMax}&#176;F</p>
       <p className="tempLow">{forecast.apparentTemperatureMin}&#176;F</p>
     </div>
   )
  },

  renderBgColor(cityInfo){
    backgroundColor: bgColor.cityInfo.currentIcon.toUpperCase().replace(/[-]/g, '_')
    return backgroundColor
  },

  render() {
    const{city, i} = {...this.props};
    const cityInfo = this.props.card.filter(card => card.city === this.props.params.cityId)[0];
    return(
      <div>
        <div className="today">
          <h3>{cityInfo.currentSummary}</h3>
          <h3>{cityInfo.currentTemp}&#176;F</h3>
            <ReactAnimatedWeather color='black' icon={cityInfo.currentIcon.toUpperCase().replace(/[-]/g, '_')} />
        </div>
        <div className="daily-grid">
          {cityInfo.dailyForecast.map(this.renderTemp)}
        </div>
      </div>
    )
  }
});


export default Single;
