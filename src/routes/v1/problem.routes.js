const express = require('express');

const {ProblemController } = require('../../controllers/index');

const problemRouter = express.Router();

problemRouter.get('/', ProblemController.getProblems);
problemRouter.put('/:id', ProblemController.updateProblem);
problemRouter.get('/:id', ProblemController.getProblemById);
problemRouter.post('/', ProblemController.addProblem);
problemRouter.delete('/:id', ProblemController.deleteProblem);

module.exports = problemRouter;