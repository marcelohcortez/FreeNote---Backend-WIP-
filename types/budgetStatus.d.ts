import { TYPE } from './';

enum BudgetStatusEnum {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',    
}

interface BudgetStatus {
    _id: string;
    status: BudgetStatusEnum
}

export type { BudgetStatus };