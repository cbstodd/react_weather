let React          = require('react'),    
    WeatherForm    = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage');
    

let Weather = React.createClass({
    
    // Returns default values
    getInitialState: function(){
        return {
            location: 'Miami',
            temp: 91
        }
    },

    // Gets passed into onSearch
    handelSearch: function(location){
        // this.setState({
        //     location: location,
        //     temp: 73
        // });
        
    },

    render: function(){
        let { temp, location } = this.state; 
        return (
          <div>                 
              <WeatherForm onSearch={this.handelSearch}/>
              <WeatherMessage temp={temp} location={location}/>
          </div>
        )
    }
});

module.exports = Weather;