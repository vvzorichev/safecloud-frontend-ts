export interface ISearchField {
    searchString: string | null
}

export interface ISearchFieldState {
    searchField: ISearchField
}

export enum Types {
    ON_SEARCH = 'ON_SEARCH'
}

export interface IAction {
    type: Types,
    payload: ISearchField["searchString"]
}