import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const [filter, setFilter] = useState('')

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

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with
            <input value={filter} onChange={handleFilterChange} />
            <h2>add a new</h2>
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
            {persons.filter((person) => person.name.toUpperCase().startsWith(filter.toUpperCase())).map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default App