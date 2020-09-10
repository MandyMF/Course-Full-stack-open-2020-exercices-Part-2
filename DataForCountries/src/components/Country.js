import React from 'react'

const Country = ({country, ...props}) =>{
    return (
        <p>
            {country.name}
        </p>
    )
}

export default Country