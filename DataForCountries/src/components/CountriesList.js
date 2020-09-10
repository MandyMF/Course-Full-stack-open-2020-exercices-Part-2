import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const CountriesList = ({ countries, ...props }) => {

    if (countries.length === 1) {

        console.log('countries', countries)
        return (
            <div>
                <CountryDetails country={countries[0]}/>
            </div>
        )
    }
    else {
        return (
            <div>
                {countries.map((country) => <Country key={country.numericCode} country={country} />)}
            </div>
        )
    }
}

export default CountriesList