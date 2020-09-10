import React from 'react'
import Person from './Person'

const Persons = ({persons, filter, ...props}) =>{
    return (
        <>
             {persons.filter((person) => person.name.toUpperCase().startsWith(filter.toUpperCase())).map((person) => <Person key={person.id} name={person.name} number={person.number}/> )}
        </>
    )
}

export default Persons