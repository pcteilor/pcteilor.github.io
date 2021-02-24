import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../modules/Header'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Search from '../pages/Search'
import Criar from '../pages/Criar'

export default function Routes(props) {
    return(
        <div>
            
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/monster/:id' exact component={Detail} />
                    <Route path='/search' exact component={Search}/>
                    <Route path='/criar' exact component={Criar} />
                </Switch>
            </Router>
        </div>
        
    )
}