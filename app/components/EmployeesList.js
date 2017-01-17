import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router'
import { Table, Pagination, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import EmployeesItem from './EmployeesItem';
import EmployeesFilter from './EmployeesFilter';

const DEFAULT_ACTIVE_PAGE = 1;
const ITEMS_PER_PAGE = 5;
const ACTIVE = 'active';
const INACTIVE = 'inactive';

export default class MainSection extends Component {
    static propTypes = {
        employees: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    updateState(employees) {
        this.setState({
            locationState: this.getLocationState(),
            employees: this.sortEmployees(employees || this.props.employees)
        });
    }

    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps.employees);
    }

    componentWillMount() {
        this.updateState();

        browserHistory.listen(state => this.handleChangeState(state));
    }

    searchEmployee(field, query) {
        this.handleChangeRoute({ search: { field, query } });
        this.props.actions.searchEmployee(field, query);
    }

    getLocationState() {
        const locationState = browserHistory.getCurrentLocation();

        locationState.query.page = Number(locationState.query.page) || DEFAULT_ACTIVE_PAGE;

        return locationState;
    }

    handleChangeState(state) {
        if (state.search !== this.state.locationState.search) {
            this.updateState();
        }
    }

    handleChangeRoute({ page, sort, search }) {
        const query = {
            ...this.getLocationState().query
        };

        if (page) {
            query.page = page;
        }

        if (sort) {
            query.sort = sort;
        }

        if (search) {
            query[search.field] = search.query;
        }

        browserHistory.push({ query });
    }

    renderItems() {
        const activePage = this.state.locationState.query.page - 1;
        const from = activePage * ITEMS_PER_PAGE;
        const to = from + ITEMS_PER_PAGE;

        const getItems = this.state.employees.slice(from, to);

        if (getItems.length) {
            return getItems.map((employee, idx) => {
                    employee = {
                        idx,
                        ...employee,
                        status: employee.status ? ACTIVE : INACTIVE
                    };

                    return <EmployeesItem key={ idx } employee={ employee } { ...this.props.actions } />;
                }
            )
        }

        return null;
    }

    sortEmployees(employees) {
        const name = browserHistory.getCurrentLocation().query.sort;

        if (name) {
            return employees.sort((a, b) => {
                return a[name] < b[name] ? -1 : 1;
            })
        }

        return employees;
    }

    renderIconSrtBy(name) {
        return this.state.locationState.query.sort === name ? <Glyphicon glyph={ `sort-by-alphabet` }/> : null;
    }

    renderEmployees() {
        const firstName = 'firstName';
        const lastName = 'lastName';
        const email = 'email';
        const status = 'status';

        return (
            <Table className="text-left" striped bordered condensed hover>
                <thead>
                <tr>
                    <th onClick={ () => this.handleChangeRoute({ sort: firstName }) }>
                        { this.renderIconSrtBy(firstName) } First Name
                    </th>
                    <th onClick={ () => this.handleChangeRoute({ sort: lastName }) }>
                        { this.renderIconSrtBy(lastName) } Last Name
                    </th>
                    <th onClick={ () => this.handleChangeRoute({ sort: email }) }>
                        { this.renderIconSrtBy(email) } Email
                    </th>
                    <th onClick={ () => this.handleChangeRoute({ sort: status }) }>
                        { this.renderIconSrtBy(status) } Status
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                { this.renderItems() }
                </tbody>
            </Table>
        );
    }

    renderPagination() {
        const page = this.state.locationState.query.page;

        return (
            <LinkContainer to={{pathname: '/', query: { page }}}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={ Math.ceil(this.state.employees.length / ITEMS_PER_PAGE) }
                    activePage={ page }
                    onSelect={ page => this.handleChangeRoute({ page }) }/>
            </LinkContainer>
        )
    }

    render() {
        const employees = this.renderEmployees();
        const pagination = this.renderPagination();

        return (
            <section>
                <EmployeesFilter searchEmployee={ (field, query) => this.searchEmployee(field, query) } />
                <br />
                <div  className="text-center">
                    { employees }
                    { pagination }
                </div>
            </section>
        );
    }
}
