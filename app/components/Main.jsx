const React = require('react'),
      Nav = require('Nav');

const Main = React.createClass({
    render: function (){
        return (
            <div>
                <Nav/>
                <h2>Main Component!</h2>
            </div>
        )
    }
});

module.exports = Main;