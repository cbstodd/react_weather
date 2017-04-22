const React  = require('react'),
      Nav    = require('Nav');

const Main = ( props ) =>{
    return (
      <div>
          <Nav/>
          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">{props.children}</div>
              <div className="col-md-2"></div>
          </div>
      </div>
    )
};

module.exports = Main;