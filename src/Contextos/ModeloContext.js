import React, { useState } from 'react';

const ModeloContext = React.createContext({})

export function ModeloContextProvider({children}) {
    const [idContex, setIdContex] = useState(0)
    const [nameContex, setNameContex] = useState('')

    return  <ModeloContext.Provider value={{ idContex, setIdContex, nameContex, setNameContex}}>
                {children}
            </ModeloContext.Provider>     
}

export default ModeloContext;