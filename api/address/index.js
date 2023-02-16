const Router = require('express');

const {
    handlerAllAddress,
} = require('./address.controller');

const router = Router();

router.get('/', handlerAllAddress);

module.exports = router;