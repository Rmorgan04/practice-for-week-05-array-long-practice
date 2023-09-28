const findMinimum = arr => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    
    let el = arr[i];
    if (el < min) {
      min = el;
    }
    
  }
  return min;

};

const runningSum = arr => {
  let sumArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    sum += el;
    sumArr.push(sum);
  
  }
  return sumArr;
};

const evenNumOfChars = arr => {

    let count = 0;
    arr.forEach(element => {
      if(element.length % 2 === 0) {
        count++;
      }
      
    })
    return count;
};

const smallerThanCurr = arr => {
  let smallerArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let el = arr[i];
    for (let j = 0; j < arr.length; j++) {
      let el2 = arr[j];
      if (arr[i] > arr[j]) {
        count++;
      }
      
    }
    smallerArr.push(count);
  }
  return smallerArr;
};

const twoSum = (arr, target) => {

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    for (let j = 0; j < arr.length; j++) {
      let el2 = arr[j];
      if (el + el2 === target) {
        return true;
      }

    }
  }
  return false;
};

const secondLargest = arr => {
  arr.sort((a, b) => a - b);
  return arr[arr.length -2];
};

const shuffle = (arr) => {
  let newArr = [...arr];
  for (let i = newArr.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    newArr.push([newArr[i], newArr[j]] = [newArr[j], newArr[i]]);
  }
  return newArr;
};
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];