let form = document.getElementById("form");
let pointer = document.getElementById("pointer-image")

form.addEventListener("submit", function(event){
    event.preventDefault();
    let weight = document.getElementById("weight");
    let height = document.getElementById("height") ;
    let bmi = (weight.value/((height.value / 100)**2)).toFixed(2);
    let rotationAngle;
    if (bmi < 18.5) {
        rotationAngle = -72;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        rotationAngle = -38;
    } else if (bmi >= 25 && bmi < 29.9) {
        rotationAngle = 0;
    } else if (bmi >= 30 && bmi < 34.9) {
        rotationAngle = 38;
    } else {
        rotationAngle = 72;
    }

    // Apply the rotation to the pointer
    pointer.style.transform = `rotate(${rotationAngle}deg)`;
    document.getElementById("bmi-value").innerHTML = bmi;
})