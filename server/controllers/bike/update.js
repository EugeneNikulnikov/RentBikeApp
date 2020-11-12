const Bike = require('../../models/bike');

module.exports = async (req, res) => {
    const bike = await Bike.findOne({_id: req.body.id});
    if(bike) {
        let newBike = await Bike.findOneAndUpdate({_id: req.body.id},
                                                    {$set: {rented: !bike.rented}},
                                                    {new: true});
        res.send(newBike);
    }
    else{
        res.sendStatus(404);
    }
};

