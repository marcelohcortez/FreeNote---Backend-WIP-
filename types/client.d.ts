import { TYPE } from './';

interface Client {
    id: string,
    name: string,
    email: string,
    phone: string,
    country: string,
    created_by: string,
    edited_by?: string,
    address?: string,
    whatsapp?: string,
    website?: string,
    reference?: string,
    created_at: Date,
    updated_at: Date,
}

export type { Client };