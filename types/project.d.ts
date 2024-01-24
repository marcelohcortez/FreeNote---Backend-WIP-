import { TYPE } from './';

interface Project {
    id: string,
    name: string,
    description: string,
    budget: string,
    client: string,
    project_status: string,
    created_by: string,
    edited_by?: string,
    access_data?: string[],
    website?: string,
    start_date?: Date,
    end_date?: Date,
    created_at: Date,
    updated_at: Date,
}

export type { Project };