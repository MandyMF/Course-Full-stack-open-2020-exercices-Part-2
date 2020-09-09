import React from 'react'

const Person = ({name, number, ...props})=>{
    return (
        <p>{name} {number}</p>
    )
}

export default Person

