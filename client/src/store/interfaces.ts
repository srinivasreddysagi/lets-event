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
    providerServices: ProviderServices[];
}

export interface ProviderServices {
    id: number;
    service: string;
    name: string;
    city: string;
    price: string;
    contact: string;
}