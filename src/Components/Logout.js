import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {PropTypes} from 'prop-types'
import { unsetAuthedUser } from '../actions/authedUser'


class Logout extends Component {
  componentWillMount () {
    this.props.logout()
  }
  render () {
    return <Redirect to='/' />
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return{
    logout: () => dispatch(unsetAuthedUser())
  }

}

export default connect(null, mapDispatchToProps)(Logout)