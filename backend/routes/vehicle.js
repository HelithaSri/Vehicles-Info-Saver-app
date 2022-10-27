const express = require('express');
const router = express.Router();

const vehicle = require('../model/vehicle.model');

router.get('/', async (req, res) => {
    try {
        const response = await vehicle.find();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})

router.post('/', async (req, res) => {
    const vehicles = new vehicle({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description
    })
    console.log(vehicles)
    try {
        const response = await vehicles.save();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})

router.put('/:id', async (req, res) => {
    console.log("server : ",req.params.id);
    try {
        const vehicles = await vehicle.findById(req.params.id)
        vehicles.name= req.body.name,
        vehicles.location= req.body.location,
        vehicles.description= req.body.description

        const response = await vehicles.save()
        res.json(response)

    } catch (err) {
        res.send('Err : ' + err)
    }
})

router.delete('/', async (req, res) => {
    try {
        const vehicles = await vehicle.find();
        for (const c of vehicles) {
            if (req.body.regNo === c.regNo) {
                const dlt = await vehicle.findById(c._id);

                const response = await dlt.remove();
                res.send(response)
            }
        }
    } catch (e) {
        res.send('error :' + e)
    }
})

module.exports = router;