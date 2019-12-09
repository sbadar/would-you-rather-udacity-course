  
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { handleInitialData }  from '../actions/shared'
import Routes from '../Components/Routes'
import NavBar from '../Components/TopNavigationBar';
import Login from "../Components/Login";

class App extends Component {
  componentDidMount(){
    this.props.handleInitialData()
  }
  render() {
    const { notLoggedIn } = this.props;
    console.error('not logged in --------> ' + notLoggedIn)
    return (
      <Router>
        <Fragment>
          <div className="main-container">
            <NavBar/>
            <Switch>
              {
                notLoggedIn===true ? <Route component={Login}/> :
                <Routes notLoggedIn={notLoggedIn}/>
              }
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  handleInitialData : PropTypes.func.isRequired,
  notLoggedIn: PropTypes.bool.isRequired
};

function mapStateToProps ({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)