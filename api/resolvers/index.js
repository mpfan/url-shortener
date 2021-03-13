const validUrl = require("valid-url");
const nanoid = require("nanoid");
const Url = require("../model/Url");

const resolvers = {
  urls: async () => {
    try {
      const urls = await Url.find();

      return urls.map((url) => ({
        ...url._doc,
        createdAt: new Date(url._doc.createdAt).toISOString(),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  urlByShortUrl: async ({ shortUrl }) => {
    try {
      const url = await Url.findOne({ shortUrl: shortUrl });

      return {
        ...url._doc,
        createdAt: new Date(url._doc.createdAt).toISOString(),
      };
    } catch (error) {
      console.log(error);
    }
  },
  createUrl: async ({ url }) => {
    try {
      const { longUrl } = url;

      const baseUrl = process.env.BASE_URL;

      const id = nanoid.nanoid();

      if (!validUrl.isUri(longUrl)) {
        throw Error("Invalid url");
      }

      let currentUrl = await Url.findOne({ longUrl });

      if (currentUrl) {
        throw Error("Url already exists");
      }

      const shortUrl = `${baseUrl}/${id}`;

      currentUrl = new Url({
        longUrl,
        shortUrl,
        id,
      });

      await currentUrl.save();

      return {
        ...currentUrl._doc,
        createdAt: new Date(currentUrl._doc.createdAt).toISOString(),
      };
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = resolvers;
