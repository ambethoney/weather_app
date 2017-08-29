import React from 'react';
import Card from './Card';
import Search from './Search'

const Dashboard = React.createClass({
  // {this.props.card > 0 ?
  //   this.props.card.map((city, i) => <Card {...this.props} key={i} id={i} city={city.city}/>) :
  //   <p>add a new card!</p>
  // }
  render() {
    return (
      <div className="dashboard">
        <div className="search-bar">
          <Search  {...this.props}/>
        </div>
        <div className="weather-card-grid">
          {this.props.card.map((city, i) => <Card {...this.props} key={i} id={i} city={city} />)}
        </div>
      </div>
    );
  }
});

export default Dashboard;
