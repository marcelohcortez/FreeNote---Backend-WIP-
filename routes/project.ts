import express from 'express';
const router = express.Router();

// require auth for all project routes
//router.use(requireAuth)

//GET all projects
router.get('/', getProjects);

//GET single project
router.get('/:id', getProject);

//POST new project
router.post('/', createProject);

//DELETE project
router.delete('/:id', deleteProject);

//UPDATE project
router.patch('/:id', updateProject);

module.exports = router