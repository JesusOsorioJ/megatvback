const Router = require('express');

const {
    handlerAllAddress, handlerAllAddressBy
} = require('./address.controller');

const router = Router();

router.get('/', handlerAllAddress);
router.get('/:id', handlerAllAddressBy);

module.exports = router;