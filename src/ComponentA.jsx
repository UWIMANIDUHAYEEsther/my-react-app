import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const userContext = createContext()

function ComponentA(){
    const [user, setuser] = useState('Esther')

    return(
        <div className='box'>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>

            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>
        </div>
    )
}

export default ComponentA