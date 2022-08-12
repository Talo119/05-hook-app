import React, {useLayoutEffect, useRef} from 'react';
import { useCounter } from '../../hooks/useCounter2';
import { useFetch } from '../../hooks/useFetch';
import './layout.css'

export const LayoutEfect = () => {
    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    

    const {quote} = !!data && data[0];
    const pTag = useRef();

    useLayoutEffect(() => {
        //console.log(pTag.current.getBoundingClientReact());
    }, [quote])


    return (
        <div>
            <h1>Layout Effects Quotes</h1>
            <hr/>            
            <blockquote className="blockquote text-end">
                <p 
                    className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
                
            </blockquote>
            
            <button className="btn btn-primary"
                    onClick={increment}>
                Siguiente Frase
            </button>

            


        </div>
    )
}
