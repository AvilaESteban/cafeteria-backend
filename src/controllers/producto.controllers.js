import Producto from '../models/producto'

const cafeteriaCtrl = { };

cafeteriaCtrl.getPrueba = (req,res) => {
    res.send("Prueba desde el controlador");
}

cafeteriaCtrl.crearProducto = async (req, res) => {
    console.log(req.body)
    try {
        const {nombreProducto,precioProducto,categoria} = req.body;
        // Crear un objeto para guardar en la base de dato
        const productoNuevo = new Producto({
            nombreProducto,
            precioProducto,
            categoria
        })
        // Guardar el productoNuevo en  la base de dato
        await productoNuevo.save();
        // Enviar respuesta al frontend
        res.status(201).json({
            mensaje: "Producto agregado a la base de datos"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error"
        })
    }
}

cafeteriaCtrl.listarProductos = async (req,res) => {
    try {
        // Obtener un  arreglo con todos los productos
        const arregloProductos = await Producto.find();
            res.status(200).json(arregloProductos)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje : "Ocurrio un error"
        })
    }
}

cafeteriaCtrl.eliminarProducto = async (req,res) => {
    try {
        console.log(req.params.id)
        // Para eliminar necesito el id de lo que quiero eliminar
        await Producto.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje : "Producto eliminado exitosamente"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje :  "Ocurrio un error"
        })
    }
}


cafeteriaCtrl.actualizarProducto = async (req,res) => {
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje : "Producto modificado "
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje : "Ocurrio un error"
        })
    }
}



export default cafeteriaCtrl;