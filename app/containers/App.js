import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EmployeesList from '../components/EmployeesList'
import * as TodoActions from '../actions'

const App = ({employees, actions}) => {
    return <EmployeesList employees={ employees } actions={ actions } />
};

App.propTypes = {
    employees: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    employees: state.employees
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
