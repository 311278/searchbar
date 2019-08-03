import React from 'react';
import SearchInputComponent from './searchInputComponent.js'
import ListComponent from './listComponent.js'
import { data } from '../constant/searchData.js'

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
            value: {},
            isRecordExist: false,
            isLoading: false
		}

    }

    handleSearch = (value) => {
        this.setState({isLoading: true})
		const newValue = data.find(item => item.name === value)
		setTimeout(() => {
            this.setState({
                value: newValue,
                isRecordExist: !newValue,
                isLoading: false
            });
        }, 1000)

    }
	
    render() {
		
        const { value = {}, isRecordExist, isLoading } = this.state

        return (
            <div className="search-component">
            <div className="search-input-component">
            <SearchInputComponent onSearch={this.handleSearch} isLoading={isLoading}/>
            </div>
            <div className="list-component">
            <ListComponent data={value} isRecordExist={isRecordExist} isLoading={isLoading} /> 
            </div>  
            </div>     
        );
    }
}

export default SearchComponent
