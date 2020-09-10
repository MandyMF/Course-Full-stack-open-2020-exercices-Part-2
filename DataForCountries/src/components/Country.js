import React from 'react'

const Country = ({country, ...props}) =>{
    return (
        <p>
            {country.name} <button onClick={() => props.changeFilterFunction(country.name)}>show</button>
        </p>
    )
}

export default Country