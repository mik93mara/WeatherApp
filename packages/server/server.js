const app = require("./app");

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
    app.emit("appStarted");
});

module.exports = server;
