import db  from "../database/database";
import { SummaryResponse } from "../protocols";

export async function getFullSummaryByCpf(cpf: string): Promise<SummaryResponse> {
  const result = await db.query(`
    SELECT 
      p.cpf AS document,
      json_agg(
        json_build_object(
          'id', p.id,
          'number', p.number,
          'name', p.name,
          'description', p.description,
          'carrier', json_build_object(
            'id', c.id,
            'name', c.name,
            'code', c.code
          ),
          'recharges', (
            SELECT COALESCE(json_agg(r.*), '[]'::json)
            FROM recharges r
            WHERE r."phoneId" = p.id
          )
        )
      ) AS phones
    FROM phones p
    JOIN carriers c ON p."carrierId" = c.id
    WHERE p.cpf = $1
    GROUP BY p.cpf;
  `, [cpf]);

  
  if (result.rowCount === 0) {
    return { document: cpf, phones: [] };
  }

  return result.rows[0];
}