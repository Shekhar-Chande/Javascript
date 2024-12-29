//Que:- How does the break statement work within a loop in JavaScript? Provide an example named "Breaking the Loop at a Specific Condition" to demonstrate its functionality, where it will give an output as shown below 

function loopBreak()
{
    for(let i=1; i<=10; i++)
    {
        if(i==6)
        {
            console.log("Breaking the loop")
            console.log("Loop has ended")
            break
        }
        
        console.log(`Iteration number: ${i}`)
    }
}

loopBreak()