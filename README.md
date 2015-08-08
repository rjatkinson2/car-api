# Car API

## Setup

To run the server, pull down the repo and run:

> npm install

### Endpoints

| Endpoint | Description |
| ---- | --------------- |
| GET /cars/ | Get list of cars ordered by comma separated sort parameters "cars?sort=year,color,odometer" |
| GET /range/ | Get cars by price range utilzing query string "range?start=10000&end=11000" |
