import {Sequelize} from "sequelize";

const db = new Sequelize('database_app_libreria', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

export default db