var React = require('react')

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var cityname = this.refs.cityname.value;

        if (cityname.length > 0) {
            this.refs.cityname.value = '';
            this.props.onSearch(cityname);
        }

    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="cityname"/>
                    <button>Get Temp</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;