import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'', 
        email:''
    });

    const {name, email} = formState;



    useEffect( () =>{
        //console.log('HEY!')
        return () =>{}
    }, [] );

    useEffect( () =>{
        //console.log('Formulario Cambió')
    }, [formState] );

    useEffect( () =>{
        //console.log('email Cambió')
    }, [email] );

    const handleInputChange = ({ target })=>{
        //console.log(target.name);
        //console.log(target.value);

        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
          <h1>useEffect</h1>  
          <hr/>
          <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tú nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}>
            </input>

            <input
                type="email"
                name="email"
                className="form-control mt-2"
                placeholder="Tú email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}>
            </input>

          </div>

          { (name === '123') && <Message/> }

        </>
    )
}
