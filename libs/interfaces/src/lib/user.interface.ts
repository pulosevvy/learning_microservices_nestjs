export enum UserRole {
    Admin = 'Teacher',
    User = 'User'
}

export interface IUser {
    _id?: string;
    displayName?: string;
    email: string;
    passwordHash: string;
    role: UserRole
}
