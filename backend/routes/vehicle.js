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
        regNo: req.body.regNo,
        description: req.body.description,
        brandName: req.body.brandName
    })
    try {
        const response = await vehicles.save();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})

router.put('/', async (req, res) => {
    try {
        const vehicles = await vehicle.find();
        for (const c of vehicles) {
            if (req.body.regNo === c.regNo) {
                const vehicle = await vehicle.findById(c._id)
                vehicle.regNo = req.body.regNo;
                vehicle.description = req.body.description;
                vehicle.brandName = req.body.brandName;
                const response = await vehicle.save();
                res.send(response)
            }
        }

    } catch (e) {
        res.send('error :' + e)
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