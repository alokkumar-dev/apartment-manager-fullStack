const express = require("express");

const Flat = require("../models/flat.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    return res.status(200).send(flat);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const flat = await Flat.find()
      .populate({ path: "residentId", select: ["name", "gender", "age"] })
      .lean()
      .exec();
    return res.status(200).send(flat);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id)
      //   .populate("FlatId")
      .lean()
      .exec();
    return res.status(200).send(flat);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const flat = await Flat.findByIdAndDelete(req.params.id);
    return res.status(200).send(flat);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;