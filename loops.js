//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

for (i = 0; i < 10; i++){
    let total = i*9;
    console.log ('i${i} * 9 = ${total}')
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
num = 5
while (num <= 50){
    console.log(num)
    num = num + 5
  
}


//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

 
function flat (arr){
    for (i = 0; i<arr.length;i++){
        for ( x = i -1; x>= 0; x--){
            if (arr[i] === arr[x]){
                duplicate = arr[i]
                return duplicate
            }


        }
    }
   
}
console.log(flat([2,3,5,5,8,7]))



//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade (){
    for (let grade = 60; grade <= 100; grade++){
        switch (true){
            case  grade >= 90:
                console.log(`for number grade ${grade}, you get an A`)
            break;
            case  grade >= 80:
                console.log(`for number grade ${grade}, you get an B`)
            break;
            case  grade >= 70: 
                console.log(`for number grade ${grade}, you get an C`) 
            break;
            case  grade >= 60:
                console.log(`for number grade ${grade}, you get an D`)
            break;
            default:
                console.log(`for number grade ${grade}, you get an F`)              
        }
    }
}
console.log(assignGrade(88))