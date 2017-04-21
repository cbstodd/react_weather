let React = require('react');

const About = ( props ) =>{
    return (
      <div className="container">
          <div className="text-center">
              <h1>About</h1>
              <h4>Welcome to the about page!</h4>
              <h5>This is a simple temperature searching ReactJS application.</h5>
              <h6>Here are some of the tools I used to build this:</h6>
              <p><a href="https://facebook.github.io/react">ReactJS</a>, <a href="https://v4-alpha.getbootstrap.com/">Bootstrap 4</a>, <a href="http://openweathermap.org/">Open Weather Map</a></p>
          </div>
      </div>
    )
};

module.exports = About;