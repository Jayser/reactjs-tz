import React, { Component, PropTypes} from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class EmployeesFilter extends Component {
    static propTypes = {
        searchEmployee: PropTypes.func.isRequired
    };

    handleSubmit() {
        const field = this.searchField.value;
        const query = this.searchQuery.value;

        this.props.searchEmployee(field, query);
    }

    render() {
        return (
            <Form inline>
                <FormControl inputRef={ref => { this.searchField = ref; }} componentClass="select" placeholder="Select column by sort">
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="email">Email</option>
                    <option value="status">Status</option>
                </FormControl>
                {' '}
                <FormControl inputRef={ref => { this.searchQuery = ref; }} type="text" placeholder="Search" />
                {' '}
                <Button type="reset">X</Button>
                {' '}
                <Button bsStyle='primary' onClick={ () => this.handleSubmit() }>Search</Button>
            </Form>
        )
    }
}