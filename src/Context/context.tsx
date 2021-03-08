import { ReactNode, useState } from "react";
import {createContext} from "react"

interface providerProps{
    children:ReactNode;
}

interface dataContext{
    variavel: number;
    taggleMenu: () => void;
}

export const Contexto =  createContext({} as dataContext);

export function ContextProvider( { children } : providerProps ){
    
    const taggleMenu = () =>{
        if(variavel == 5){
            setVariavel(20)
        }else if(variavel == 20){
            setVariavel(5)
        }
    }

    const [variavel, setVariavel] = useState(20);
    
    return(
        <Contexto.Provider value={{
            variavel,
            taggleMenu
        }}>
            {children}
        </Contexto.Provider>
    );
}