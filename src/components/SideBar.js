import React, { Component } from 'react';

var SideBar = React.createClass({

	handleChangeSort: function(e){
		var sort = e.target.value;
		this.props.onSortChange(sort);
	},

	handleChangePosted: function(e){

		var posted = e.target.value;
		this.props.onPostedChange(posted);
	},

	handleChangeDistance: function(e){

		var distance = e.target.value;
		this.props.onDistanceChange(distance);
	},

	render: function(){

		return (

			<div className="col-sm-3">

				<div className="well">

					<p>
						<b>Partner Sites</b>
					</p>

					<div className="checkbox">
					    <label>
					        <input type="checkbox" /> Indeed
					    </label>
					    <label>
					        <input type="checkbox" /> ZipRecruiter
					    </label>
					    <label>
					        <input type="checkbox" /> Jobs2Careers
					    </label>
					</div>

				</div>

			    <div className="well">

			        <p><b>Sort By</b></p>
			        <select className="selectpicker" onChange={this.handleChangeSort}>
			          <option>Relevance</option>
			          <option>Date</option>
			        </select>

			    </div>

			    <div className="well">
			        <p><b>Posted</b></p>
		            <select className="selectpicker" onChange={this.handleChangePosted}>
		                 <option> AnyTime </option>
		                 <option> Within 1 Day </option>
		                 <option> Within 3 Day </option>
		                 <option> Within 7 Day </option>
		                 <option> Within 15 Day </option>
		            </select>
			    </div>

			    <div className="well">
			        <p><b>Distance</b></p>
		                <select className="selectpicker" onChange={this.handleChangeDistance}>
		                     <option> Anywhere </option>
		                     <option> Within 5 Miles </option>
		                     <option> Within 10 Miles </option>
		                     <option> Within 15 Miles </option>
		                     <option> Within 25 Miles </option>
		                     <option> Within 50 Miles </option>
		                     <option> Within 100 Miles </option>
		                </select>
			    </div>
			</div>	
		);
	}

});

module.exports = SideBar;
