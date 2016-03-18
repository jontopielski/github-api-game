var React = require('react')
var PropTypes = React.PropTypes
var styles = require('../styles')
var classNames = require('classnames')

function Prompt (props) {
	var formClass = classNames({
		'form-group': true,
		'has-error': props.hasFailedAttempt
	})
	return (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
			<h1>{props.routeHeader}</h1>
			<div className="col-sm-12" style={styles.space}>
				<form onSubmit={props.onSubmitUser}>
					<div className={formClass}>
						<input
							className="form-control"
							placeholder="Github Username"
							onChange={props.onUpdateUser}
							value={props.username}
							type="text"/>
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button
							className="btn btn-block btn-success"
							type="submit">
								Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

Prompt.propTypes = {
	routeHeader: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	hasFailedAttempt: PropTypes.bool.isRequired
}

module.exports = Prompt;