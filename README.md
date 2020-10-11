# Weather App

### About App

This is a web app that displays The weather forecast for the next 5 days. The data source of the app is https://openweathermap.org/api.

The app expects the user to provide a (city), (city,state) or (city,country) to lookup and display current weather info and the forecast for the next 9 days.

### Installation

> npm i

> npm run bootstrap

### Running the App

> npm run start

### Clean/Install Package Dependencies

> npm run clean

> npm run bootstrap

### Testing Server/Client

> npm run test:server

> npm run test:client

### loading the App

> [App Link](http://localhost:3000)

### Graphiql

> [GraphQL Link](<http://localhost:8080/graphql?operationName=getFutureForecast&query=query%20getFutureForecast(%24lat%3A%20Float%2C%20%24lon%3A%20Float%2C%20%24unit%3A%20String)%20%7B%0A%20%20forecast(lat%3A%20%24lat%2C%20lon%3A%20%24lon%2C%20unit%3A%20%24unit)%20%7B%0A%20%20%20%20id%0A%20%20%20%20dt%0A%20%20%20%20main%0A%20%20%20%20isCurrent%0A%20%20%20%20description%0A%20%20%20%20icon%0A%20%20%20%20tempNow%0A%20%20%20%20feelsLikeNow%0A%20%20%20%20tempDay%0A%20%20%20%20tempNight%0A%20%20%20%20feelsLikeDay%0A%20%20%20%20feelsLikeNight%0A%20%20%20%20feelsLikeNow%0A%20%20%20%20windSpeed%0A%20%20%20%20humidity%0A%20%20%7D%0A%7D%0A%0Aquery%20getLatLong(%24city%3A%20String!%2C%20%24state%3A%20String)%20%7B%0A%20%20%20%20coordinates(city%3A%20%24city%2C%20state%3A%20%24state)%20%7B%0A%20%20%20%20%20%20%20%20lat%0A%20%20%20%20%20%20%20%20lon%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%7D%0A%7D%0A&variables=%7B%0A%20%20%22lat%22%3A%2041.878113%2C%0A%20%20%22lon%22%3A%20-87.629799%2C%0A%20%20%22unit%22%3A%20%22metric%22%2C%0A%20%20%22city%22%3A%20%22chicago%22%0A%7D>)
