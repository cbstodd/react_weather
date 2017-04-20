let React = require('react');

const WeatherMessage = ( { temp, location } ) =>{
    return (
      <div className="container">
          <div className="jumbotron">
              <h3>It is {temp}<sup><small>F</small></sup> in {location}</h3>
          </div>
      </div>
    );

};

module.exports = WeatherMessage;