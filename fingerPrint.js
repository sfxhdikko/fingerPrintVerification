const fingerPrintVerification = (fingerPrintTypes) => {
    if(fingerPrintTypes === "") return true

    if(typeof fingerPrintTypes === "number") return false;

    //Convertion into array of numbers
    const numArray = fingerPrintTypes.split(",").map((item) => {
        return parseInt(item); 
    });
   
    if(numArray.length % 2 !== 0) return false;

    const newArray = [];
    let result;
    const value = 5;

    //Slice array into two
    const leftHandSide = numArray.slice(0, numArray.length/2);

    const rightHandSide = numArray.slice(numArray.length/2);

    leftHandSide.forEach((element) => {
        result = element + value;
        newArray.push(result)
    });
    
    if(JSON.stringify(newArray) === JSON.stringify(rightHandSide)) {
        return true;
    }else {
        return false;
    } 
}