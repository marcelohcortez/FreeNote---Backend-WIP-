enum ProjectStatusEnum {
    PENDING = 'Pending',
    APPROVED = 'Approved',
    DENIED = 'Denied',
    ONHOLD = 'On Hold',
    ONGOING = 'On Going',
    CANCELED = 'Canceled',
    FINISHED = 'Finished'
}

interface ProjectStatus {
    _id: string;
    status: ProjectStatusEnum;
}

export type { ProjectStatus };