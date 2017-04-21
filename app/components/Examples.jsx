let React = require('react');
let { Link } = require('react-router');

const Examples = ( props ) =>{
    return (
      <div className="container">
          <div className="text-center">
              <h1>Examples</h1>
              <p>Welcome to the example locations to try out:</p>
          </div>
          <ol>
              <li>
                  <Link to='/?location=Annapolis'>Annapolis, MD</Link>
              </li>
              <li>
                  <Link to='/?location=Miami'>Miami, FL</Link>
              </li>
              <li>
                  <Link to='/?location=Boulder'>Boulder, CO</Link>
              </li>
          </ol>

      </div>
    )
};

module.exports = Examples;