import React, {useState} from 'react'

interface Props {
    text:string,
}

const Text:React.FC<Props> = ({ text }) => {
    return <>
        Hello : {text}
    </>
}

export default Text