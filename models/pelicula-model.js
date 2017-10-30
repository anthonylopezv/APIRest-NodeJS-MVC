'use strict'

var conn = require('./pelicula-connection'),
    PeliculaModel = () => {}

PeliculaModel.getAll = (callback) => conn.query('SELECT * FROM pelicula', callback)

PeliculaModel.getOne = (id,callback) => conn.query('SELECT * FROM pelicula WHERE pelicula_id=?',id,callback)

//PeliculaModel.insert = (data,callback) => conn.query('INSERT INTO pelicula SET ?',data,callback)

//PeliculaModel.update = (data,callback) => conn.query('UPDATE pelicula SET ? WHERE pelicula_id = ?',[data,data.pelicula_id],callback)

PeliculaModel.save = (data,callback) => {
    conn.query('SELECT * FROM pelicula WHERE pelicula_id = ?', data.pelicula_id,(err,rows)=>{
        console.log(rows.length)

        if (err) {
            return err
        }
        else{
            return (rows.length == 1) 
            ? conn.query('UPDATE pelicula SET ? WHERE pelicula_id = ?',[data,data.pelicula_id],callback)
            : conn.query('INSERT INTO pelicula SET ?',data,callback)
        }
    })
}

PeliculaModel.delete = (id,callback) => conn.query('DELETE FROM pelicula WHERE pelicula_id=?',id,callback)

module.exports = PeliculaModel