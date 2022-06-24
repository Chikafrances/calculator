var num5 = parseInt( prompt("Number 5: "))
var opr = prompt("Operator: ")
var num6 = parseInt( prompt("Number 6: "))

let soln;
const calculate = ()=>{
if(isNaN(num5) || isNaN(num6)){
alert("Please enter a correct number");
}

else{
if(opr === "+")
{
    soln=num5 + num6;
} else if(opr === "-")
{
    soln=num5 - num6;
} else if(opr === "*")
{
    soln=num5 * num6;
} else if(opr === "/")
{
    soln=num5 / num6;
}

alert( num5 + opr+ num6 +"=" +soln);
};
};
calculate();
