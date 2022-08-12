import React from 'react';
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter2';

export const Memorize = () => {
    const {counter, increment} = useCounter(10);
    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
        </div>
    )
}
