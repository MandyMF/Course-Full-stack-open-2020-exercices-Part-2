import React from 'react'

const Filter = ({filter, hanleFilterChange, ...props}) =>{
    return (
        <>
        find countries <input value={filter} onChange={hanleFilterChange}/>
        </>
    )
}

export default Filter