export enum UserRole {
    Admin = 'Teacher',
    User = 'User'
}

export enum PurchaseState {
    Started ='Started',
    WaitingForPayment = 'WaitingForPayment',
    Purchased = 'Purchased',
    Cancelled = 'Cancelled'
}

export interface IUser {
    _id?: string;
    displayName?: string;
    email: string;
    passwordHash: string;
    role: UserRole;
    courses?: IUserCourses[];
}

export interface IUserCourses {
    _id?: string;
    courseId: string;
    purchaseState: PurchaseState;
}
