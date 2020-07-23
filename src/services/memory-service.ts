export default class MemoryService {
	memory = '300 MB';

	getMemory() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.memory);
				//reject('memory error');
			}, 1000)
		});
	}
}