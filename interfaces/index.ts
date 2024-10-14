export interface IFeedback {
    email: string;
    name: string;
    message: string;
}

export interface IReducerAction<T> {
    type: keyof T | 'reset' | 'setAll';
    payload: string | number | boolean | T | null;
}

export interface ILoginReducerAction extends IReducerAction<"email" | "password"> {
    payload: string
}
