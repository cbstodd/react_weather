const React               = require('react'),
      { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
    onSearch: function( e ){
        e.preventDefault();
        console.log('Not yet wired');
    },


    render: function(){
        return (
          <div>
              <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">

                  <div className="container">
                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <span className="navbar-brand">ReactWeather</span>

                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                  <IndexLink className="nav-link" to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get weather</IndexLink>
                              </li>

                              <li className="nav-item">
                                  <Link className="nav-link" to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                              </li>

                              <li className="nav-item">
                                  <Link className="nav-link" to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                              </li>
                          </ul>
                          <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
                              <input className="form-control mr-sm-2" type="search" placeholder="Search city"/>
                              <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                          </form>
                      </div>
                  </div>
              </nav>
          </div>
        )
    }
});

module.exports = Nav;