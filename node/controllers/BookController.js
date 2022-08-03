//importamos el modelo
import BookModel from "../models/BookModel.js";

//**Métodos para el CRUD */

//Mostrar todos los registros
export const getAllBooks = async (req, res) => {
    try {
        let books;
        if(req.params.title){
         books = await BookModel.findAll({
            where:{title:req.params.title}
        })}
        else { books = await BookModel.findAll({})}
        res.json(books)
        
    } catch (error) {
        res.json( {message: error.message} )
    }
}  

//Mostrar un registro
export const getBook = async (req, res) => {
    try {
        const book = await BookModel.findAll({
            where:{id:req.params.id}
        })
        res.json(book[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createBook = async(req, res) => {
    try {
        await BookModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateBook = async(req, res) => {
    try {
        await BookModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteBook = async(req, res) => {
    try {
        await BookModel.destroy({
            where: {id : req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
} 
