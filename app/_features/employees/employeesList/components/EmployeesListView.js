import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(
    state => contactList.selector(state.contactList),
    dispatch => ({
        actions: bindActionCreators(contactList, dispatch)
    })
)

class EmployeesListView extends Component {
    render() {
        debugger;
        return (
            <div>
                hello word
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeesListView)