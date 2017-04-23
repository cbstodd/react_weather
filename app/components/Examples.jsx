let React = require('react');
let { Link } = require('react-router');

const Examples = ( props ) =>{
    return (
      <div className="container">
          <div className="text-center">
              <h1>Examples</h1>
              <p>Location examples to try:</p>

              <div className="list-group">
                  <Link className="list-group-item list-group-item-action" to='/?location=Annapolis, MD'>Annapolis, MD</Link>
                  <Link className="list-group-item list-group-item-action" to='/?location=Miami, FL'>Miami, FL</Link>
                  <Link className="list-group-item list-group-item-action" to='/?location=Boulder, CO'>Boulder, CO</Link>
                  <Link className="list-group-item list-group-item-action" to='/?location=London, UK'>London, UK</Link>
                  <Link className="list-group-item list-group-item-action" to='/?location=Paris'>Paris</Link>
              </div>
          </div>
      </div>
    )
};

module.exports = Examples;