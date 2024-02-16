import { Budget } from "./budget";

enum BudgetStatusEnum {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
  PAID = "Paid",
}

interface BudgetStatus {
  _id: string;
  status: BudgetStatusEnum;
  budget: Budget._id;
}

export type { BudgetStatus };
