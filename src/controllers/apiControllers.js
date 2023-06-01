import { pool } from "../db.js"

export const getUen = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM UEN")
    res.json(rows)
}

export const getEmpleados = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Empleado")
    res.json(rows)
}

export const getEquipo = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Equipo")
    res.json(rows)
}

export const getEstadoEmpleado = async (req,res) => {   
    const [rows] = await pool.query("SELECT * FROM Estado_Empleado")
    res.json(rows)
}

export const getEstadoProyecto = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Estado_Proyecto")
    res.json(rows)
}

export const getPlanificado = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Planificado")
    res.json(rows)
}

export const getPosicion = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Posicion")
    res.json(rows)
}

export const getProyectos = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Proyectos")
    res.json(rows)
}

export const getTipoProyecto = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Tipo_Proyecto")
    res.json(rows)
}

export const getUenEmpleado = async (req,res) => {
    const [rows] = await pool.query("SELECT * FROM Uen_Empleados")
    res.json(rows)
}

