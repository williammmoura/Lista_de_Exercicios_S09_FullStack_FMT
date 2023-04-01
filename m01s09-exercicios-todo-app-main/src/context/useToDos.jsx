import { useContext } from 'react';
import todoContext from './todoContext';

// Função "useToDos", que utiliza o hook "useContext" para obter o contexto "todoContext" e retorna esse contexto.
export const useToDos = () => {
    const context = useContext(todoContext);
    return context;
};
