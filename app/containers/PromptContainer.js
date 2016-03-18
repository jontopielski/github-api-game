var React = require('react')
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			username: '',
			hasFailedAttempt: false
		}
	},
	handleUpdateUser: function(e) {
		this.setState({
			username: e.target.value,
			hasFailedAttempt: false
		});
	},
	handleSubmitUser: function(e) {
		e.preventDefault();
		var username = this.state.username;
		if (username == '') {
			this.setState({
				username: '',
				hasFailedAttempt: true
			});
			return;
		}
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	},
	render: function() {
		return (
			<Prompt
				hasFailedAttempt={this.state.hasFailedAttempt}
				routeHeader={this.props.route.header}
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
				username={this.state.username}
			/>
		)
	}
});

module.exports = PromptContainer;