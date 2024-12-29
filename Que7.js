// Que:- For a given array of 10 students' ages i.e 19, 22, 19, 24, 20, 25, 26, 24, 25, 24
    //  Sort the array and find the min and max age
    //  Find the median age(one middle item or two middle items divided by twof
    //  Find the average age(all items divided by the number of itemsf
    //  Find the range of the ages(max minus minf
    //  Compare the value of (min - average) and (max - average), using abs() method


const students = [19, 22 , 19, 24, 20, 25, 26, 24, 25, 24]

//  Sort the array and find the min and max age

function result (studentList)
{
    const arr = studentList.sort((a,b) => a-b)
    
    // Minimum and maximum age
    let minAge = arr[0]
    let maxAge = arr[arr.length-1]
    console.log(maxAge)
}
result(students)



// Find the median age(one middle item or two middle items divided by two

function medianArray( studentList)
{
    var length = studentList.length; 
    if (length % 2 == 1) {
        // If length is odd
        console.log(studentList[(length / 2) - .5])
        return studentList[(length / 2) - .5]
    }
    else {
        console.log((studentList[length / 2] 
            + studentList[(length / 2) - 1]) / 2);
        return (studentList[length / 2] 
            + studentList[(length / 2) - 1]) / 2;
    }
}
medianArray(students)




//  Find the average age(all items divided by the number of itemsf

function averageAge(studentList)
{
    let sum = 0

    studentList.forEach((item)=>{
        sum = sum + item
    })
   
    let result = parseInt(sum / studentList.length)
    console.log("Average of the age is: ", result)
}

averageAge(students)





// Find the range of the ages(max minus min)

function range(studentList)
{
    let minValue = Math.min(...studentList)
    let maxValue = Math.max(...studentList)
   
    let range = maxValue - minValue
    console.log(range)
}

range(students)




//  Compare the value of (min - average) and (max - average), using abs() method

function compare(studentList)
{
    const sum = studentList.reduce((acc, age) => acc + age, 0);
const averageAge = sum / studentList.length;

// Find the min and max age
const minAge = Math.min(...studentList);
const maxAge = Math.max(...studentList);

// Calculate the absolute differences
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

// Compare the two differences
console.log("Absolute difference (min - average):", minDiff);
console.log("Absolute difference (max - average):", maxDiff);

if (minDiff > maxDiff) {
    console.log("The absolute difference (min - average) is larger.");
} else if (maxDiff > minDiff) {
    console.log("The absolute difference (max - average) is larger.");
} else {
    console.log("Both absolute differences are equal.");
}
}

compare(students)