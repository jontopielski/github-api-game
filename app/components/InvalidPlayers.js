var React = require('react')
var { Link } = require('react-router')
var styles = require('../styles/index')

var InvalidPlayers = React.createClass({
	render: function() {
		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3">
				<h2 className='text-center' style={styles.space}>Something went wrong.</h2>
				<h4 className='text-center lead' style={styles.space}>You most likely entered invalid players</h4>
				<h2 className='text-center' style={styles.space}>¯\_(ツ)_/¯</h2>
				<div className='col-sm-4 col-sm-offset-5' style={styles.space}>
					<Link to='/playerOne'>
						<button className='btn btn-danger' type='submit'>
							Go Back
						</button>
					</Link>
				</div>
			</div>
		)
	}
});

module.exports = InvalidPlayers;