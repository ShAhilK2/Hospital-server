const { json } = require("body-parser");
const express = require("express");
const app = express();
app.listen(3000);
var users = [
  {
    name: "Shahil Kataria",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const shahilKidney = users[0].kidneys;
  const numberOfKidney = shahilKidney.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < shahilKidney.length; i++) {
    if (shahilKidney[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidney - numberOfHealthyKidneys;
  res.json({
    numberOfKidney,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.use(express.json());

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  // Accessing the kidneys array of the first user and pushing a new kidney object
  users[0].kidneys.push({ healthy: isHealthy });

  res.json({
    msg: "Done",
  });
});
app.delete("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {
      const newKidneys = [];
      for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
          newKidneys.push({
            healthy: true,
          });
        }
      }
      users[0].kidneys = newKidneys;
      res.json({ msg: "done" });
    } else {
      res.status(411).json({
        msg: "you have no bad kidneys"
      });
    }
  });
  

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {}
  res.json({});
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
}
    return atleastOneUnhealthyKidney;
  
}
