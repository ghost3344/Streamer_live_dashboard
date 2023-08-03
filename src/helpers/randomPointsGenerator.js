export default function generateRandomPoints(streamerList) {

    const generateFiveDigitRandomNumber = ()=>{
        const minm = 10000;
        const maxm = 99999;
        return Math.floor(Math
            .random() * (maxm - minm + 1)) + minm
    }

    const generateRandomIndexNumber = (minm,maxm)=>{
        return Math.floor(Math
            .random() * (maxm - minm + 1)) + minm
    }    

    const updateNumberOfStreams = generateRandomIndexNumber(0,2)

    const arrayElementsToUpdate = []

    for(let i= 0;i<updateNumberOfStreams;i++ ){
        arrayElementsToUpdate.push(generateRandomIndexNumber(0,9))
    }

    const newData = streamerList?.map((stream,index)=>{
        return  ( arrayElementsToUpdate.find((ele)=>ele === index) || arrayElementsToUpdate.find((ele)=>ele === index) === 0 ) ?  {
            ...stream , score :  generateFiveDigitRandomNumber() 
        } : stream
    })?.sort((stream1,stream2)=>stream2.score - stream1.score)

    return newData

  }
  