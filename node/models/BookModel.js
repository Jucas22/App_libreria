//importamo la conexion a la base de datos;
import db from "../database/db.js";

import { DataTypes } from "sequelize" ;

const BookModel = db.define('libros', {
        title: {type: DataTypes.STRING},
        publishing: {type: DataTypes.STRING},
        genre: {type: DataTypes.STRING},
        author: {type: DataTypes.STRING},
        pag: {type: DataTypes.NUMBER},
    })

export default BookModel
