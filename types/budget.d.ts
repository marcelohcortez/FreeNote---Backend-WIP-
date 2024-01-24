import { TYPE } from './';

interface Budget {
    id: string,
    total: number,
    project: string,
    client: string,
    budget_status: string,
    created_by: string,
    edited_by?: string,
    created_at: Date,
    updated_at: Date
}   

export type { Budget };