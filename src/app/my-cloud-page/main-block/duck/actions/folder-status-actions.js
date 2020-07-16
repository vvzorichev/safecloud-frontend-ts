const onOpenFolder = (id) => {
	return {
		type: 'OPEN',
		payload: id
	}
};

const onCloseFolder = (id) => {
	return {
		type: 'CLOSE'
	}
};

export { 
	onOpenFolder,
	onCloseFolder
};