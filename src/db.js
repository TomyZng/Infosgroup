import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: "158.101.23.243",
    user: "usrNPDTest",
    password: "8paxVH%q5ckFGc$",
    port: 3306,
    database: "NPDT"
})

