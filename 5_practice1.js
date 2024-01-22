//problem:create function using the "function" keyword that takes String as argument and return the number of vowels in string.

function vowels(str)
{
    let cnt=0;
    for(const char of str)
    {

        if(char=="a" || char=="e" || char=="i" || char=="u")
        {
            cnt++;
        }
    }
    return cnt;
}

console.log(vowels("sakshi"));

//using arrow function
let cnt =0;
const countVowels =(str1)=>
{
    for(const char of str1)
    {

        if(char=="a" || char=="e" || char=="i" || char=="u")
        {
            cnt++;
        }
    }
    console.log(cnt);
}

countVowels("i love javascript");
