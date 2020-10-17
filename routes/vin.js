const router = require("express").Router();
const Vin = require("../models/vin");
// const db = require("../models/");

// Matches with "/api/vin"
router.post("/api/vin", (req, res) => {
  // db.Vin.create(body)
  Vin.create(req.body)
    .then(dbVin => {
      res.json(dbVin);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;