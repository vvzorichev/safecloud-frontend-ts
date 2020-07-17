const onOpenFolder = (id) => {
	return {
		type: 'OPEN',
		payload: id
	}
};

const onCloseFolder = (id) => {
	return {
		type: 'CLOSE',
		payload: id
	}
};

export { 
	onOpenFolder,
	onCloseFolder
};