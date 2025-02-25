const express = require("express");
const app = express();

app.use(express.json());

app.post("/calcular", (req, res) => {
  const { sbt, ddc } = req.body;
  if (typeof sbt !== "number" || typeof ddc !== "number") {
    return res.status(400).json({ error: "Los valores deben ser números." });
  }
  const resultado = (sbt - ddc) * 0.13;
  res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
