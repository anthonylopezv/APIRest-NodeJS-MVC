'use strict'

var PeliculaController = require('../controllers/pelicula-controller');
var express = require('express');
var router = express.Router();

router.get('/',PeliculaController.getAll)

router.get('/agregar',PeliculaController.addForm)

//router.post('/',PeliculaController.insert)
router.post('/',PeliculaController.save)

router.get('/editar/:pelicula_id',PeliculaController.getOne)

//router.post('/actualizar/:pelicula_id',PeliculaController.update)
//router.put('/actualizar/:pelicula_id',PeliculaController.update)
router.put('/actualizar/:pelicula_id',PeliculaController.save)

//router.post('/eliminar/:pelicula_id', PeliculaController.delete)
router.delete('/eliminar/:pelicula_id', PeliculaController.delete)  

router.use(PeliculaController.error404)

module.exports = router;
