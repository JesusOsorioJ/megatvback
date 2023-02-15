const Router = require('express');

const {
    handlerAllClients,
    handlerCreateClient,
} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients);
router.get('/:id', handlerClientById);
router.post('/', handlerCreateClient);
router.patch('/:id', hasRole(['admin', 'client']), isSelf(), handlerUpdateClient);

module.exports = router;