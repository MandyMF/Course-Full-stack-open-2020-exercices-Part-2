import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Wheather = ({country, ...props}) =>{
    const api_key = process.env.REACT_APP_API_KEY
    const [wheather, setWheather] = useState({})

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
        .then((response)=>{
            setWheather(response.data.current)
        })
    }, [])

    return (
        <>
        <h2>Wheather in {country.capital}</h2>
        <p><strong>temperature:</strong> {wheather.temperature} Celsius</p> 
        <img alt={wheather.weather_descriptions} src={wheather.weather_icons} width={100}/>
        <p><strong>wind:</strong> {wheather.wind_speed} mph direction {wheather.wind_dir}</p> 
            
        </>
    )
}

export default Wheather