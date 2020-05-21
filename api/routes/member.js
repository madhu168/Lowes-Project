const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
            messasge : 'all members were fetched'
    });
});

router.post('/',(req, res, next) => {
    const mem = {
        fname: req.body.fname,
        lname : req.body.lname
    };
    res.status(201).json({
            messasge : 'new member was created',
            cretedMem: mem
    });
});

router.get('/:memberId',(req, res, next) => {
    res.status(200).json({
        message : 'Member details',
        memberId : req.params.memberId
    });
});

router.delete('/:memberId',(req, res, next) => {
    res.status(200).json({
        message : 'member deleted',
        memberId : req.params.memberId
    });
});
module.exports = router;