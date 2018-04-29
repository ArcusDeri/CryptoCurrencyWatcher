import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/HeaderComponent/header'
import List from './components/common/ListComponent/List'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './components/common/NotFoundComponent/NotFound'
import Detail from './components/common/DetailComponent/Detail'
import './index.css'

const App = () => {
    const title = 'Crypto Currency Watcher'
    return (
        <BrowserRouter>
            <div>
                <Header />
                <h1>{title}</h1>
                <Switch>
                    <Route path="/" component={List} exact />
                    <Route path="/currency/:id" component={Detail} exact/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)