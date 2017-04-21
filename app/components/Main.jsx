const React = require('react'),
      Nav   = require('Nav');

const Main = ( props ) =>{
    return (
      <div>
          <Nav/>
          <div className="container text-center"><h2>Main Component!</h2></div>
          <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">{props.children}</div>
              <div className="col-sm-3"></div>
          </div>
      </div>
    )
};

module.exports = Main;