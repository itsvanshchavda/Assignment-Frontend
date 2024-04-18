export type User = {
    _id: string;
    fullName: string;
    email: string;
    password: string;
    resetPasswordToken: string | null;
    resetPasswordExpires: string | null;
    otp: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type UserResponse = {
    user: User;
    token: string;
    data: User;
}

export type newUser = {
    fullName: string;
    email: string;
    password: string | number;
}

export type loginUser = {
    email: string;
    password: string | number;
}
