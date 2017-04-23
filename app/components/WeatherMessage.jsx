let React = require('react');


const WeatherMessage = ( { temp, location } ) =>{

    function renderColor(){
        if (temp < 45){
            return <div className="card card-inverse card-info mb-3 text-center">
                <div className="card-block">
                    <div className="card-blockquote">
                        <h2><i>
                            <small>It is&nbsp;</small>
                        </i><b>{temp}<sup>
                            <small>F</small>
                        </sup></b> <i>
                            <small>in</small>
                        </i><b>&nbsp;{location}</b><i className="fa fa-thermometer-empty fa-2x"></i></h2>
                    </div>
                </div>
            </div>;
        } else if (temp > 45 && temp < 65){
            return <div className="card card-inverse card-warning mb-3 text-center">
                <div className="card-block">
                    <div className="card-blockquote">
                        <h2><i>
                            <small>It is&nbsp;</small>
                        </i><b>{temp}<sup>
                            <small>F</small>
                        </sup></b> <i>
                            <small>in</small>
                        </i><b>&nbsp;{location}</b><i className="fa fa-thermometer-half fa-2x"></i></h2>
                    </div>
                </div>
            </div>;
        } else {
            return <div className="card card-inverse card-danger mb-3 text-center">
                <div className="card-block">
                    <div className="card-blockquote">
                        <h2><i>
                            <small>It is&nbsp;</small>
                        </i><b>{temp}<sup>
                            <small>F</small>
                        </sup></b> <i>
                            <small>in</small>
                        </i><b>&nbsp;{location}</b><i className="fa fa-thermometer-full fa-2x"></i></h2>
                    </div>
                </div>
            </div>;
        }
    }

    return (
      <div className="container weather-message">
          {renderColor()}
      </div>
    );

};

module.exports = WeatherMessage;