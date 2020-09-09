import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

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

            <Filter filter={filter} handleFilterChange={handleFilterChange} />
               
            <h3>Add a new</h3>

            <PersonForm 
            onSubmit={addContact} 
            newName={newName} 
            newNumber={newNumber} 
            handleNewNameChange={handleNewNameChange} 
            handleNewNumberChange={handleNewNumberChange} 
            />

            <h3>Numbers</h3>

            <Persons 
            persons={persons} 
            filter={filter} 
            />
        </div>
    )
}

export default App