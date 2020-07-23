export interface ICheckbox {
    value?: string,
    id?: string,
    isTagged?: boolean,
    changeFileTag?: (id: string) => {}
}