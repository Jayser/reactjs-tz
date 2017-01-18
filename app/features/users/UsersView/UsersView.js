import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as UserActions from '../actions';

import UsersList from '../UsersList';
import UsersFilter from '../UsersFilter';
import UsersPagination from '../UsersPagination';

// TODO: Should be change to "CSS module" way
import './UsersView.scss';

class UsersView extends Component {
    static propTypes = {
        users: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    componentWillMount() {
        this.handleChangeRouteState(browserHistory.getCurrentLocation().query);
    }

    @autobind handleChangeRouteState({ page, sort, search }) {
        /*
         * TODO: Should be change current implementation to:
         * page=1&sortByField=lastName&sortType=alphabet&searchByField&searchQuery=query
         *
         * I think it's more useful
         */
        const path = browserHistory.getCurrentLocation();

        if (page) {
            path.query.page = page;
            this.props.actions.userPage(Number(page));
        }

        if (sort) {
            path.query.sort = sort;
            this.props.actions.sortUser(sort);
        }

        if (search && search.query) {
            path.query[search.field] = search.query;
            this.props.actions.searchUser(search.field, search.query);
        }

        if (search && search.field && !search.query) {
            path.query = {
                page: path.query.page,
                sort: path.query.sort,
            };
            this.props.actions.clearSearchFilter();
        }

        browserHistory.push(path);
    }

    @autobind handleFilterSearch(field, query) {
        this.handleChangeRouteState({ search: { field, query } });
    }

    @autobind handleFilterClear(field) {
        this.handleChangeRouteState({ search: { field } });
    }

    getVisibilityUsers() {
        return this.props.users.data.filter(({ visibility }) => visibility === true || visibility === undefined);
    }

    render() {
        const {
            users: {
                activePage,
                sort,
            },
            actions: {
                deleteUser
            }
        } = this.props;

        const users = this.getVisibilityUsers();

        return (
            <section>
                <UsersFilter
                    handleSearch={ this.handleFilterSearch }
                    handleClear={ this.handleFilterClear } />
                <UsersList
                    className="users-list"
                    activePage={ activePage }
                    users={ users }
                    sort={ sort }
                    handleChangeRouteState={ this.handleChangeRouteState }
                    deleteUser={ deleteUser } />
                <UsersPagination
                    activePage={ activePage }
                    items={ users.length }
                    handleChangeRouteState={ this.handleChangeRouteState } />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersView);
