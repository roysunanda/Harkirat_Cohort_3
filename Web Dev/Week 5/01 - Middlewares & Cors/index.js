import express from "express";

const app = express();
const PORT = 8080;

// app.use(express.static("public"));

app.get("/", (req, res) => {
  // console.log(`This is Homepage.`);
  res.send(`This is Homepage.`);
});

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

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.listen(PORT, () => {
  console.log(`\n\nServer is listening at Port: ${PORT}`);
});
