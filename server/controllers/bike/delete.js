const Bike = require('../../models/bike');

module.exports = async (req, res) => {
    let bike = await Bike.findOne({_id: req.body.id});
    if(bike && !bike.rented) {
        await Bike.deleteOne({_id: req.body.id});
        res.send(bike);
    }
    else{
        res.status(403).send();
    }
};