function randomColor(){
    let letter = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0;i<6;i++){
        color += letter[Math.floor(Math.random()*16)]
    }
    return color;
    
}
const start = document.getElementById("start");
const stop  = document.getElementById("stop");

let interval;
start.addEventListener('click',()=>{
    interval = setInterval(changeBackGroundColor,1000);
    function changeBackGroundColor(){
        document.body.style.backgroundColor = randomColor();
    }
})
stop.addEventListener('click',()=>{
    clearInterval(interval);
})