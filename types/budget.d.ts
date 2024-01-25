import { Project } from "./project";
import { Client } from "./client";
import { BudgetStatus } from "./budgetStatus";
import { User } from "./user";
interface Budget {
    _id: string,
    total: number,
    project: Project._id,
    client: Client._id,
    status: BudgetStatus.status,
    created_by: User._id,
    edited_by?: User._id,
}   

export type { Budget };