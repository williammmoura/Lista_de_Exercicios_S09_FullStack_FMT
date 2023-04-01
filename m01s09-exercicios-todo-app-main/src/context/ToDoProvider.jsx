import React, { createContext } from 'react';

// Cria o contexto
export const todoContext = createContext();

const ToDoProvider = (props) =>{
    return(
        <todoContext.Provider value={undefined}>
            {props.children}
        </todoContext.Provider>
    );
};