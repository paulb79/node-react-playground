var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        Playground App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active">About</Link>
                    </li>
                    <li>
                        <Link to="/examples" activeClassName="active">Examples</Link>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active">Countdown</Link>
                    </li>
                    <li>
                        <Link to="/timer" activeClassName="active">Timer</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        <a href="https://redjamjar.net" target="_blank">Paul Brown</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

module.exports = Nav;