import { UserRole } from "./userRole"
interface User {
    _id: string,
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
    role: UserRole.role,
    created_at: Date,
    updated_at: Date,
}

export type { User };