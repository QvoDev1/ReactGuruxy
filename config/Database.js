import { Sequelize } from "sequelize";
 
const db = new Sequelize('guruxy', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
