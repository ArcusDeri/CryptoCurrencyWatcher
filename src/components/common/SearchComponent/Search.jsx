import React from 'react'
import { API_URL } from '../../../config'
import { handleResponse } from '../../../helpers'
import Loading from '../LoadingComponent/Loading'
import './Search.css'

class Search extends React.Component{
    
    constructor(){
        super()

        this.state = {
            searchQuery: '',
            isLoading: false,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({ [inputName]: inputValue })

        if(!inputValue)
            return ''
        this.setState({isLoading: true})
        fetch(`${API_URL}autocomplete?searchQuery=${inputValue}`)
            .then(handleResponse)
            .then((result) => {
                this.setState({isLoading: false})
            })
    }

    render(){
        const { isLoading } = this.state
        return(
            <div className="Search">
                <span className="Search-icon"/>
                <input 
                    name="searchQuery"
                    onChange={this.handleChange}
                    className="Search-input"
                    type="text"
                    placeholder="Currency name"
                />
                {isLoading &&
                    <div className="Search-loading">
                        <Loading 
                            width="12px"
                            height="12px"
                        />
                    </div>}
            </div>
        )
    }
}

export default Search