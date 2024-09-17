export interface Permission {
    permissionId: number;
    name: string;
    apiPath: string;
    method: string;
    module: string;
    createdAt: string;
}

export interface Role {
    roleId: number;
    roleName: string;
    description: string;
    active: boolean;
    permissions: Permission[];
    createdAt: string;
}

export interface User {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    identityNumber: string;
    phoneNumber: string;
    countryId: number;
    active: boolean;
    dateOfBirth: string;
    role: Role;
    createdAt: string;
}

export interface UserResponse {
    status: number;
    payload: User;
}