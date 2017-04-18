let React = require('react');

const WeatherMessage = ( { temp, location } ) =>{
    return (
      <div>
          <h3>It is {temp}<sup><small>F</small></sup> in {location}</h3>
      </div>
    );

};

module.exports = WeatherMessage;