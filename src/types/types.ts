

export type User = {

    id: string;
    fullName: string;
    email: string;
    password: string | number;
    otp: string | number;
    data: [User]

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