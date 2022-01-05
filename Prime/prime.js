/* Alexander Alfakir
/  2 / 15 / 2021 
/  Test 1
/  Grade Completed: A
*/  

// Array's to store numbers.
var primes = [];
var not_primes = [];

// This function checks for primeness.
function Check_Prime(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
        return num > 1;
    }
    
}

function createNumber(num){
    let li = document.createElement("li");
    li.textContent = num;
    return li;
}



function Sort_Numbers(){
    // This should grab the input from HTML
    var n = document.inputform.input.value;
    
    const pL = document.querySelector('#prime');
    const npL = document.querySelector('#not_prime');

    // This loop will go through 1 to n, check prime, then sort into appropriate array list.
    for(i = 1; i <= n; i++){
        var r = Check_Prime(i);
        if (r === false){
            not_primes[i-1] = i;
            console.log(i + " not prime");
            npL.appendChild(createNumber(i + " "));
            

        }
        else{
            primes[i] = i;
            console.log(i + " prime");
            pL.appendChild(createNumber(i + " "));
            
        }
    }
}

function Sum_Numbers(arr){
    // Getting sum of numbers
    var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
    document.getElementById("sum").innerHTML = sum;
    
    console.log(sum);
}

function Sum_Numbers_2(arr){
    // Getting sum of numbers
    var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
    document.getElementById("sum_2").innerHTML = sum;
    
    console.log(sum);
}

// Code needed for Changing Colors
var xp = 0;
function changeScreen(){
    var doc = document.getElementById("prime_list");
    var color = ["blue", "brown", "green", "purple"]
    doc.style.backgroundColor = color[xp];
    xp = (xp + 1) % color.length;
}
var xp = 0;
function changeScreen_2(){
    var doc = document.getElementById("not_prime_list");
    var color = ["blue", "brown", "green", "purple"]
    doc.style.backgroundColor = color[xp];
    xp = (xp + 1) % color.length;
}
setInterval(changeScreen, 1000);
setInterval(changeScreen_2, 1000);


