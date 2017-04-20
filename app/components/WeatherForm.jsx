let React = require('react');

let WeatherForm = React.createClass({
    onFormSubmit: function( e ){
        // Prevents page from reloading
        e.preventDefault();

        // Sets the input to location
        let location = this.refs.location.value;

        // Validates data
        if (location.length > 0){
            // Clear input field
            this.refs.location.value = '';
            // Calls the location that was input
            this.props.onSearch(location);
        }

    },

    render: function(){
        return (
          <div className="container">
              <form onSubmit={this.onFormSubmit}>
                  <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Get weather</button>
                </span>
                      <input type="text" className="form-control" placeholder="Search city" ref="location"></input>
                  </div>
              </form>
          </div>
        )
    }

});


module.exports = WeatherForm;

