const express = require("express");
const Url = require("../model/Url");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const url = await Url.findOne({ id: req.params.id });

    if (!url) {
      return res.status(404).json("The short url with the id does not exist");
    }

    return res.redirect(url.longUrl);
  } catch (error) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = router;