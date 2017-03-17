var React = require('react');
var FormSearch = require('./FormSearch');
var SideBar = require('./SideBar');
var DisplayJobs = require('./DisplayJobs');

var MainContainer = React.createClass({

	getInitialState: function(){

		return {
			title : 'Title',
			location : 'Location',
			sort : 'Relevance',
			posted: 'Any Time',
			distance: 'Any Where'
		};
	},

	setTitle: function(newTitle){
		this.setState({
			title: newTitle
		});
	},

	setLocation: function(newLocation){
		this.setState({
			location: newLocation
		});
	},


	setSort: function(newSort){
		this.setState({
			sort: newSort
		});
	},

	setPosted: function(newPosted){
		this.setState({
			posted: newPosted
		});
	},

	setDistance: function(newDistance){
		this.setState({
			distance: newDistance
		});
	},

	handleClick: function(){

		alert("Title : " + this.state.title + " | Location : " + this.state.location + " | Sort : " + this.state.sort +" | Posted : " + this.state.posted + " | Distance : " + this.state.distance);
	},

	render: function(){
		return (
			
			<div className="container text-center" > 
				<FormSearch 
					onClick={this.handleClick} 
					title={this.state.title} 
					onChangeTitle={this.setTitle} 
					location={this.state.location}
					onChangeLocation={this.setLocation} />

				<SideBar 
					sort={this.state.sort} 
					onSortChange={this.setSort}
					posted={this.state.posted} 
					onPostedChange={this.setPosted}
					distance={this.state.distance}
					onDistanceChange={this.setDistance}
					/>
				<DisplayJobs />
			</div> 
		);
	}
});

module.exports = MainContainer;