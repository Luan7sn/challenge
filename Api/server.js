const express = require("express");
const routes = require("./src/routes/index");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});