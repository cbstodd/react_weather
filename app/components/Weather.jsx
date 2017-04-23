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
            errorMsg:  undefined,
            location:  undefined,
            temp:      undefined
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

    // Pulls search location from form.
    componentDidMount: function(){
        let location = this.props.location.query.location;

        if (location && location.length > 0){
            this.handelSearch(location);
            window.location.hash = '#/';
        }
    },

    // Pulls new location from search and assigns it to location.
    componentWillReceiveProps: function( newProps ){
        let location = newProps.location.query.location;

        if (location && location.length > 0){
            this.handelSearch(location);
            window.location.hash = '#/';
        }
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
                  alert('That was not a valid city, please try again.')
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