const React = require('react'),
      Nav   = require('Nav');

const Main = ( props ) =>{
    return (
      <div>
          <Nav/>
          <div className="container"><h2>Main Component!</h2></div>
          {props.children}
      </div>
    )
};

module.exports = Main;