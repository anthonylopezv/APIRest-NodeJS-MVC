'use strict'

var PeliculaModel = require('../models/pelicula-model'),
    PeliculaController = () => {}

PeliculaController.getAll = (req,res,next) => {
    PeliculaModel.getAll((err,rows) => {
        if (err) {
            let locals = {
                title: 'Error al consultar la base de datos',
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error',locals)
            
        }
        else{
            let locals = {
                title: 'Lista de Peliculas',
                data: rows
              }
              res.render('index', locals)
        }
    })
}

PeliculaController.getOne = (req,res,next) => {
    let pelicula_id = req.params.pelicula_id
    console.log(pelicula_id)

    PeliculaModel.getOne(pelicula_id,(err,rows) => {
          console.log(err,'---',rows)
          if(err){
            let locals = {
                title: `Error al buscar el registro con el id: ${pelicula_id}`,
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error',locals)
          }else{
              let locals = {
                title: 'Editar Pelicula',
                data: rows
              }
              res.render('editar-pelicula',locals)
            }
        })
}

/*PeliculaController.insert = (req,res,next) => {
    let pelicula = {
        pelicula_id : req.body.pelicula_id,
        titulo : req.body.titulo,
        anio : req.body.anio,
        rating: req.body.rating,
        imagen: req.body.imagen
    }
  
      console.log(pelicula)

      PeliculaModel.insert(pelicula, (err) => {
        if (err) {
            let locals = {
                title: `Error al agregar el registro con el id: ${pelicula.pelicula_id}`,
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error',locals)
        }
        else{
            res.redirect('/')
        }
      })
}*/

/*PeliculaController.update = (req,res,next) => {
    let pelicula = {
        pelicula_id : req.body.pelicula_id,
        titulo : req.body.titulo,
        anio : req.body.anio,
        rating: req.body.rating,
        imagen: req.body.imagen
    }
  
    console.log(pelicula)

    PeliculaModel.update(pelicula, (err) => {
        if (err) {
            let locals = {
                title: `Error al actualizar el registro con el id: ${pelicula.pelicula_id}`,
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error',locals)
        }
        else{
            res.redirect('/')
        }
    })
}*/

PeliculaController.save = (req,res,next) => {
    let pelicula = {
        pelicula_id : req.body.pelicula_id,
        titulo : req.body.titulo,
        anio : req.body.anio,
        rating: req.body.rating,
        imagen: req.body.imagen
    }
  
    console.log(pelicula)

    PeliculaModel.save(pelicula, (err) => {
        if (err) {
            let locals = {
                title: `Error al salvar el registro con el id: ${pelicula.pelicula_id}`,
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error',locals)
        }
        else{
            res.redirect('/')
        }
    })
}

PeliculaController.delete = (req,res,next) => {
    let pelicula_id = req.params.pelicula_id
    console.log(pelicula_id)

    PeliculaModel.delete(pelicula_id,(err,rows) => {
          console.log(err,'---',rows)
          if(err){
            let locals = {
                title: `Error al buscar el registro con el id: ${pelicula_id}`,
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error',locals)
          }else{
              res.redirect('/')
            }
        })
}

PeliculaController.addForm = (req,res,next) => res.render('agregar-pelicula',{title: 'Agregar Pelicula'})

PeliculaController.error404 = (req,res,next) => {
    let error = new Error(),
    locals = {
      title: 'Error 404',
      description: 'Recurso no encontrado',
      error: error
    }
  error.status = 404
  
  res.render('error',locals)

  next()
}

module.exports = PeliculaController