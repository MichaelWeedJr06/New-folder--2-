//MVC Architecture
//Model - View - Controller
//Model - Represents the data and business logic (interactions with a database)
//Controller - Handles logic for processing requests and orchestrating flow
//View - is responsible for formatting the output - For this REST api, that will be json.
const settings = require("./config/settings");
const PORT = settings.PORT;
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");
const path = require("path");
const app = express();

const gameRoutes = require("./routes/api/gameRoutes");
const platformRoutes = require("./routes/api/platformsRoutes");
const screenshotRoutes = require("./routes/api/screenshotsRoutes");
const gameModeRoutes = require("./routes/api/gamemodeRoutes");
const genreRoutes = require("./routes/api/genreRoutes");
const characterRoutes = require("./routes/api/characterRoutes");
const websitesRoutes = require("./routes/api/websitesRoutes");
const similarRoutes = require("./routes/api/similarRoutes");
const coverRoutes = require("./routes/api/coverRoutes");

//const platformsRoutes = require("./routes/platformsRoutes")

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/gamemodes", gameModeRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/websites", websitesRoutes);
app.use("/api/similar", similarRoutes);
app.use("/api/covers", coverRoutes);

//app.use('/api/platforms', platformsRoutes);

//view handling
const homeRoute = require("./routes/views/homeRoutes");
const { config } = require("process");
app.use("/", homeRoute);

const gameRoute = require("./routes/views/gameRoutes");
app.use("/games", gameRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views")); //specify views directory

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Try going to ${settings.ROOT}:${PORT}/`);
  console.log(`Try going to ${settings.ROOT}:${PORT}/api/games`);
  console.log(`Swagger docs available at ${settings.ROOT}:${PORT}/api-docs`);
});
