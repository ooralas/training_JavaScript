// multiply arguments, unlimited arguments, if 0
let multply = function() {
    let args = [...arguments]
    return args.reduce((total, item)=> item? total*item : total+item ,1) 
}
// console.log(multply(2,0,2, 5));


// how many days, between two dates
let date1 = new Date('May 27, 2021')
let date2 = new Date('June 5, 2019')
const getDays = (date1, date2 ) => {
    // time2 = date2.getTime()
    // time1 = date1.getTime()
    return Math.round(Math.abs((date2 - date1)/(1000*3600*24)))
}
console.log(getDays(date1, date2));

// count sequences, three numbers, first equals to third
// and middle one different, all three numbers equal does not count [4,4,4]

let count = (data) =>data.reduce((total, item, index) => total + (item === data[index+2] && item !== data[index+1]),0)
//Erklärung:
console.log(1+(true)) //2 => true ist 1 in der arthmeriken Prozesse
const first = [8, 6, 8, 6, 7, 4, 7]
// [8,6,8], [6,8,6], [7,4,7];
const second = [4, 5, 5, 7, 5, 5, 9]
// [5,7,6]
const third = [3, 3, 2, 8, 7, 6, 5]
//
// console.log(count(first));


// is the sum of single numbers of a number is odd or even. e.g. : 456 => 4+5+6 = 15 is a ODD Number
let a = 456;
let oddOrEven = a =>  (a.toString().split("").reduce((total, item)=> total + parseInt(item) ,0))%2? "ODD" : "EVEN";

// console.log(oddOrEven(456));


//Return the longest Word in a sentence
let longestWord = (data) => {
    let words = data.split(" ");

    return words.reduce((total, item)=> {
        !total? total = item : item;
        return total.length > item.length ? total : item
    },0)
}

let a = "I am a good Programmer"

// console.log(longestWord(a));


//Return a word with a caiptal first letter
let capitalize = word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

// console.log(capitalize("salar"));


//check if all letter in a string are unique
let uniqe = data => {
    return new Set(data).size === data.length ? "true" : false;
}

// console.log(uniqe("abcdsf"));//true
// console.log(uniqe("abcdssf"));//false


//Return true if sum of all elements of an array is equal to the last element
let arraySum = data => data.reduce((total, item, index) => {
    (index < data.length-1) ? total = total + item:total
    return total
} ,0) === data[data.length-1]


// console.log(arraySum([1,2,4,6,13]));//true