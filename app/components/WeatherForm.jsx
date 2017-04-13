let React = require('react');

let WeatherForm = React.createClass({
    onFormSubmit: function(e){
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
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button> Get Weather </button>
                </form>
            </div>
        )
    }

});

module.exports = WeatherForm;