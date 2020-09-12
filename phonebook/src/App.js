import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const [filter, setFilter] = useState('')

    useEffect(() => {
        personService.getAll()
            .then((response) => {
                setPersons(response)
            }
            )
    }, [])

    const addContact = (event) => {
        event.preventDefault();

        //this code is in case empty names were invalid
        /*if(newName === '')
        {
            alert('please, introduce a name')
            return
        }*/

        const person_found = persons.find((contact) => contact.name === newName)

        if (person_found) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
                const changePerson = { ...person_found, number: newNumber }
                personService.updatePerson(person_found.id, changePerson)
                    .then(response => {
                        setPersons(persons.map((person) => person.id !== response.id ? person : response))
                    })
            }
            return
        }

        personService.createPerson({ name: newName, number: newNumber })
            .then(response => {
                setPersons(persons.concat(response))
                setNewName('')
                setNewNumber('')
            })

    }

    const deleteContact = (personId, personName) => {
        if (window.confirm(`Delete ${personName} ?`)) {
            personService.deletePerson(personId)
            setPersons(persons.filter((person) => person.id !== personId))
        }
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
                handlerDeletePerson={deleteContact}
                persons={persons}
                filter={filter}
            />
        </div>
    )
}

export default App