const Bike = require('../../models/bike');

module.exports = async (req, res) => {
    const {name, price, type} = req.body;
    try {
        if(!name || !price || !type){
            return(new Error('Invalid data'));
        }
        const newBike = await new Bike({name, price, type, rented: false});
        newBike.save();
        res.send(newBike);
    }
    catch(e){
        res.send(e);
    }
};