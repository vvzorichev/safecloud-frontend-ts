export interface IMemory {
    memory: string | null,
    loading: boolean,
    error: string | null
}

export interface IMemoryState {
    memory: IMemory
}