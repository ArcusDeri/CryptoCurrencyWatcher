import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/HeaderComponent/header'
import List from './components/common/ListComponent/list'
import './index.css'

const App = () => {
    const title = 'Crypto Currency Watcher'
    return (
        <div>
            <Header />
            <h1>{title}</h1>
            <List />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)