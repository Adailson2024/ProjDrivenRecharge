CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  "customerId" INT NOT NULL,
  number VARCHAR(20) NOT NULL UNIQUE,
  "carrierId" INT REFERENCES carriers(id)
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  "phoneId" INT REFERENCES phones(id),
  value INT NOT NULL, -- Valor em centavos (R$ 10,00 = 1000)
  "createdAt" TIMESTAMP DEFAULT NOW()
);