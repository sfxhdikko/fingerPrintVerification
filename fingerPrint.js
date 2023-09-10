const type1 = "1,2,6,7";
const type2 =  1;
const type3 = "";
const type4 = "6,7,8";
const type5 = "2,3,4,5,7,8,9,10";
const type6 = "left thumb and right thumb";
const type7 = "1,2,9,10";
const type8 = "1,6";

const fingerPrintVerification = (fingerPrintTypes) => {
    //Return true is empty string is passed
    if(fingerPrintTypes === "") return true

    //Return false for type of number
    if(typeof fingerPrintTypes === "number") return false;

    //Convert string to array of numbers
    const numArray = fingerPrintTypes.split(",").map((item) => {
        return parseInt(item); 
    });
    
    //Check if length is even else return false
    if(numArray.length % 2 !== 0) return false;

    const newArray = [];
    let result;
    const value = 5;

    //Slice array into two
    const arr1 = numArray.slice(0, numArray.length/2);

    const arr2 = numArray.slice(numArray.length/2);

    arr1.forEach((element) =>{
        result = element + value;
        newArray.push(result)
    });
    
    if(JSON.stringify(newArray) === JSON.stringify(arr2)) {
        return true;
    }else {
        return false;
    }
   
}

console.log(fingerPrintVerification(type5));