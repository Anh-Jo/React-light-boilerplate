import React, { Suspense } from 'react'
import {hot} from 'react-hot-loader/root';
const LazyLay  = React.lazy(() => import('./LazyImport'));

const App = () => {
    return (
        <>
            <div css={{color: 'green'}}>Hello leerplate !</div>
            <Suspense fallback={<div/>}>
                <LazyLay/>
            </Suspense>
        </>
    )
}


export default hot(App)