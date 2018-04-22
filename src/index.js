import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/HeaderComponent/header'
import './index.css'

const App = () => {
    const title = 'Crypto Currency Watcher'
    return (
        <div>
            <Header />
            <h1>{title}</h1>
            <p>Your source of crypto currency world informations.</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)