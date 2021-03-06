var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert("Todo ")
    },
    render: function () {
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
                    <form onSubmit={this.onSeach}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Enter a city name" /></li>
                            <li><button type="button" className="button">Get Weather</button> </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Nav;