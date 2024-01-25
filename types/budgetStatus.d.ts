enum BudgetStatusEnum {
    PENDING = 'Pending',
    APPROVED = 'Approved',
    REJECTED = 'Rejected',
    PAID = 'Paid',    
}

interface BudgetStatus {
    _id: string;
    status: BudgetStatusEnum
}

export type { BudgetStatus };