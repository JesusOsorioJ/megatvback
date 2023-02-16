const Router = require('express');

const {
    handlerCreateClient,
    handlerAllClients
} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients);
router.post('/', handlerCreateClient);

module.exports = router;