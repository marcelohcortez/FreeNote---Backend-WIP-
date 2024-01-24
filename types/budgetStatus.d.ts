enum BudgetStatusEnum {
    PENDING = 'Pending',
    APPROVED = 'Approved',
    REJECTED = 'Rejected',    
}

interface BudgetStatus {
    _id: string;
    status: BudgetStatusEnum
}

export type { BudgetStatus };