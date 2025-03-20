//dependencias
import express from "express";
import cors from "cors";
//instancia de app
const app = express(); //se deja solo por defecto y sabe que es app la raiz
const PORT = 8080;
//conexion a dbs
import mongoose from "./database.js";
// importacion de rutas
import { routesUsers } from "./src/routes/routes.users.js";
import { routesCreators } from "./src/routes/routes.creators.js";
import { routesMerch } from "./src/routes/routes.merch.js";
import { routesSponsors } from "./src/routes/routes.sponsors.js";
import { routesProduction } from "./src/routes/routes.production.js";
import { routesIntitutions } from "./src/routes/routes.institutions.js";
import { routesCourses } from "./src/routes/routes.courses.js";
//import { routesHome } from "./src/routes/routes.home.js";

//middlewares
app.use(cors()); //no tener problemas con cors
app.use(express.json()); //poder recibir datos json
app.use(express.urlencoded({ extended: true })); //poder recibir datos varios

//uso de rutas
app.use("/api/users", routesUsers);
app.use("/api/creators", routesCreators);
app.use("/api/merch", routesMerch);
app.use("/api/sponsor", routesSponsors);
app.use("/api/production", routesProduction);
app.use("/api/institutions", routesIntitutions);
app.use("/api/courses", routesCourses);
//app.use(routesHome)

//escucha del servidor
app.listen(5000, () => {
  console.log(`escuchando en el puerto: http://localhost:${PORT}`);
});
