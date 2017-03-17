var React = require('react');
var Header = require('./Header');
var MainContainer = require('./MainContainer');
var Footer = require('./Footer');

var App = React.createClass({
	handleClick: function(){
		alert('ok');
	},
	render: function() {
        var names = ['Jake', 'Jon', 'Thruster'];
        return (
            <div>
            	<Header />
            	<MainContainer />
            	<Footer />
            </div>
        )
    }
});


module.exports = App;