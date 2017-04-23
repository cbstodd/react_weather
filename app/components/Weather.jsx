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

        this.setState({
            isLoading: true,
            errorMsg:  undefined
        });


        //Gets and Sets temp/location, or error
        openWeatherMap.getTemp(location).then(function( temp ){
            _this.setState({
                location:  location,
                temp:      temp,
                isLoading: false
            });
        }, function( e ){
            _this.setState({
                isLoading: false,
                errorMsg:  e.message
            });
        });

    },

    render: function(){
        let { isLoading, temp, location, errorMsg } = this.state;

        function renderMessage(){
            if (isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location){
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError(){
            if (typeof errorMsg === 'string'){
                return (
                  alert("That was not a valid city, please try again.")
                )
            }
        }

        return (
          <div>
              <WeatherForm onSearch={this.handelSearch}/>
              {renderMessage()}
              {renderError()}
          </div>
        )
    }
});

module.exports = Weather;