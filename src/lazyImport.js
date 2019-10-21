import React, {useState} from 'react'

export default () => {
    const [count, setCount] = useState(0)
    return <>
        Il y a un compteur que l'on peut augmenter en cliquant ici :
        <button onClick={() => setCount(count + 1)}>Hit me ! </button>
        Résultat du compteur {count}
    </>
}