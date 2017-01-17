import React, { Component, PropTypes } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class UsersFilter extends Component {
    handleSearch() {
        const field = this.searchField.value;
        const query = this.searchQuery.value;

        if (query) {
            this.props.handleSearch(field, query);
        }
    }

    handleClear() {
        const field = this.searchField.value;

        if (field) {
            this.props.handleClear(field);
        }
    }

    render() {
        return (
            <Form inline>
                <FormControl inputRef={ ref => { this.searchField = ref; } } componentClass="select" placeholder="Select column by sort">
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="email">Email</option>
                    <option value="status">Status</option>
                </FormControl>
                {' '}
                <FormControl inputRef={ref => { this.searchQuery = ref; } } type="text" placeholder="Search" />
                {' '}
                <Button type="reset" onClick={ () => this.handleClear() }>X</Button>
                {' '}
                <Button bsStyle='primary' onClick={ () => this.handleSearch() }>Search</Button>
            </Form>
        )
    }
}