const protocol = "https";
const host = "api.openweathermap.org";
const path = `${protocol}://${host}/data/2.5`;
const key = "30f2165eea5ef457cf23757b802c22b5";

const oneCall = `${path}/onecall?appid=${key}&exclude=minutely,hourly`;
const weather = `${path}/weather?appid=${key}`;

module.exports = {
    oneCall,
    weather,
};
