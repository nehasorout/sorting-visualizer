import { sleep } from '../sleep'

export const insertionSort = async (arr, setArr, setCurrentIndex, speed, setCurrentNext, setEndAlgo, setDisableEvents, setIsGreater) => {
    setDisableEvents(true)

    let n = arr.length;
    for (let i = 1; i < n; i++) {
        setCurrentIndex(i)
        // Choosing the first element in our unsorted subarray
        let current = arr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < arr[j])) {
            setIsGreater(true)
            setCurrentNext(j)

            arr[j + 1] = arr[j];
            await sleep(speed)

            setArr([...arr]);
            await sleep(speed);
            j--;
        }
        await sleep(speed);
        setCurrentNext(j)
        arr[j + 1] = current;
        setIsGreater(false)
        setArr([...arr]);
        await sleep(1000);
    }
    setCurrentIndex(null)
    setCurrentNext(null)
    setEndAlgo(true)
    setDisableEvents(false)
};