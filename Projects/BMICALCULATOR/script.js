const body = document.querySelector("body");
const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result  = document.querySelector("#result");
    if(height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)|| height == "" || weight == ""){
        result.innerHTML = "Please enter valid height and weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = "<span style='font-size: 20px; magin-top: 10px;'>Your BMI is " + bmi + "</span> <br>";
    if(bmi < 18.5){
        result.innerHTML += " You are underweight";}
        else if(bmi < 25){
        result.innerHTML += " You have a normal weight";}
        else if(bmi < 30){
        result.innerHTML += " You are overweight";
    }
})