const{ StatusCodes } =  require("http-status-codes")

function addProblem(req, res) {
  res.status(StatusCodes.OK).json({
    message: "Problem added successfully",
    problem: req.body,
  });
}

function getProblems(req, res) {
  res.status(StatusCodes.OK).json({message :"List of problems : ...."});
}

function getProblemById(req, res) {
  res.status(StatusCodes.OK).json({message :"Problem details for ID: ...." });
}

function updateProblem(req, res) {
  res.status(StatusCodes.OK).json({
    message: "Problem updated successfully",
    problem: req.body,
  });
}

function deleteProblem(req, res) {
  res.status(StatusCodes.OK).json({
    message: "Problem deleted successfully",
  });
}

module.exports = {
  addProblem,
  getProblems,
  getProblemById,
  updateProblem,
  deleteProblem,
};
