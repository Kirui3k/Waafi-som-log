const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.post("/login", (req, res) => {
  const { phone, pin } = req.body;

  res.send(`Phone: ${phone}, PIN: ${pin}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
