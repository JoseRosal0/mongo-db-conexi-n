const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    cedula: String,
})

const User = mongoose.mondel('user', usuarioSchema);

module.exports = User;