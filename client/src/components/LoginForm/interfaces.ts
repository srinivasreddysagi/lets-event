export interface Response {
    status: number;
    data?: {
        message: string;
        type: string;
        userData: {};
    };
}