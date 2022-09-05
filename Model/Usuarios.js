import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Usuarios = db.define('usuarios',{
    nombres:{
        type: DataTypes.STRING
    },
    apellidos:{
        type: DataTypes.STRING
    },
    tipo_documento:{
        type: DataTypes.INTEGER
    },
    numero_documento:{
        type: DataTypes.INTEGER
    },
    password:{
        type: DataTypes.STRING
    },
    oficina_id:{
        type: DataTypes.INTEGER
    },
    perfil_id:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Usuarios;