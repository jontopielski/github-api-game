var React = require('react')
var LoadingIcon = require('./LoadingIcon')
var styles = require('../styles')
var PropTypes = React.PropTypes
var {Link} = require('react-router')
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var SelectPlayersButton = require('./SelectPlayersButton')
var MainContainer = require('./MainContainer')

function puke(object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
	return props.isLoading === true ?
		<LoadingIcon /> :
		(
			<MainContainer>
        <h1>{props.headerName}</h1>
        <div className='col-sm-8 col-sm-offset-2'>
        	<UserDetailsWrapper header={props.playerOne}>
        		<UserDetails info={props.playersInfo[0]} />
        	</UserDetailsWrapper>
        	<UserDetailsWrapper header={props.playerTwo}>
        		<UserDetails info={props.playersInfo[1]} />
        	</UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <SelectPlayersButton buttonText="Reselect Players" />
        </div>
      </MainContainer>
		)
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;