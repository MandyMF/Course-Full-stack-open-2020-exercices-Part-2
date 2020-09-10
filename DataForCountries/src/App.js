import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import CountriesList from './components/CountriesList'



const App = () => {
    const [countries, setCountries] = useState([])
    const [countriesToShow, setCountriesToShow] = useState([])
    const [filter, setFilter] = useState('')

    const handleFilterChange = (event) =>{
        setFilter(event.target.value)
    }

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    useEffect(()=> {
        setCountriesToShow(countries.filter(
            country =>
                 country.name.toUpperCase().includes(filter.toUpperCase())
            
        ))
    }, [filter, countries])

    if (countriesToShow.length > 10) {
        return (
            <div>
                <Filter filter={filter} hanleFilterChange={handleFilterChange}/>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <Filter filter={filter} hanleFilterChange={handleFilterChange}/>
                <CountriesList countries={countriesToShow} />
            </div>
        )
    }
}

export default App