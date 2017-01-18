import React, { Component, PropTypes } from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

import UsersListItem from './UsersListItem/UsersListItem';

// TODO: Should be change to "CSS module" way
import './UserList.scss';

export default class UsersList extends Component {
    static propTypes = {
        activePage: PropTypes.number,
        className: PropTypes.string,
        sort: PropTypes.string,
        perPage: PropTypes.number,
        users: PropTypes.array.isRequired,
        deleteUser: PropTypes.func.isRequired,
        handleChangeRouteState: PropTypes.func.isRequired
    };

    static defaultProps = {
        perPage: 5
    };

    renderUsers() {
        const { activePage, perPage, deleteUser } = this.props;
        const from = (activePage - 1) * this.props.perPage;
        const to = from + perPage;
        const users = this.props.users.slice(from, to);

        if (!users.length) {
            return null;
        }

        return users.map(user => (
            <UsersListItem key={ user.id } user={ { ...user } } deleteUser={ deleteUser } />
        ));
    }

    renderIcon(name) {
        return this.props.sort === name ? <Glyphicon glyph='sort-by-alphabet' /> : null;
    }

    render() {
        const firstName = 'firstName';
        const lastName = 'lastName';
        const email = 'email';
        const status = 'status';

        const { handleChangeRouteState } = this.props;

        return (
            <Table className={ this.props.className } striped bordered condensed hover>
                <thead>
                    <tr>
                        <th className={'header'} onClick={ () => handleChangeRouteState({ sort: firstName }) }>
                            { this.renderIcon(firstName) } First Name
                        </th>
                        <th className={'header'} onClick={ () => handleChangeRouteState({ sort: lastName }) }>
                            { this.renderIcon(lastName) } Last Name
                        </th>
                        <th className={'header'} onClick={ () => handleChangeRouteState({ sort: email }) }>
                            { this.renderIcon(email) } Email
                        </th>
                        <th className={'header'} onClick={ () => handleChangeRouteState({ sort: status }) }>
                            { this.renderIcon(status) } Status
                        </th>
                        <th className={'header'}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderUsers() }
                </tbody>
            </Table>
        );
    }
}
