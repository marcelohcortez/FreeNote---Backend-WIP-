enum UserRoleEnum {
    ADMIN = 'Admin',
    MEMBER = 'Member',
    CLIENT = 'Client',
    VISITOR = 'Visitor',
}

interface UserRole {
    _id: string;
    role: UserRoleEnum;
}

export type { UserRole };