import { TYPE } from './';

enum ProjectStatusEnum {
    PENDING = 'pending',
    APPROVED = 'approved',
    DENIED = 'denied',
    ONHOLD = 'onHold',
    ONGOING = 'onGoing',
    CANCELED = 'canceled',
    FINISHED = 'finished'
}

interface ProjectStatus {
    _id: string;
    status: ProjectStatusEnum;
}

export type { ProjectStatus };