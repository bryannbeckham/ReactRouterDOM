import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import Cart from './pages/cart'
import {Route, Switch} from 'react-router-dom'


export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        )
    }
}