import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class UsersListItem extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        deleteUser: PropTypes.func
    };

    render() {
        const { user } = this.props;

        return (
            <tr>
                <td>{ user.firstName }</td>
                <td>{ user.lastName }</td>
                <td>{ user.email }</td>
                <td className="text-center">{ user.status ? 'ACTIVE' : 'INACTIVE'}</td>
                <td className="text-center">
                    <Button bsStyle="danger" onClick={ () => this.props.deleteUser(user.id) }>Delete</Button>
                </td>
            </tr>
        )
    }
}