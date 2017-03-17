var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
	render: function(){
		return (
			<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						 <div className="navbar-header">
 							 <img width="100" role="presentation" height="50" />
 							 <p>Search Jobs </p>
						 </div>
					</div>
			</nav> 
		);
	}

});

module.exports = Header;