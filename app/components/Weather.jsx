var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherApi = require('OpenWeatherApi');

var Weather = React.createClass({
    getInitialState: function (){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({isLoading: true});

        OpenWeatherApi.getTemp(location).then(function (temp) {
            that.setState({
                isLoading: false,
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            that.setState({
                isLoading: false
            })
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />
            }
        }
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;