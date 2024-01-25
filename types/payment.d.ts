import { Budget } from "./budget";
import { Project } from "./project";
import { Client } from "./client";
import { User } from "./user";
interface Payment {
    _id: string,
    paid: number,
    budget: Budget._id,
    project: Project._id,
    client: Client._id,
    created_by: User._id,
    edited_by?: User._id,
    limit_date?: Date,
    last_payment_value?: number,
    last_payment_date?: Date,
    next_payment_value?: number,
    next_payment_date?: Date,
    created_at: Date,
    updated_at: Date
}

export type { Payment };