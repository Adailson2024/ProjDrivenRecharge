import db from "../database/database";
import { PhoneInput } from "../protocols";

export async function findByNumber(number: string) {
  const result = await db.query(`SELECT * FROM phones WHERE number = $1`, [number]);
  return result.rows[0];
}

export async function findByCpf(cpf: string) {
  const result = await db.query(`SELECT * FROM phones WHERE cpf = $1`, [cpf]);
  return result.rows;
}

export async function insertPhone(data: PhoneInput) {
  const result = await db.query(
    `INSERT INTO phones (number, "carrierId", name, description, cpf)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [data.number, data.carrierId, data.name, data.description, data.cpf]
  );
  return result.rows[0];
}

export async function findFullPhoneDataByCpf(cpf: string) {
  const result = await db.query(`
    SELECT p.*, c.name as "carrierName", c.code as "carrierCode"
    FROM phones p
    JOIN carriers c ON p."carrierId" = c.id
    WHERE p.cpf = $1
  `, [cpf]);
  return result.rows;
}