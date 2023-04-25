const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumEvenNumbers =()=> {
// sum give us the starting sum that later will change
    let sum = 0
// for loop will iterate over the array
    for(let i = 0; i <= numbers.length; i++) 
// this will tell us if we have even numbers 
    if(numbers[i] % 2 === 0) {
// if we have will add the even numbers and give the sum
        sum = numbers[i] + sum
    }
// this will return the total sum exp:30
    return sum
}

console.log(sumEvenNumbers())