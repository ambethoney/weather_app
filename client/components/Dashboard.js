import React from 'react';
import Card from './Card';
import Search from './Search'

const Dashboard = React.createClass({
  // <Card/>
  render() {
    return (
      <div className="dashboard">
        <div className="search-bar">
          <Search/>
        </div>
        <div className="weather-card-grid">
          {this.props.card.map((locations, i) => <Card {...this.props} key={i} id={i} location={i}/>)}
        </div>
      </div>
    );
  }

});

export default Dashboard;
