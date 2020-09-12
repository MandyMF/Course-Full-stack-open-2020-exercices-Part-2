import React from 'react'

const notification_style={
    success:
    {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    error:
    {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

}

const Notification = ({ message, ...props }) => {
    if (!message) {
        return null
    }

    return (
        <div style={(message.success ? notification_style.success : notification_style.error)}>
            {message.info}
        </div>
    )

    //Basic mode of changing the color
    //uncoment this and in index.css the error and success class and coment the default return
    //also uncomment import in App.js of index.css

    /*return (
        <div className={message.success ? 'success' : 'error'}>
            {message.info}
        </div>
    )*/


}

export default Notification