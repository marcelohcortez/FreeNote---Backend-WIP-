import { TYPE } from './';

interface Payment {
    id: string,
    paid: number,
    budget: number,
    project: string,
    client: string,
    created_by: string,
    edited_by?: string,
    limit_date?: Date,
    last_payment_value?: number,
    last_payment_date?: Date,
    next_payment_value?: number,
    next_payment_date?: Date,
    created_at: Date,
    updated_at: Date
}

export type { Payment };