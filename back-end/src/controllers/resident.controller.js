const express = require("express");

const Resident = require("../models/resident.model");

const router = express.Router();

//-----------post--------------

router.post("", async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    res.status(200).send(resident);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//-----------get------------------
router.get("", async (req, res) => {
  try {
    const resident = await Resident.find().lean().exec();
    res.status(200).send(resident);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;








