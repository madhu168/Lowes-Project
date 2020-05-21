const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Event = require('../models/event');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Event details fetched'
    });
});

router.post('/', (req, res, next) => {
    const eventt = {
        name: req.body.name,
        nooflikes : req.body.nooflikes
    };
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        likes: req.body.price
    });
    event.save().then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'new event created',
        createdEvent: eventt
    });
});

router.get('/:eventId', (req, res, next) => {
    const id = req.params.eventId;
        res.status(200).json({
            message : 'Particular event details',
            id : id
        });
});

router.patch('/:eventId',(req, res, next) => {
    res.status(200).json({
        message : 'Event is updated'
    });
});

router.delete('/:eventId',(req, res, next) => {
    res.status(200).json({
        message: 'event is deleted'
    });
});

module.exports = router;