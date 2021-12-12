// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(array) {
    return new Set(array).size === 1;
 }

myFunction([true, true, true, true]) //Expected true
myFunction(['test', 'test', 'test']) //Expected true
myFunction([1,1,1,2]) //Expected false
myFunction(['10',10,10,10]) //Expected false

// -------

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction(arr) {

    return arr.sort((a,b) => b-a)
    // arr.sort().reverse()
 }

 myFunction([1,3,2])
 myFunction([4,2,3,1])

 console.log( myFunction([1,3,2]));

 //--------

 // Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically
function myFunction(arr) {

    return arr.sort()
 }



myFunction(['b', 'c', 'd', 'a'])

//-----------------

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(array) {

    return array.reduce((acc,item, index, arr)=> index<(arr.length-1) ? acc+=item : (acc+item)/arr.length ,0) 
 }

//  function myFunction( input ) {
//     return input.reduce((acc, cur) => acc + cur, 0) / input.length
//     }

myFunction([-50,0,50,200]); //50
myFunction([10,100,1000]) //370

//-----------------

// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(arr) {

    return arr.reduce((acc, item) => acc = acc.length<item.length? item : acc)
}

// function myFunction( input ) {
//     return input.reduce((a, b) => a.length <= b.length ? b : a)
//     }

 myFunction(['I', 'need', 'candy']);

//-----------------

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(arr) {
    return Array.from(arguments).reduce((acc, item) => acc = acc.concat(item) )
}

//  function myFunction( ...arrays ) {
//     return arrays.flat()
//     }

myFunction(['a', 'b', 'c'], [4, 5, 6]) //['a', 'b', 'c', 4, 5, 6]
myFunction([true, true], [1, 2], ['a', 'b']) //[true, true, 1, 2, 'a', 'b']



//-----------------

// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(arr, val) {
    while (arr.indexOf(val) >= 0) {
        arr.splice(arr.indexOf(val),1)
    }
    return arr
 }

//  function myFunction( arr, value ) {
//     return arr.filter(cur => cur !== value)
//   }

//  console.log(myFunction([1,2,3], 2));//[1,3]
//  console.log(myFunction([1,2,'2'], '2'));//[1,2]
//  console.log(myFunction([false,'2',1], false)); //['2', 1]
console.log(myFunction([1,2,'2',1], 1)); //[2, '2']

//-----------------

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(...arrays) {
    
    return Array.from(new Set(arrays.flat().sort((a,b) => a-b)))
 }

//  function myFunction(first, second) {
//     return [...new Set([...first, ...second])].sort((a, b) => a - b);
//   }

myFunction([1, 2, 3], [3, 4, 5]) //[ 1, 2, 3, 4, 5 ]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);//[ -11, -10, 5, 22, 41,  42, 333]


//-----------------
// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction(arr, num) {

    return arr.filter(item => item > num).reduce((acc, item) => acc+=item,0)
 }

 
// function myFunction(arr, num) {
//     return arr.reduce((sum, cur) => {
//       if (cur > num) return sum + cur;
//       return sum;
//     }, 0);
//   }

 myFunction([1, 2, 3, 4, 5, 6, 7], 2)//25
 myFunction([-10, -11, -3, 1, -4], -3)//1
 myFunction([78, 99, 100, 101, 401], 99)//602

//-----------------

 // Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {

    let arr = []
    for (let index = min; index <= max; index++) {
        arr.push(index)
    }
    return arr
 }
 myFunction(2, 7)
 myFunction(-5, 5);
 
//-----------------

// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(arr, n) {
    if (arr.length < n ) return arr
   let a = []
    for (let index = 0; index < arr.length; index++) {
       if(index >= arr.length - n) a.push(arr[index])
   }
   return a
 }

// function myFunction(arr, n) {
//     return arr.slice(-n);
//   }

//myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
//myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
//myFunction([1, 2, 3], 6)

//-----------------

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
    let obj = {};
    arr.forEach(element => obj[element[0].toLowerCase()] = [])
    arr.forEach(element => obj[element[0].toLowerCase()].push(element) )
    return obj
 }
//  function myFunction(array) {
//     return array.reduce((acc, cur) => {
//       const firstLetter = cur.toLowerCase().charAt(0);
//       return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
//     }, {});
//    }
 myFunction(['Alf', 'Alice', 'Ben'])
 myFunction(['Ant', 'Bear', 'Bird'])
 myFunction(['Berlin', 'Paris', 'Prague'])

//-----------------

 // Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// function myFunction(arr, num) {
//     let a = [...arr]
//     num < 6 ? a.unshift(0):a.unshift(num)
//     return a
//  }

function myFunction(array, num) {
    return [...(num > 5 ? [num] : [0]), ...array];
}

myFunction([1,2,3], 6)
myFunction(['a','b'], 2)
myFunction([null,false], 11)


//----------------- Objects

// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

function myFunction(obj) {
    delete obj.country
    return obj
}

// function myFunction(obj) {
//     const {country, ...rest} = obj;

//     return rest
//  }

myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' })


//----------------




// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(obj1, obj2) {
    obj2.city = obj2.country
    delete obj2.country
    return {...obj1, ...obj2}
 }

//  function myFunction(first, second) {
//     const { country, ...rest } = second;
//     return { ...first, ...rest, city: country };
//   }
 myFunction({ continent: 'Europe', country: 'Germany' },{ planet: 'Earth', country: 'Munich', state: 'Bavaria' })

 //----------------


 

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
    let ob = {}
    for (let key in obj) {
        obj[obj[key]] = key
        delete obj[key]
    }
    return obj
 }
//  function myFunction(obj) {
//     return Object.keys(obj).reduce((acc, cur) => {
//       return {  ...acc, [obj[cur]]: cur };
//     }, {});
//   }
myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' })


 //----------------

 


// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
    for (const key in obj) {
        if ( obj[key] === "" || obj[key] === " ") obj[key] = null 
        
    }
    return obj
 }

//  function myFunction(obj) {
//     const newObj = { ...obj };
//     for (key in newObj) {
//       if (newObj[key].trim() === '') newObj[key] = null;
//     }
//     return newObj;
//   }

 myFunction({ a: 'a', b: 'b', c: '' })
 
 myFunction({ a: '', b: 'b', c: ' ', d: 'd' }) 
 
 myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })

  //----------------

  


// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
    
    //   const { fn, ln, size, weight, ...rest } = obj;
  //   const newObj = { fn, ln };
  //   if (size) newObj.size = `${size}cm`;
  //   if (weight) newObj.weight = `${weight}kg`;
  //   return newObj;

  //AUTHOR'S:
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})

//----------------

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

function myFunction(arr, str) {
    arr.map( item => item["continent"] = str)
    return arr
 }
// function myFunction(arr, str) {
//     return arr.map((obj) => ({ ...obj, continent: str }));
//   }

 console.log(myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
 );