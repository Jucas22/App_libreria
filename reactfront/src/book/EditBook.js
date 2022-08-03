import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/books/'

const CompEditBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishing, setPublishing] = useState('')
    const [pag, setPag] = useState('')
    const [genre, setGenre] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //Para que funcione el useEffect
    const [isFirstLoad, setIsFirstLoad] = useState(true)
    const [isVisible, setVisible] = useState(false)

    //procedimiento para editar
    const update = async(e) => {
        // e.preventDefaul()
        navigate('/showBooks')
        await axios.put(URI+id, {
            title:title,
            author:author,
            publishing:publishing,
            pag:pag,
            genre:genre
        })
    }

    useEffect( ()=> {
        if (!isFirstLoad) {
        } else {
            setIsFirstLoad(false)
            getBookById()
        }
    },)

    const getBookById = async () =>{
        const res = await axios.get(URI+id)
        console.log(res)
    setTitle(res.data.title)
    setAuthor(res.data.author)
    setPublishing(res.data.publishing)
    setGenre(res.data.genre)
    setPag(res.data.pag)
    }

    return (
        <div>
            <h3>Edit Book</h3>
            <form onSubmit= {update} >
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
                <button type="submit" className="btn btn-primary"> Editar Libro </button>
            </form>
            <Link to ='/showBooks'> Volver atrás </Link>
        </div>
    )
    
}

export default CompEditBook