
let express = require('express');
let router = express.Router();
 
const usuarios = require('../controllers/usuario.controller.js');
const mascotas = require('../controllers/mascota.controller.js');
const habitaciones = require('../controllers/habitacion.controller.js');
const servicios = require('../controllers/servicio.controller.js');


router.post('/api/usuarios/create', usuarios.create);
router.get('/api/usuarios/all', usuarios.retrieveAllUsuarios);
router.get('/api/usuarios/onebyid/:id', usuarios.getUsuarioById);
router.get('/api/usuarios/filteringbyrole', usuarios.filteringByRole);
router.get('/api/usuarios/pagination', usuarios.pagination);
router.get('/api/usuarios/pagefiltersort', usuarios.pagingfilteringsorting);
router.put('/api/usuarios/update/:id', usuarios.updateById);
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);

router.post('/api/mascotas/create', mascotas.create);
router.get('/api/mascotas/all', mascotas.retrieveAllMascotas);
router.get('/api/mascotas/onebyid/:id', mascotas.getMascotaById);
router.get('/api/mascotas/filteringbyedad', mascotas.filteringByEdad);
router.get('/api/mascotas/pagination', mascotas.pagination);
router.get('/api/mascotas/pagefiltersort', mascotas.pagingfilteringsorting);
router.put('/api/mascotas/update/:id', mascotas.updateById);
router.delete('/api/mascotas/delete/:id', mascotas.deleteById);

router.post('/api/habitaciones/create', habitaciones.create);
router.get('/api/habitaciones/all', habitaciones.retrieveAllHabitaciones);
router.get('/api/habitaciones/onebyid/:id', habitaciones.getHabitacionById);
router.get('/api/habitaciones/filteringbycapacidad', habitaciones.filteringByCapacidad);
router.get('/api/habitaciones/pagination', habitaciones.pagination);
router.get('/api/habitaciones/pagefiltersort', habitaciones.pagingfilteringsorting);
router.put('/api/habitaciones/update/:id', habitaciones.updateById);
router.delete('/api/habitaciones/delete/:id', habitaciones.deleteById);

router.post('/api/servicios/create', servicios.create);
router.get('/api/servicios/all', servicios.retrieveAllServicios);
router.get('/api/servicios/onebyid/:id', servicios.getServicioById);
router.get('/api/servicios/filteringbyprecio', servicios.filteringByPrecio);
router.get('/api/servicios/pagination', servicios.pagination);
router.get('/api/servicios/pagefiltersort', servicios.pagingfilteringsorting);
router.put('/api/servicios/update/:id', servicios.updateById);
router.delete('/api/servicios/delete/:id', servicios.deleteById);


module.exports = router;