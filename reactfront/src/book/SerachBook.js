import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/books/'

const CompSearchBooks = () => {
    const [books, setBook] = useState([])
    useEffect(() =>{
        getBook()
    },[])

    //procedimiento para mostrar todos los books
    const getBooks = async() => {
            const res = await axios.get(URI)
            setBook(res.data)
    }

    //procedimiento para eliminar un book
    const deleteBooks = async (id) => {
            axios.delete('${URI}${id}')
            getBooks()
    }

    return(
        <div className = 'container'>
            <div className='row'>
                <div className='col'>
                    <table className='table table-striped'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Título</th>
                                <th>Género</th>
                                <th>Editorial</th>
                                <th>Autor</th>
                                <th>NºPags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map ( (book) => (
                                <tr key={ book.id }>
                                    <td> { book.title } </td>
                                    <td> { book.genre } </td>
                                    <td> { book.publishing } </td>
                                    <td> { book.author }</td>
                                    <td> { book.pag } </td>
                                    <td>
                                        <Link to={'/edit/${book.id}'} className = "btn btn-inf"> Editar </Link>
                                        <button onClick={() => deleteBooks(book.id)} className='btn btn-danger'> Delete </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBooks