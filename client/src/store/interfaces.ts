// Define a type for the slice state
export interface AcrossAppSlice {
    userData: UserData;
    isLoading: boolean;
    notification: {
        notification: boolean;
        message: string;
        variant: string;
    };
}

export interface Notification {
    notification: boolean;
    message: string;
    variant: string;
}

export interface UserData {
    signed: boolean;
    email: string;
}

export interface EventServicesSlice {
    providerServices: Services[];
    seekerServices: Services[];
}

export interface Services {
    _id: string;
    service: string;
    name: string;
    city: string;
    price: string;
    contact: string;
}

export interface ShoppingCartSlice {
    cartItems: Services[];
}