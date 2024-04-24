const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();

app.get("/fake/users/:id", (req, res) => {
  const num = req.params.id;
  let users = [];
  for (let i = 0; i < num; i++) {
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      contact: faker.phone.number(),
    });
  }
  res.status(200).json(users);
});
app.listen(3355);
