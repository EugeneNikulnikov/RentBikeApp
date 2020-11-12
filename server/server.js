const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const cors = require('cors');
const jsonParser = express.json();

const createBike = require("./controllers/bike/create");
const getBikes = require("./controllers/bike/read");
const deleteBike = require("./controllers/bike/delete");
const rentBike = require("./controllers/bike/update");

app.use(jsonParser)
    .use(cors());

mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(process.env.PORT))
    .catch(err => console.log(err));

app.get('/bike/get', getBikes)
    .post('/bike/delete', deleteBike)
    .post('/bike/rent', rentBike)
    .post('/bike/create', createBike);
