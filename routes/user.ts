import express from 'express';
const router = express.Router();

// require auth for all user routes
//router.use(requireAuth)

//GET all users
router.get('/', getUsers);

//GET single user
router.get('/:id', getUser);

//POST new user
router.post('/', createUser);

//DELETE user
router.delete('/:id', deleteUser);

//UPDATE user
router.patch('/:id', updateUser);

module.exports = router