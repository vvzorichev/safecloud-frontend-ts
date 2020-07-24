export interface IMemory {
    memory: string | null | undefined,
    loading: boolean,
    error: string | null | undefined
}

export interface IMemoryState {
    memory: IMemory
}

export enum Types {
    FETCH_MEMORY_REQUEST = 'FETCH_MEMORY_REQUEST',
    FETCH_MEMORY_SUCCESS = 'FETCH_MEMORY_SUCCESS',
    FETCH_MEMORY_FAILURE = 'FETCH_MEMORY_FAILURE'
}

export interface IAction {
    type: Types,
    payload?: IMemory["memory"] | IMemory["error"]
}