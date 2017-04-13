let React = require('react');

let WeatherMessage = React.createClass({       
    render: function(){
        let { temp, location } = this.props;

        return (
          <div>
            <h3>It is {temp}<sup><small>F</small></sup> in {location}</h3>              
          </div>
        );
    }
});


module.exports = WeatherMessage;