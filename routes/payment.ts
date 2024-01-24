import express from 'express';
const router = express.Router();

// require auth for all payment routes
//router.use(requireAuth)

//GET all payments
router.get('/', getPayments);

//GET single payment
router.get('/:id', getPayment);

//POST new payment
router.post('/', createPayment);

//DELETE payment
router.delete('/:id', deletePayment);

//UPDATE payment
router.patch('/:id', updatePayment);

module.exports = router