let React = require('react');

const WeatherMessage = ( { temp, location } ) =>{


    function renderColor(){
        if (temp < 45){
            return <div className="text-center alert alert-info" role="alert"><h2><i><small>It is&nbsp;</small></i><b>{temp}<sup><small>F</small></sup></b> <i><small>in</small></i><b>&nbsp;{location}</b></h2></div>;
        } else if (temp > 45 && temp < 65){
            return <div className="text-center alert alert-warning" role="alert"><h2><i><small>It is&nbsp;</small></i><b>{temp}<sup><small>F</small></sup></b> <i><small>in</small></i><b>&nbsp;{location}</b></h2></div>;
        } else {
            return <div className="text-center alert alert-danger" role="alert"><h2><i><small>It is&nbsp;</small></i><b>{temp}<sup><small>F</small></sup></b> <i><small>in</small></i><b>&nbsp;{location}</b></h2></div>;
        }
    }

    return (
      <div className="container weather-message">
          {renderColor()}
      </div>
    );

};

module.exports = WeatherMessage;