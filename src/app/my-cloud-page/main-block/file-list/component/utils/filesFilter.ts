import isNameEqual from './isNameEqual';

const filesFilter = (
	file: any,
	searchField: string,
	section: string | null): boolean => {

	const isFileNameEqual = isNameEqual(file.name, searchField);
	if (!isFileNameEqual) {
		return false;
	}

	switch (section) {
		
		case 'drive':
			return true;

		case 'folders':
			return file.type === 'folder';

		case 'recents':
			const month = (new Date()).getMonth();
			const reg1 = new RegExp(`/${month}/`);
			const reg2 = new RegExp(`/${month + 1}/`);
			return reg1.test(file.dateAdded) || reg2.test(file.dateAdded);

		case 'tagged':
			return file.isTagged;

		default:
			return true;
	}
};

export default filesFilter;