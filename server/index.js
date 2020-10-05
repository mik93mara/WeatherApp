const express = require("express");
const cors = require("cors");
const graphql = require("./graphql");

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === "local") {
    app.use(cors());
}

app.use("/graphql", graphql);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
