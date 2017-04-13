let React          = require('react'),
    WeatherForm    = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');


let Weather = React.createClass({

    // Returns default values
    getInitialState: function(){
        return {
            isLoading: false
        }
    },

    // Gets passed into onSearch
    handelSearch: function( location ){
        let _this = this;

        this.setState({ isLoading: true });

        //Gets and Sets temp/location, or error
        openWeatherMap.getTemp(location).then(function( temp ){
            _this.setState({
                location:  location,
                temp:      temp,
                isLoading: false
            });
        }, function( errorMsg ){
            _this.setState({ isLoading: false });
            alert(`${location} is not a known city`);
            console.log(`ERROR: ${errorMsg}`);
        });

    },

    render: function(){

        let { isLoading, temp, location } = this.state;

        function renderMessage(){
            if (isLoading){
                return <h3>Fetching weather...</h3>;
            } else if (temp && location){
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
          <div>
              <WeatherForm onSearch={this.handelSearch}/>
              {renderMessage()}
          </div>
        )
    }
});

module.exports = Weather;