let decreaseBtn = document.querySelector("#btnDecrease");
let increaseBtn = document.querySelector("#btnIncrease");
let resetBtn = document.querySelector("#btnReset");
// let count = document.getElementById("value").innerText;
let count = 0;
let valueStyle = document.getElementById("value").style;

//functions to effect action on click of buttons
decreaseBtn.addEventListener("click", countDecrease);
increaseBtn.addEventListener("click", increaseCount);
resetBtn.addEventListener("click", resetCount);


//function to decrease count by 1 and invoke color change function
function countDecrease(){
    count -=1;
    document.getElementById("value").innerHTML = count;
    colorChanges();
}

//function to increase count by 1 and invoke color change function
function increaseCount(){
    count +=1;
    document.getElementById("value").innerHTML = count;
    colorChanges();
}

//function to reset count and invoke color changes
function resetCount(){
    count = 0;
    document.getElementById("value").innerHTML = count;
    colorChanges();
}

//function for color changes effect.
function colorChanges(){
    if(count === 0){
        valueStyle.color = "black";
    } else if (count < 0){
        valueStyle.color = "red";
    } else {
        valueStyle.color = "green";
    }
}



for (const iterator of object) {
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}