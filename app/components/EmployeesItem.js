import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class TodoItem extends Component {
    static propTypes = {
        employee: PropTypes.object.isRequired,
        deleteEmployee: PropTypes.func
    };

    render() {
        const { employee } = this.props;

        return (
            <tr>
                <td>{ employee.firstName }</td>
                <td>{ employee.lastName }</td>
                <td>{ employee.email }</td>
                <td>{ employee.status }</td>
                <td>
                    <Button bsStyle="danger" onClick={ () => this.props.deleteEmployee(employee.idx) }>Delete</Button>
                </td>
            </tr>
        )
    }
}