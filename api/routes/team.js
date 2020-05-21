const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
            messasge : 'all teams were fetched'
    });
});

router.post('/',(req, res, next) => {
    const tm = {
        tmname: req.body.tmname,
        tmmem : req.body.tmmem
    };
    res.status(201).json({
            messasge : 'new team was created',
            createdTm : tm
    });
});

router.get('/:teamId',(req, res, next) => {
    res.status(200).json({
        message : 'team details',
        orderId : req.params.teamId
    });
});

router.delete('/:teamId',(req, res, next) => {
    res.status(200).json({
        message : 'team deleted',
        orderId : req.params.teamId
    });
});
module.exports = router;