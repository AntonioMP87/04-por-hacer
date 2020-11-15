const fs = require('fs');

let lstTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(lstTareas);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw err;
    });
}
const crear = (descripcion) => {
    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    lstTareas.push(tarea);

    return lstTareas;
}
const cargarDB = () => {

    try {
        lstTareas = require('../db/data.json');
        return lstTareas;
    } catch (error) {
        console.log(err);
    }


}

const getListado = () => {
    return cargarDB();

}

const actualizar = (descripcion, completado) => {

    cargarDB();
    let index = lstTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        lstTareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let tareaEliminar = lstTareas.filter(tarea => tarea.descripcion !== descripcion);
    if (tareaEliminar.length === lstTareas.length) {
        return false;
    } else {
        lstTareas = tareaEliminar;
        guardarDB();
        return true
    }
}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}