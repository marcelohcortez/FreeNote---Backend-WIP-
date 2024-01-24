import express from 'express';
const router = express.Router();

// require auth for all client routes
//router.use(requireAuth)

//GET all clients
router.get('/', getClients);

//GET single client
router.get('/:id', getClient);

//POST new client
router.post('/', createClient);

//DELETE client
router.delete('/:id', deleteClient);

//UPDATE client
router.patch('/:id', updateClient);

module.exports = router