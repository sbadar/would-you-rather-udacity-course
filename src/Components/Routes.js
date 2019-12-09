import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route, NotFoundRoute } from "react-router-dom";

import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import Login from "../Components/Login";
import NewQuestion from "./NewQuestion";
import QuestionDetails from "./QuestionDetails"
import NotFound from "./NotFound"
import Logout from './Logout'

function Routes(props) {
  return <div className="container">
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/leaderboard' exact component={LeaderBoard} />
      <Route path='/add' component={NewQuestion}/>
      <Route path="/questions/:id" component={QuestionDetails} />
      <Route path='/logout/*' component={Logout} />
      <Route path='/NotFound' component={NotFound}  />
      <Route component={NotFound} />
    </Switch>
  </div>;
}

Routes.propTypes = {notLoggedIn: PropTypes.any};

export default Routes;