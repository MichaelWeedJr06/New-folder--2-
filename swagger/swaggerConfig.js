const swaggerJSdoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node.js Express IGDB Games REST API",
            version: "1.0.0",
        },
    },
    apis: ["./routes/api/*.js"], //points to the api route files
};
const swaggerSpec = swaggerJSdoc(options);

module.exports = swaggerSpec;
