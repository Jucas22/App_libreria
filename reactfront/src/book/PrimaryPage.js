import {Link} from 'react-router-dom'

const CompPriamryPage = () => {
    return (
        <div>
            <div className='titlePag'>
                <h1> LIBRERÍA DE CASA </h1>
                <p> Realizar una consulta: </p>
                <Link to ='/create' className='btn btn-primary'> Introducir un nuevo libro: </Link>
                <hr></hr>
                <Link to ='/showBooks' className='btn btn-primary'> Ver todos los libros: </Link>
            </div>
        </div>
    )
}

export default CompPriamryPage