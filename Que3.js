// Que:- Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height


function bodyMassIndex(weight, heightInFoot, heightInInch)
{

    let bmiWeight = weight * 2.205; // convert weight into pounds
    let bmiHeight =  (heightInFoot / 3.281) + (heightInInch / 39.37) // convert height into meters
    let bmi = bmiWeight / (bmiHeight * bmiHeight)
    
    return bmi
}

const result = bodyMassIndex(80, 5, 7)

console.log(result)
