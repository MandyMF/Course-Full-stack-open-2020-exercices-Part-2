import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number:'040-1234567' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addContact = (event) => {
        event.preventDefault();

        //this code is in case empty names were invalid
        /*if(newName === '')
        {
            alert('please, introduce a name')
            return
        }*/

        if (persons.some((contact) => contact.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        setPersons(persons.concat({ name: newName, number: newNumber }))
        setNewName('')
        setNewNumber('')
    }

    const handleNewNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addContact}>
                <div>
                    name: <input value={newName} onChange={handleNewNameChange} />
                    <br />
                    number: <input value={newNumber} onChange={handleNewNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => <p key={person.name}>{person.name} {person.number}</p>)}

        </div>
    )
}

export default App