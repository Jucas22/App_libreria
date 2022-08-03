import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/books/'

const CompCreateBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishing, setPublishing] = useState('')
    const [pag, setPag] = useState('')
    const [genre, setGenre] = useState('')
    const navigate = useNavigate()

    //procedimiento para guardar el libro:

    const newBook = async (e) => {
        e.preventDefaul();
        navigate('/showBooks')
        const res = await axios.post(URI, {title:title, author:author, publishing:publishing, pag:pag, genre:genre})
        // });
    }

    //vista de la pag de ingresar un nuevo libro

    return (
        <div>
            <h3>Create Book</h3>
            <form onSubmit= {newBook} >
                    <div className="mb-3">
                        <label className="form-label"> Título </label>
                        <input
                            value= {title}
                            onChange = { (e) => setTitle(e.target.value)}
                            type = 'text'
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Autor </label>
                        <input
                            value= {author}
                            onChange = { (e) => setAuthor(e.target.value)}
                            type = 'text'
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Editorial </label>
                        <input
                            value= {publishing}
                            onChange = { (e) => setPublishing(e.target.value)}
                            type = 'text'
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> NºPags </label>
                        <input
                            value= {pag}
                            onChange = { (e) => setPag(e.target.value)}
                            type = 'number'
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Género </label>
                        <input
                            value= {genre}
                            onChange = { (e) => setGenre(e.target.value)}
                            type = 'text'
                            className="form-control"
                        />
                    </div>
                <button type="submit" className="btn btn-primary"> Guardar Libro </button>
            </form>
            <Link to ='/home'> Volver atrás </Link>
        </div>
    )
}

export default CompCreateBook