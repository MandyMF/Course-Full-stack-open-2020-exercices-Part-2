import React from 'react'

const Filter = ({filter, handleFilterChange, ...props}) => {
    return (
        <>
        filter shown with
        <input value={filter} onChange={handleFilterChange} />
        </>
    )
}

export default Filter
