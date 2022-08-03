import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/books/'

const CompShowBooks = () => {
    const [books, setBook] = useState([])
    useEffect(  () =>{
        getBooks()
    },[])

    //procedimiento para mstrar todos los books
    const getBooks = async() => {
            const res = await axios.get(URI)
            setBook(res.data)
    }

    //procedimiento para eliminar un book
    const deleteBook = async (id) => {
            await axios.delete(`${URI}${id}`)
            getBooks()
    }

    return(
        <div className = 'container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/create' className='btn btn-primary mt-2 mb-2'> Añadir Libro </Link>
                    <table className='table table-striped'>
                        <thead className='table-primary'>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Género</th>
                                <th>Editorial</th>
                                <th>Autor</th>
                                <th>NºPags</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map ( (book) => (
                                <tr key={ book.id }>
                                    <td> {book.id } </td>
                                    <td> { book.title } </td>
                                    <td> { book.genre } </td>
                                    <td> { book.publishing } </td>
                                    <td> { book.author }</td>
                                    <td> { book.pag } </td>
                                    <td>
                                        <Link to={`/edit/${book.id}`} className = 'btn btn-info'> Editar </Link>
                                        <button onClick={() => deleteBook(book.id)} className='btn btn-danger'> Delete </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to ='/home'> Volver atrás </Link>
                </div>
            </div>
        </div>
    )
}

export default CompShowBooks