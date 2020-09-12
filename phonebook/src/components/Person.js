import React from 'react'

const Person = ({ name, number, handlerDeletePerson, ...props }) => {
    return (      
            <p>{name} {number} <button onClick={() => handlerDeletePerson()}>delete</button></p>
    )
}

export default Person

