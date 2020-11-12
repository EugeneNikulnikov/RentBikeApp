const Bike = require('../../models/bike');

module.exports = async (req, res) => {
    try{
        const bikes = await Bike.find();
        res.send(bikes);
    }
    catch (e) {
        res.send(e);
    }
};