var React = require('react');
var PropTypes = React.PropTypes;
var { Link } = require('react-router');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper')
var SelectPlayersButton = require('./SelectPlayersButton')
var MainContainer = require('./MainContainer')
var LoadingIcon = require('./LoadingIcon')

function Results(props) {
	if (props.isLoading) {
		return <LoadingIcon text={"Loading Results Page"} speed={200} />
	}
	if (props.scores[0] == props.scores[1]) {
		return (
			<MainContainer>
				<h1>Stalemate!</h1>
				<SelectPlayersButton buttonText="Start Over" />
			</MainContainer>
		)
	}
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return (
		<MainContainer>
			<h1>{props.routeHeader}</h1>
			<div className="col-sm-8 col-sm-offset-2">
      	<UserDetailsWrapper header='Winner'>
      		<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
      	</UserDetailsWrapper>
      	<UserDetailsWrapper header='Loser'>
      		<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
      	</UserDetailsWrapper>
      </div>
			<SelectPlayersButton buttonText="Start Over" />
		</MainContainer>
	)
}

Results.propTypes = {
	routeHeader: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
}

module.exports = Results;