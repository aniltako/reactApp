var React = require('react');

var DisplayJobs = React.createClass({

	getInitialState: function(){
		return {
			jobList: []
		}
	},

	componentWillReceiveProps: function(nextProps){
		console.log(nextProps);
		if ( nextProps.jobs.size > 0 ){
			this.setState({
				jobList: nextProps.jobs
			});
		}
	},

	shouldComponentUpdate: function(nextProps, nextState){
		if ( this.state.jobList.size > 1 ){
			console.log("Update Component")
			return true;
		}else{
			console.log("Don't Update Component")
			return false;
		}
	},

	render: function(){

		var jobDetail: [];

		this.state.jobList.map(function(job, i){
			jobDetail.push(

				<div key={i} className="row">
					<div className="col-sm-9">
			               
		                <a href= {job.jobLink} target='_blank'><h2> {job.title} </h2></a>
		                <h3> {job.companyName} </h3> 
		                <p>
			               <span className="css-1r756hp">
			               		<img width="12" height="12" src="https://d30y4n1t170mxu.cloudfront.net/assets/img/job-listing/employer-location-ico.svg" />
			               	</span>
			               <span>{job.location}</span>
		                </p>
		                <p><b> Posted Date: </b> {job.date} </p> 

		            </div>

		            <div className="col-sm-3">
		                <img src="" className="img-circle" height="100" width="100" alt="Avatar" />   
		            </div>	
		        </div>
			);
      	});

		return (
			
			<div className="col-sm-9">
			    <div className="row">

				    <div className="col-sm-12">

				        <div className="well">
				        	{jobDetail}
				            
				        </div>
				    </div>
				</div> 
			</div>
		);
	}
});

module.exports = DisplayJobs;