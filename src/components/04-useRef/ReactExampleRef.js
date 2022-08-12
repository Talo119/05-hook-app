import React, {useState} from 'react';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';


export const ReactExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            { show && <MultipleCustomHooks /> }

            <button 
                className="btn btn-warning mt-3"
                onClick={ () => {
                    setShow(!show);
                }}
            >                    
                Show/Hide
            </button>

        </div>
    )
}
