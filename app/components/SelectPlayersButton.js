var React = require('react')
var PropTypes = React.PropTypes
var { Link } = require('react-router')
var styles = require('../styles')

function SelectPlayersButton(props) {
	return (
		<div className='col-sm-12' style={styles.space}>
	    <Link to='/playerOne'>
	      <button type='button' className='btn btn-lg btn-danger'>{props.buttonText}</button>
	    </Link>
	  </div>
  )
}

SelectPlayersButton.propTypes = {
	buttonText: PropTypes.string.isRequired
}

module.exports = SelectPlayersButton;
