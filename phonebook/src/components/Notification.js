import React from 'react'

const Notification = ({message, ...props}) =>{
    if(!message)
    {
        return null
    }

    return (
        <div className='success'>
            {message}
        </div>
    )

}

export default Notification