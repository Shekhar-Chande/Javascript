//Que:- Write a JavaScript function (the function should be Function declaration) called calculateTax that takes
// an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax
// rates based on income ranges. Test the function with various incomes.

// Dummy Tax rates are given below 
// Low = 0.1
// Medium = 0.2
// High = 0.3

function calculateTax(income)
{
    function finalTax()
    {
        if(income < 25000)
        {
            let res = income * 0.1/100
            console.log(res)
        }

        if(income >= 25000 && income < 50000)
        {
            let res = income * 0.2 / 100
            console.log(res)
        }

        if(income >=50000)
        {
            let res = income * 0.3/100
            console.log(res)
        }

    }

    return finalTax
}

const result = calculateTax(50000)
result()
