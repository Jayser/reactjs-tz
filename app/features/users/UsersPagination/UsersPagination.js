import React, { Component, PropTypes} from 'react';
import { Pagination } from 'react-bootstrap';

export default class UsersPagination extends Component {
    static propTypes = {
        activePage: PropTypes.number.isRequired,
        perPage: PropTypes.number,
        items: PropTypes.number.isRequired,
        handleChangeRouteState: PropTypes.func.isRequired
    };

    static defaultProps = {
        perPage: 5
    };

    render() {
        const itemsPerPage = Math.ceil(this.props.items / this.props.perPage);

        return (
            <section className="text-center">
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={ itemsPerPage }
                    activePage={ this.props.activePage }
                    onSelect={ page => this.props.handleChangeRouteState({ page }) } />
            </section>
        )
    }
}