const shuffle = (nums) => {
	return nums.sort(() => Math.random() - 0.5);
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let acc = 0;
for (let i = 0; i < 1000000; i++) {
	const newArr = shuffle(arr);
	if (newArr[0] === 0) acc++;
}

console.log(acc / 1000000);
