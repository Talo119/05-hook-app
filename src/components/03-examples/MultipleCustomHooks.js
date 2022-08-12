import React from 'react';
import { useCounter } from '../../hooks/useCounter2';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(loading);

    const {author, quote} = !!data && data[0];
    //const {author, quote, series} = state.data[0];


    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading
                ?
                    (
                        <div className="alert alert-info">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                        <p>
                            {quote}
                        </p>
                        <footer className="blockquote-footer">
                            {author}
                        </footer>

            </blockquote>
                    )
            }
            
            <button className="btn btn-primary"
                    onClick={increment}>
                Siguiente Frase
            </button>

            


        </div>
    )
}
