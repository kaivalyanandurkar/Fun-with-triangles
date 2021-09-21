const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
    return sumOfAngles; 
}


function isTriangle() {
    if((Number(inputs[0].value)>0 && Number(inputs[1].value)>0 && Number(inputs[2].value))){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (sumOfAngles===180){
        outputE1.innerText= "Yayy, the angles form a triangle."
    }

     else{
        outputE1.innerText= "Oh! The angles don't form a triangle."
    } 

}
else{
        outputE1.innerText="Please enter valid inputs."
    };
  

}


isTriangleBtn.addEventListener("click", isTriangle);