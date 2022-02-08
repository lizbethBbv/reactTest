const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
  // Se prueba un query antes para ver si funciona el pool
  pool.query("SELECT 1 + 1 AS solution").then(() => {
    console.log("Base de datos inicializada correctamente");
  });
});

app.get("/", function (req, res) {
  res.send("Hello from backend");
});

let queryComplete =
  'SELECT concat(CLIENT.first_name, CLIENT.last_name) AS fullName, CLIENT.email, COUNT(suscrip.client_id) AS SuscQuanty, 0 AS totalPagar, 0 AS fechaUltimo, if (CLIENT.is_quincenal = 0, "quincenal", "mensual") AS periodicidad, 0 AS all_platf, 0 AS pagoEsperado FROM CLIENT AS CLIENT INNER JOIN payments_received AS pays ON pays.client_id = client.id INNER JOIN suscriptions_users as suscrip ON suscrip.client_id = CLIENT.id INNER JOIN platforms AS platf ON platf.id = suscrip.platform_id GROUP BY suscrip.client_id';
app.get("/all", async (req, res) => {
  const rows = await pool.query(queryComplete);
  res.json({
    code: 0,
    msg: "Solicitud exitosa",
    data: rows,
  });
});
