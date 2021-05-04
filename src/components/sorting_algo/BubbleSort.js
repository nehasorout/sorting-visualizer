import { sleep } from '../sleep'

export const BubbleSort = async (arr, setArr, setCurrentIndex, setCurrentNext, setEndAlgo, setDisableEvents, speed, setIsGreater) => {
  setDisableEvents(true)
  setEndAlgo(false)
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      setCurrentIndex(j);
      setCurrentNext(j + 1);
      await sleep(speed);
      if (arr[j] > arr[j + 1]) {
        setIsGreater(true)
        await sleep(speed);
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      await sleep(speed);
      setArr([...arr]);
      await sleep(speed);
      setIsGreater(false)
      await sleep(speed);

    }
    //   setPurple(len-i) 
    await sleep(speed);
  }
  setCurrentIndex(null);
  setCurrentNext(null);
  setEndAlgo(true)
  setDisableEvents(false)
};