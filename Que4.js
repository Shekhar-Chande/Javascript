//Que:-  Write a program that grades students based on their markS
//  If greater than 90 then A Grad
//  If between 70 and 90 then a B grad
//  If between 50 and 70 then a C grad
// //  Below 50 then an F grade



function grads(percentage)
{

    if(percentage > 90)
    {
        return "A Grad"
    }
    else if( percentage > 70 && percentage <=90 )
    {
        return "B Grad"
    }
    else if(percentage > 50 && percentage <=70)
    {
        return "C Grad"
    }
    else{
        return "F Grad"
    }
}

const result = grads(60)
console.log(result)