import { Project } from "./project";
import { Client } from "./client";
import { BudgetStatus } from "./budgetStatus";
import { User } from "./user";
interface Budget {
    id: string,
    total: number,
    project: Project._id,
    client: Client._id,
    budget_status: BudgetStatus.status,
    created_by: User._id,
    edited_by?: User._id,
    created_at: Date,
    updated_at: Date
}   

export type { Budget };