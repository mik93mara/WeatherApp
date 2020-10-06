const supertest = require("supertest");
const app = require("../app");
const server = require("../server");

const request = supertest(app);

afterAll((done) => {
    server.close(done);
});

beforeAll(async (done) => {
    app.on("appStarted", async () => {
        done();
    });
});

describe("Testing GraphQL APIs", () => {
    it("fetch coordinates", async (done) => {
        const latLongQuery = `query getLatLong($city: String!, $state: String) {
        coordinates(city: $city, state: $state) {
            lat
            lon
            city
        }
    }`;

        request
            .post("/graphql")
            .send({
                query: latLongQuery,
                variables: {
                    city: "chicago",
                },
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body).toBeInstanceOf(Object);
                expect(res.body.data.coordinates.lat).not.toBe(undefined);
                done();
            });
    });
    it("fetch forecast", async (done) => {
        const forecastQuery = `query getFutureForecast($lat: Float!, $lon: Float!, $unit: String) {
            forecast(lat: $lat, lon: $lon, unit: $unit) {
                id
                dt
                main
                isCurrent
                description
                icon
                tempNow
                feelsLikeNow
                tempDay
                tempNight
                feelsLikeDay
                feelsLikeNight
                windSpeed
                humidity
            }
        }`;

        request
            .post("/graphql")
            .send({
                query: forecastQuery,
                variables: {
                    lat: 41.878113,
                    lon: -87.629799,
                },
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body).toBeInstanceOf(Object);
                expect(res.body.data.forecast.length).not.toBe(0);
                done();
            });
    });
});
