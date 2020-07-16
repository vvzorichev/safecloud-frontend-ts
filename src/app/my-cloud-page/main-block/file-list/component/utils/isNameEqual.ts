const isNameEqual = (name: string, searchField: string | null): boolean => {
	if (!searchField) {
		return true;
	}
	const reg = new RegExp(`${searchField}`, 'i');
	return reg.test(name);
};

export default isNameEqual;