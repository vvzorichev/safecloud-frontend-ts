import { IAction, Types } from "./i-folder-state";

const onOpenFolder = (id: string): IAction => {
	return {
		type: Types.OPEN,
		payload: id
	}
};

const onCloseFolder = (id: string): IAction => {
	return {
		type: Types.CLOSE,
		payload: id
	}
};

export { 
	onOpenFolder,
	onCloseFolder
};