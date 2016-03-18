var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
// var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var InvalidPlayers = require('../components/InvalidPlayers');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute header='Github Battle' component={Home} />
			<Route path='/playerOne' header='Player One' component={PromptContainer} />
			<Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
			<Route path='/battle' header='Confirm Battle' component={ConfirmBattleContainer} />
			<Route path='/results' header='Results' component={ResultsContainer} />
			<Route path='/error' component={InvalidPlayers} />
		</Route>
	</Router>
);

module.exports = routes;