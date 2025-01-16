//MVC Architecture
//Model - View - Controller
//Model - Represents the data and business logic (interactions with a database)
//Controller - Handles logic for processing requests and orchestrating flow
//View - is responsible for formatting the output - For this REST api, that will be json.
const PORT = 3000;
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");
const app = express();

const gameRoutes = require("./routes/gameRoutes");
const platformRoutes = require("./routes/platformsRoutes");
const screenshotRoutes = require("./routes/screenshotsRoutes");
const gameModeRoutes = require("./routes/gamemodeRoutes");
const genreRoutes = require("./routes/genreRoutes");
const characterRoutes = require("./routes/characterRoutes");
const websitesRoutes = require("./routes/websitesRoutes");
const similarRoutes = require("./routes/similarRoutes");
//const platformsRoutes = require("./routes/platformsRoutes")

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/gamemodes", gameModeRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/websites", websitesRoutes);
app.use("/api/similar", similarRoutes);
//app.use('/api/platforms', platformsRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Try going to http://localhost:${PORT}/api/games`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
