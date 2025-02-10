const axios = require("axios");
const settings = require("../../config/settings");
const { end } = require("../../config/db");
async function renderHomePage(req, res) {
  const response = await axios.get(
    `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`,
    { params: req.query }
  );
  data = response.data;

  const cover = await endPointWithGameID("covers", req.params.id);
  data.cover = cover[0] ? cover[0].url : "";

  data.genres = await endPointWithGameID("genres", req.params.id);

  data.gamemodes = await endPointWithGameID("gamemodes", req.params.id);

  data.platforms = await endPointWithGameID("platforms", req.params.id);

  data.characters = await endPointWithGameID("characters", req.params.id);

  data.websites = await endPointWithGameID("websites", req.params.id);

  data.screenshots = await endPointWithGameID("screenshots", req.params.id);

  data.similars = await endPointWithGameID("similar", req.params.id);

  res.render("game", {
    title: "Games!",
    gameData: data,
  });
}
async function endPointWithGameID(endpoint, gameid) {
  const values = await axios.get(
    `${settings.ROOT}:${settings.PORT}/api/${endpoint}`,
    { params: { gameid: gameid } }
  );
  return values.data;
}

module.exports = { renderHomePage };
