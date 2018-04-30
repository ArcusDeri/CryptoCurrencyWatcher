import React from 'react'
import { API_URL } from '../../../config'
import { handleResponse } from '../../../helpers'
import { withRouter } from 'react-router-dom'
import Loading from '../LoadingComponent/Loading'
import './Search.css'

class Search extends React.Component{
    
    constructor(){
        super()

        this.state = {
            searchQuery: '',
            isLoading: false,
            searchResults: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    handleRedirect(currencyId){
        this.setState({
            searchQuery: '',
            searchResults: [],
        })

        this.props.history.push(`/currency/${currencyId}`)
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
                this.setState({
                    isLoading: false,
                    searchResults: result,
                })
            })
    }

    renderSearchResults(){
        const { searchResults, searchQuery, isLoading } = this.state

        if(!searchQuery){
            return ''
        }

        if(searchResults.length > 0){
            return(
                <div className="Search-result-container">
                    {searchResults.map(result => (
                        <div 
                            className="Search-result"
                            key={result.id}
                            onClick={() => this.handleRedirect(result.id)}
                        >
                            {result.name} ({result.symbol})
                        </div>
                    ))}
                </div>
            )
        }
        if(!isLoading){
            return (
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No results found.
                    </div>
                </div>
            )
        }
    }

    render(){
        const { isLoading, searchQuery } = this.state
        return(
            <div className="Search">
                <span className="Search-icon"/>
                <input 
                    name="searchQuery"
                    onChange={this.handleChange}
                    className="Search-input"
                    type="text"
                    placeholder="Currency name"
                    value={searchQuery}
                />
                {isLoading &&
                    <div className="Search-loading">
                        <Loading 
                            width="12px"
                            height="12px"
                        />
                    </div>}
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default withRouter(Search)