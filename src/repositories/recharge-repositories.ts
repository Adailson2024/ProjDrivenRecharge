import db from "../database/database";
import { Recharge, RechargeInput, Phone } from "../protocols";
import { QueryResult } from "pg";

export async function findPhoneById(id: number): Promise<Phone | null> {
  const result: QueryResult<Phone> = await db.query(
    `SELECT * FROM phones WHERE id = $1;`,
    [id]
  );

  return result.rows[0] || null;
}

export async function insertRecharge(data: RechargeInput): Promise<Recharge> {
  const result: QueryResult<Recharge> = await db.query(
    `INSERT INTO recharges ("phoneId", value) 
     VALUES ($1, $2) 
     RETURNING *;`,
    [data.phoneId, data.value]
  );

  return result.rows[0];
}

export async function getRechargesByPhoneNumber(number: string): Promise<Recharge[]> {
  const result: QueryResult<Recharge> = await db.query(
    `SELECT r.* FROM recharges r
     JOIN phones p ON r."phoneId" = p.id
     WHERE p.number = $1;`,
    [number]
  );

  return result.rows;
}

export async function getRechargesByPhoneId(phoneId: number) {
  const result = await db.query(`SELECT * FROM recharges WHERE "phoneId" = $1`, [phoneId]);
  return result.rows;
}