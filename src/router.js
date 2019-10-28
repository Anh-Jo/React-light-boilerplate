import React from 'react'
import {Switch, Route} from "react-router-dom";


export default() => (
    <Switch>
        <Route exact path={'/'}>
            <h1>Home Component</h1>
        </Route>
        <Route>
            <h1>404 Component</h1>
        </Route>
    </Switch>
)