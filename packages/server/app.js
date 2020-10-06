const express = require("express");
const cors = require("cors");
const graphql = require("./graphql");

const app = express();

if (process.env.NODE_ENV === "local") {
    app.use(cors());
}

app.use("/graphql", graphql);

module.exports = app;
