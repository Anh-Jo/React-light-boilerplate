import React from 'react'
import Text from './component'

const App:React.FC = () => {
    return (
        <>
            <div>Hello Coucocuoucou  !</div>
            <Text text={'rbetnente'} />
        </>
    )
}


// @ts-ignore
import {hot} from 'react-hot-loader/root';
export default hot(App)