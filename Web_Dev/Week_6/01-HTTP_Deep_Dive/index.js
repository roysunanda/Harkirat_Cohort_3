// import path from "path";
import express from "express";
import crypto from "node:crypto";

const app = express();
const PORT = 3000;

const users = [{ username: "gopal", password: "54ndy" }];
app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  // console.log(users);

  res.json({
    message: `✅ You are signed up`,
    users,
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = crypto.randomBytes(16).toString("hex");

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });

  // console.log(user);

  if (!user) {
    return res.json({ msg: "⚠️ Invalid username or password!!" });
  }
  res.json({ message: "✅ you are signed in.", token });
});

app.get("/users", (req, res) => {
  const all_users = users.filter((user) => {
    return true;
  });

  res.json({ data: all_users });
});

app.listen(PORT, () => {
  console.log(`\nserver is listening on port: ${PORT}`);
});
