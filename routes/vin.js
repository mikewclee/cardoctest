const router = require("express").Router();
const Vin = require("../models/vin");

router.post("/api/vin", (req, res) => {
  console.log('API VIN POST ' + req.body);
  // console.log(req.body.make);
  Vin.create(req.body)
    .then(dbVin => {
      res.json(dbVin);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/vin", (req, res) => {
  Vin.find(req.body)
    .then(dbVin => {
      res.json(dbVin);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/api/vin/:id", (req, res) => {
  Vin.remove(
    {
      _id: (req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;