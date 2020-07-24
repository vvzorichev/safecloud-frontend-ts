export interface ILogStatus {
    isLoggedIn: boolean,
    isRegistered: boolean
}

export interface ILogStatusState {
    logStatus: ILogStatus
}

export enum Types {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    REGISTRATION = 'REGISTRATION'
}

export interface IAction {
    type: Types
}