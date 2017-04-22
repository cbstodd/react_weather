let React = require('react');

const WeatherMessage = ( { temp, location } ) =>{
    return (
      <div className="container">
          <div className="jumbotron text-center">
              <h1><i><small>It is</small></i> <b>{temp}<sup><small>F</small></sup></b> <i><small>in</small></i> <b>{location}</b></h1>
          </div>
      </div>
    );

};

module.exports = WeatherMessage;