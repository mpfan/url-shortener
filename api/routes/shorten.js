const express = require("express");
const validUrl = require("valid-url");
const nanoid = require("nanoid");
const Url = require("../model/Url");

const router = express.Router();

// Post to /api/shorten
router.post("/shorten", async (req, res) => {
  console.log(req);
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  const id = nanoid.nanoid();

  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json("Invalid url");
  }

  try {
    let url = await Url.findOne({ longUrl });

    if (!url) {
      const shortUrl = `${baseUrl}/${id}`;

      url = new Url({
        longUrl,
        shortUrl,
        id,
      });

      await url.save();
    }

    return res.json(url);
  } catch (error) {
    console.log(err);
    return res.status(500).json("Server error");
  }
});

module.exports = router;
