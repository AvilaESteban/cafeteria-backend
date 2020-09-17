import {Router} from 'express';
import cafeteriaController from '../controllers/producto.controllers';

const router = Router();  //instanciamos
const {getPrueba, crearProducto, listarProductos, eliminarProducto, actualizarProducto}  = cafeteriaController

// Crear las rutas
router.route('/').get(listarProductos).post(crearProducto)
router.route('/:id').delete(eliminarProducto).put( actualizarProducto)


export default router;
