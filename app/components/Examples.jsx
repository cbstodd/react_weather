let React = require('react');
let { Link } = require('react-router');

const Examples = ( props ) =>{
    return (
      <div className="container">
          <div className="text-center">
              <h1>Examples</h1>
              <p>Welcome to the example locations to try out:</p>

              <div className="list-group">
                  <Link className="list-group-item list-group-item-action" to='/?location=Annapolis'>Annapolis, MD</Link>
                  <Link className="list-group-item list-group-item-action" to='/?location=Miami'>Miami, FL</Link>
                  <Link className="list-group-item list-group-item-action" to='/?location=Boulder'>Boulder, CO</Link>
              </div>
          </div>
      </div>
    )
};

module.exports = Examples;