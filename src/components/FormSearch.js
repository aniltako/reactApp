var React = require('react');

var FormSearch = React.createClass({

	handleSubmit: function(){

		this.props.onClick();
	},

	handleChangeTitle: function(e){

		var title = e.target.value;
		this.props.onChangeTitle(title);
	},

	handleChangeLocation: function(e){

		var location = e.target.value;
		this.props.onChangeLocation(location);
	},

	render: function(){
		return (
			
			<div className="row">
		        <div className="col-sm-12">
			        <div className="panel panel-default text-left">
			            <div className="panel-body">

				             <form className="form-inline">

				                <div className="form-group col-sm-5">
					                  <label className="sr-only" htmlFor="exampleInputEmail3">Job Title </label>
					                  <input value={this.props.title} onChange={this.handleChangeTitle} type="jobTitle" className="form-control" id="exampleInputEmail3" placeholder="JobTitle" />
				                </div>

				                <div className="form-group col-sm-5">
					                  <label className="sr-only" htmlFor="exampleInputPassword3">Location </label>
					                  <input value={this.props.location} onChange={this.handleChangeLocation} type="location" className="form-control" id="exampleInputPassword3" placeholder="Location" />
					            </div>

				                <div className="form-group col-sm-2">
				                    <button onClick={this.handleSubmit} type="submit" id="search_selected" className="btn btn-primary btn-findJobs">Search</button> 
				                </div> 
				                             
				              </form>    
			            </div>
			        </div>
		        </div>
  			</div>
		);
	}
});

module.exports = FormSearch;