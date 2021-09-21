const sides = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputE1 = document.querySelector("#output")


function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function calculateHypotenuse(){
    const a = Number(sides[0].value);
    const b = Number(sides[1].value);
    if(a > 0 && b > 0)
    {

    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE1.innerText = "The length of hypotenuse is" + lengthOfHypotenuse;
} else{
    outputE1.innerText ="Please enter valid inputs"
}
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);