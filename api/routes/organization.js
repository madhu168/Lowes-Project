const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'org details fetched'
    });
});

router.post('/', (req, res, next) => {
    const org = {
        orgmem: req.body.orgmem
    };
    res.status(201).json({
        message: 'new org created',
        createdOrg: org
    });
});

router.get('/:orgId', (req, res, next) => {
    const id = req.params.orgId;
        res.status(200).json({
            message : 'Particular org details',
            id : id
        });
});

router.patch('/:orgId',(req, res, next) => {
    res.status(200).json({
        message : 'org is updated'
    });
});

router.delete('/:orgId',(req, res, next) => {
    res.status(200).json({
        message: 'org is deleted'
    });
});

module.exports = router;