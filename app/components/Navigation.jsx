var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div>
            <h2>Weather App</h2>
            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            <Link to="/about" activeClassName="active">About</Link>
            <Link to="/examples" activeClassName="active">Examples</Link>
        </div>
    )
}

module.exports = Nav;