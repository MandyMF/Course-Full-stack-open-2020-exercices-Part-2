import axios from 'axios'

const base_url = 'http://localhost:3001/persons'

const getAll = () =>{
    return axios.get(base_url).then(response=>response.data)
}

const createPerson = ( newPerson ) =>{
    return axios.post(base_url, newPerson).then(response=>response.data)
}

const deletePerson = (personId) =>{
    return axios.delete(`${base_url}/${personId}`)
    .then(response=> {
        console.log(response)
        return response.data
    })
}

export default {getAll, createPerson, deletePerson}