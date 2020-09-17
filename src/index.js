import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import productoRoutes from  './routes/producto.routes';

// settings

import './database';
const app = express();

// Nos creamos un puerto
app.set("port", process.env.PORT || 4002);

app.listen(app.get('port'), () => {
    console.log(path.join(__dirname, '../public'))
    console.log('Estoy en  el puerto' + app.get('port'))
})

// Middleware:son funciones que quiero que se ejecute antes que lleguen a la ruta
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());  //permite entender el formato json
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')))

// crear una ruta 
app.use('/api/cafeteria' , productoRoutes);
