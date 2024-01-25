import { UserRole } from "./userRole"
interface User {
    _id: string,
    email: string,
    password: string,
    role: UserRole.role,
    project_status: ProjectStatus.status,
    firstName?: string,
    lastName?: string,
}

export type { User };