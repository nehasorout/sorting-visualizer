import { sleep } from '../sleep'

export const selectionSort = async (arr, size, setArr, setCurrentIndex, setCurrentNext, setEndAlgo, setDisableEvents, setIsGreater, speed) => {
    let n = arr.length;
    setDisableEvents(true)
    setEndAlgo(false)
    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        setCurrentIndex(i);
        setCurrentNext(min);

        if (min !== i) {

            setIsGreater(true)
            await sleep(10000 / size);

            // Swapping the elements
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;

            setArr([...arr]);
        }
        await sleep(10000 / size);
        setIsGreater(false)
        await sleep(10000 / size);

    }
    setCurrentIndex(null);
    setCurrentNext(null);
    setEndAlgo(true)
    setDisableEvents(false)
}
