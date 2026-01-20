CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  number VARCHAR(20) NOT NULL UNIQUE,
  "carrierId" INT NOT NULL REFERENCES carriers(id),
  "name" VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  "cpf" VARCHAR(11) NOT NULL,
  "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  "phoneId" INT REFERENCES phones(id),
  value INT NOT NULL, -- Valor em centavos (R$ 10,00 = 1000)
  "createdAt" TIMESTAMP DEFAULT NOW()
);