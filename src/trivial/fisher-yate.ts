const shuffle = (arr: any[]): any[] => {
    for (let i = arr.length - 1; i >= 0; i--) {
        const randIdx = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[randIdx];
        arr[randIdx] = temp;
    }
    return arr;
};
