import axios from 'axios'
const API_URL = 'https://glacial-ravine-64204.herokuapp.com/api/notes'

const getAll = () => {
  const request = axios.get(API_URL)
  return request.then(response => response.data)

  // return fetch(API_URL).then(response => response.json())
}
const create = newObject => {
  const request = axios.post(API_URL, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${API_URL}/${id}`, newObject)
  return request.then(response => response.data)
}

export { getAll, create, update }