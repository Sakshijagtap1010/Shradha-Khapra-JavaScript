//grade distribution

let marks=prompt("Enter marks:");
if(80<=marks && marks<=100)
{
    console.log("A grade");
}
else if(70<=marks && marks<=89)
{
    console.log("B grade");
}
else if(60<= marks && marks<=69)
{
    console.log("C Grade");
}
else if(50 <= marks && marks<= 59)
{
    console.log("D Grade");
}
else
{
    console.log("fail,better luck next time!");
}