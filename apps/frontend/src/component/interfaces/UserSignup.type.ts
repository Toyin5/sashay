
export interface UserSignupValue {
    userName:string;
    phoneNumber:string | number;
    email: string;
    password: string;
    avatar: File | null;
}