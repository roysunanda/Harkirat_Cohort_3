import express from "express";

const app = express();
const PORT = 8080;

// app.use(express.urlencoded({ extended: true }));

const criteria = (req, res, next) => {
  const age = req.query.age;
  if (age >= 30) {
    next();
  } else {
    res.json({ msg: `Sorry you not allowed!!` });
  }
};

app.use(criteria);

app.get("/remote", (req, res) => {
  res.json({ msg: `You are eligible for remote job.` });
});

app.get("/freelance", (req, res) => {
  res.json({ msg: `You are eligible for freelance job.` });
});

app.get("/", (req, res) => {
  res.json({ msg: `This is Homepage.` });
});

app.listen(PORT, () => {
  console.log(`\n\nServer is running on port: ${PORT}`);
});
