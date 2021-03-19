import {sleep} from './sleep'

export const BubbleSort = async (arr,setArr,setCurrentIndex,setCurrentNext,setEndAlgo,setRed) => {
 console.log('input array:',arr);
    const len = arr.length;
    console.log('length of the array',len);
    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len-1-i; j++) {
                
                setCurrentIndex(j);
                setCurrentNext(j+1);
            if (arr[j] > arr[j + 1]) {
                setRed(true)
                await sleep(100);

                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                 setArr([...arr]);
              
               
            }
           
           await sleep(1000);
        }
        
    }
      setCurrentIndex(null);
      setCurrentNext(null);
      setEndAlgo(true)
};