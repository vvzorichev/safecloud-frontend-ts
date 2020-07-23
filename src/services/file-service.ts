export default class FileService {

	data = [
		{
			id: 1, 
			name: 'NIR', 
			size: '50 KB', 
			type: 'docx', 
			dateAdded: '20/4/2020',
			isTagged: false },
		{
			id: 2, 
			name: 'eng', 
			size: '100 MB', 
			type: 'folder', 
			dateAdded: '4/3/2020',
			isTagged: false },
		{
			id: 3, 
			name: 'data_base', 
			size: '16 KB', 
			type: 'csv', 
			dateAdded: '11/6/2020',
			isTagged: true },
		{
			id: 4, 
			name: 'Crypto', 
			size: '220 MB', 
			type: 'folder', 
			dateAdded: '3/5/2020',
			isTagged: true },
		{
			id: 5, 
			name: 'memes', 
			size: '1 MB', 
			type: 'jpeg', 
			dateAdded: '29/12/2019',
			isTagged: true },
		{
			id: 6, 
			name: 'script', 
			size: '10 KB', 
			type: 'js', 
			dateAdded: '5/6/2020',
			isTagged: false },
		{
			id: 7, 
			name: 'Загрузки', 
			size: '100 MB', 
			type: 'folder', 
			dateAdded: '1/7/2019',
			isTagged: false }
	];

	getFiles() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.data);
				//reject(new Error('Error'))
			}, 2000);
		});
	};
};