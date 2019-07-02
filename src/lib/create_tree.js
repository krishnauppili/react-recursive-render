
export const constructTree = (arr = []) => {
	let tree = [], mappedArr = {}, arrElem, mappedElem;
	for(let i = 0;  i < arr.length; i++) {
		arrElem = arr[i];
		mappedArr[arrElem.id] = arrElem;
		mappedArr[arrElem.id]['children'] = [];
	}
	for (let id in mappedArr) {
		if (mappedArr.hasOwnProperty(id)) {
			mappedElem = mappedArr[id];
			if (mappedElem['parent_id'] && mappedArr['parent_id'] !== null) {
				mappedArr[mappedElem['parent_id']]['children'].push(mappedElem);
			}
			else {
				tree.push(mappedElem);
			}
		}
	}
	return tree;
};