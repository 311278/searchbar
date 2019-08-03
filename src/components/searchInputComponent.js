import React, { Component } from 'react';
import { Button, FormControl, Form, FormGroup, InputGroup } from 'react-bootstrap';

    export default class SearchInputComponent extends Component {

        state = {
            data: null
        }

    handleChange = (event) => {
        this.setState({
            data: event.target.value
        });
    }

    handleSearch = () => {
		const { onSearch } = this.props
		const { data } = this.state
		onSearch(data)
    }

    render() {
		
        return (
		<div className="search-input-component">
            <div className="alert alert-light">
              <strong>Please enter name to search</strong>.
            </div>
            <InputGroup size="lg" className="mb-3">
                <FormControl type="text" placeholder="Search" onChange={this.handleChange}/>
            </InputGroup>
                <Button variant="outline-success" block onClick={this.handleSearch}>Search</Button>
		</div>
           
        );
    }
}
