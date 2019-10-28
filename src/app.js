import React from 'react'
import {hot} from 'react-hot-loader/root';
import {BrowserRouter} from "react-router-dom"
import Router from './router'

const App = () => (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
)

export default hot(App)