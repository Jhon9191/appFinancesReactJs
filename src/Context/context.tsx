import { ReactNode, useState } from "react";
import {createContext} from "react"

interface providerProps{
    children:ReactNode;
}

interface dataContext{
    variavel: Number;
    taggleMenu: () => void;
    navegate: Function;
    navegation: Number
}

export const Contexto =  createContext({} as dataContext);

export function ContextProvider( { children } : providerProps ){
    
    const taggleMenu = () =>{
        if(variavel === 5){
            setVariavel(20)
        }else if(variavel === 20){
            setVariavel(5)
        }
    }
    const [variavel, setVariavel] = useState(20);
    
    const[navegation, setNavegation] = useState(1)

    const navegate=(valor : number)=>{
        if(valor === 1){
            setNavegation(1)
        }else if(valor === 2){
            setNavegation(2)
        }
    }

    return(
        <Contexto.Provider value={{
            variavel,
            taggleMenu,
            navegate,
            navegation
        }}>
            {children}
        </Contexto.Provider>
    );
}