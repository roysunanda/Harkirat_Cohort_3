import express from "express";

const app = express();
const PORT = 8080;

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});
app.get("/multiply", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a * b,
  });
});
app.get("/divide", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a / b,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at Port: ${PORT}`);
});
