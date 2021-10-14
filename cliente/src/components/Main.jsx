import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BookList from '../components/BookList';
import Details from './Details'


const Main = () => {
    return (
        <main>
        <Switch>
        <Route path='/:id' component={Details} exact/>
        <Route path='/' component={BookList} exact/>
       
        </Switch>
      </main>
    )
}

export default Main
