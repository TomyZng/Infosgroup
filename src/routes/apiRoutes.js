import { Router } from "express";
import { getEmpleados, getEquipo, getEstadoEmpleado, getEstadoProyecto, getPlanificado, getPosicion, getProyectos, getTipoProyecto, getUen, getUenEmpleado } from "../controllers/apiControllers.js";

const router = Router()

router.get('/uen', getUen) 
router.get('/empleado', getEmpleados) 
router.get('/equipo', getEquipo) 
router.get('/estadoE', getEstadoEmpleado) 
router.get('/estadoP', getEstadoProyecto) 
router.get('/plan', getPlanificado) 
router.get('/posicion', getPosicion) 
router.get('/proyectos', getProyectos) 
router.get('/tipoPro', getTipoProyecto) 
router.get('/uenE', getUenEmpleado) 

export default router