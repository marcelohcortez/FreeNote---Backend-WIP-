import express from "express";
import {
  getBudgetStatusByID,
  getBudgetStatusByStatus,
  getBudgetStatusByBudgetID,
  createBudgetStatus,
  getBudgetsStatuses,
} from "../controllers/budgetStatusController";

const router = express.Router();

// require auth for all budget routes
//router.use(requireAuth)

//GET all budgets statuses
router.get("/", getBudgetsStatuses);

//GET budget status by budget ID
router.get("/:id", getBudgetStatusByBudgetID);

//GET budget status by budget status
// router.get("/budgetStatus/:id", getBudgetStatusByStatus);

// //POST new budget status
router.post("/", createBudgetStatus);

// //DELETE budget status
// router.delete("/:id", deleteBudget);

// //UPDATE budget status
// router.patch("/:id", updateBudget);

module.exports = router;
