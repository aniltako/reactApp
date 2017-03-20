var React = require('react');
var FormSearch = require('./FormSearch');
var SideBar = require('./SideBar');
var DisplayJobs = require('./DisplayJobs');
var fetch = require('node-fetch');

var MainContainer = React.createClass({

	getInitialState: function(){

		return {
			title : 'Title',
			location : 'Location',
			sort : 'Relevance',
			posted: 'Any Time',
			distance: 'Any Where',
			data: [],
			checked: [true, true, true]

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

	handleClick: function(event){
		
		// alert("ok");
		fetch('http://localhost:8080/search/jobs?location=new york&title=java&site=INDEED',{
			method: 'GET',
			mode: 'cors',
			headers: new Headers({
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			})
		})
	    .then(res => res.json())
	    .then(json => this.setState({data:json}));

	     // .then(json => console.log(json))
 	},

 	handleSiteChange: function(changedSite){
 		
 		this.setState({
 			checked: changedSite
 		});
 	},

	render: function(){
		return (
			
			<div className="container text-center" > 
				<FormSearch 
					onClick={this.handleClick} //for button click
					title={this.state.title} 
					onChangeTitle={this.setTitle} 
					location={this.state.location}
					onChangeLocation={this.setLocation} />

				<SideBar 
					checked={this.state.checked} // for checked sites
					onChangeSite={this.handleSiteChange} //for hande site change
					sort={this.state.sort} 
					onSortChange={this.setSort}
					posted={this.state.posted} 
					onPostedChange={this.setPosted}
					distance={this.state.distance}
					onDistanceChange={this.setDistance}
					/>
				<DisplayJobs jobs={this.state.data}/>
			</div> 
		);
	}
});

module.exports = MainContainer;