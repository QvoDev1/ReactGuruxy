import Usuarios from "../Model/Usuarios.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const usuarios = await Usuarios.findAll({
            attributes:['id','nombres','apellidos','tipo_documento','numero_documento','email']
        });
        res.json(usuarios);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { nombres, apellidos, password, tipo_documento,numero_documento,email, perfil_id } = req.body;
  
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Usuarios.create({
            nombres: nombres,
            apellidos: apellidos,
            tipo_documento: tipo_documento,
            numero_documento: numero_documento,
            email: email,
            perfil_id: perfil_id,
            password: hashPassword
        });
        res.json({msg: "Registro Exitoso!!"});
    } catch (error) {
        console.log(error);
    }
}