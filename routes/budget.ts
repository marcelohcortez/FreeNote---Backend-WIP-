import express from 'express';
const router = express.Router();

// require auth for all budget routes
//router.use(requireAuth)

//GET all budgets
router.get('/', getBudgets);

//GET single budget
router.get('/:id', getBudget);

//POST new budget
router.post('/', createBudget);

//DELETE budget
router.delete('/:id', deleteBudget);

//UPDATE budget
router.patch('/:id', updateBudget);

module.exports = router