function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;
    while (isSorted == false) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            let temp;
            if (array[i] > array[i + 1]) {
                temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
            }
            isSorted = false;
        }
        counter = counter + 1;
    }
    return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
