import { Project } from "./project";
import { Client } from "./client";
import { User } from "./user";
interface Client {
    _id: string,
    name: string,
    email: string,
    phone: string,
    country: string,
    created_by: User._id,
    edited_by?: User._id,
    address?: string,
    whatsapp?: string,
    website?: string,
    reference?: Client._id,
    owned_projects?: Project._id[],
}

export type { Client };