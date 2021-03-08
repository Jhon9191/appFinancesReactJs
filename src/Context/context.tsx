import { ReactNode, useState } from "react";
import {createContext} from "react"

interface providerProps{
    children:ReactNode;
}

export const Contexto =  createContext({} as dataContext);

export function ContextProvider( { children } : providerProps ){

    
    return(
        <Contexto.Provider value={{
        
        }}>
            {children}
        </Contexto.Provider>
    );
}