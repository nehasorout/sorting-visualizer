import { sleep } from '../sleep'

export const MergeSort = async (arr, setArr, setCurrentIndex, setCurrentNext, setEndAlgo, setDisableEvents, speed, setPurple, setIsGreater) => {
    setDisableEvents(true)
    setEndAlgo(false)

    var itmd = [], visited = []
    var len_of_arr = arr.length;

    // Initialize itmd and visited array with 0
    for (var j = 0; j < len_of_arr; j++) {
        itmd.push(0)
        visited.push(0)
    }

    // Merging of two sub array
    function mergeArray(start, end) {
        let mid = parseInt((start + end) >> 1);
        let start1 = start, start2 = mid + 1
        let end1 = mid, end2 = end

        // Initial index of merged subarray
        let index = start
        setCurrentIndex(index)

        while (start1 <= end1 && start2 <= end2) {
            if (arr[start1] <= arr[start2]) {
                setCurrentIndex(index)
                //setCurrentNext(start1)
                itmd[index] = arr[start1]
                setArr([...itmd])
                timeout(speed)
                index = index + 1
                start1 = start1 + 1;

            }
            else if (arr[start1] > arr[start2]) {
                setCurrentIndex(index)
                //setCurrentNext(start2)
                itmd[index] = arr[start2]
                setArr([...itmd])
                timeout(speed)
                index = index + 1
                start2 = start2 + 1;
            }

        }

        // Copy the remaining elements of
        // arr[], if there are any
        while (start1 <= end1) {
            setCurrentIndex(index)
            //setCurrentIndex(start1)
            itmd[index] = arr[start1]
            setArr([...itmd])
            timeout(speed)
            index = index + 1
            start1 = start1 + 1;

        }

        while (start2 <= end2) {
            itmd[index] = arr[start2]
            setCurrentIndex(index)
            //setCurrentNext(start2)
            setArr([...itmd])
            timeout(speed)
            index = index + 1
            start2 = start2 + 1;
        }

        index = start
        while (index <= end) {
            setCurrentIndex(index)
            arr[index] = itmd[index];
            setArr([...arr])
            timeout(speed)
            index++;
        }
    }



    // Waiting interval between two bars
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // Merge Sorting
    const mergeSort = async (start, end) => {
        if (start < end) {
            let mid = parseInt((start + end) >> 1)
            await mergeSort(start, mid)
            await mergeSort(mid + 1, end)
            await mergeArray(start, end)

            // Waiting time is 800ms
            await timeout(speed * 100)
        }

    }



    // Asynchronous MergeSort function
    const performer = async () => {

        await mergeSort(0, len_of_arr - 1)
        setCurrentIndex(null)
    }
    performer()

    setEndAlgo(true)
    setDisableEvents(false)

  

}