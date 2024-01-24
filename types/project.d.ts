import { Budget } from "./budget";
import { Client } from "./client";
import { ProjectStatus } from "./projectStatus";   
import { User } from "./user";
interface Project {
    id: string,
    name: string,
    description: string,
    budget: Budget._id,
    client: Client._id,
    project_status: ProjectStatus.status,
    created_by: User._id,
    edited_by?: User._id,
    access_data?: string[],
    website?: string,
    start_date?: Date,
    end_date?: Date,
    created_at: Date,
    updated_at: Date,
}

export type { Project };