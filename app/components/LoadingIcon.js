const React = require('react')
const PropTypes = React.PropTypes

var LoadingIcon = React.createClass({
	propTypes: {
		text: PropTypes.string,
		speed: PropTypes.number
	},
	getDefaultProps: function() {
		return {
			text: 'Loading',
			speed: 300
		}
	},
	getInitialState: function() {
		this.originalText = this.props.text;
		return {
			text: this.originalText
		}
	},
	componentDidMount: function() {
		var stopper = this.originalText + '...';
		this.interval = setInterval(function() {
			if (this.state.text === stopper) {
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}.bind(this), this.props.speed);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div className='container lead' style={{paddingTop: '50px'}}>
				<h1>{this.state.text}</h1>
			</div>
		)
	}
})

module.exports = LoadingIcon;