import Express from "express"
import cors from 'cors'

//importamos conexion bd
import db from "./database/db.js"

//importamos nuestro enrutador
import bookRoutes from './routes/routes.js'

const app = Express()

app.use(cors())
app.use(Express.json())
app.use('/books', bookRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log('El error de conexión es: ${error}')
}

app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})