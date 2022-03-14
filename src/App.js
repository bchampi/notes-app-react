import './App.css'
import { useEffect, useState } from 'react'
import { getAll, create } from './services/notes'

const Note = ({ content }) => <li>{ content }</li>

// Mejor tener menos estados posibles
const App = () => {
  const [ notes = [], setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    getAll().then(notes => {
      setNotes(notes)
      setLoading(false)
    })
  }, []) // dependencias

  const handleChange = event => setNewNote(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()

    const newData = { 
      content: newNote,
      body: newNote,
      userId: 1,
    }

    setError('')
    create(newData)
      .then(newNote => setNotes(notes.concat(newNote)))
      .catch(error => setError('Fallo en la API'))
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      { loading ? 'Cargando...' : '' }
      <ul>
        {
          notes.length ? notes.map(note => <Note key={note.id} {...note} />)
          : 'Sin notas'
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote} />
        <button type="submit">Create note</button>
      </form>

      {
        error ? <span>{ error }</span> : ''
      }
    </div>
  )
}

export default App