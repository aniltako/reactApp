var React = require('react');
// import { Button } from 'reactstrap';

var Button = React.createClass({

	render: function(){
		return (
			
			<button className="btn btn-success" onClick={this.props.onClick}>CLO</button>
		);
	}
});

module.exports = Button;