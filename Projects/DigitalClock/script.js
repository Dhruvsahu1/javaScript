const clock = document.querySelector('.clock');
setInterval(function updateTime(){
    const now  =  new Date();
    clock.innerHTML = now.toLocaleTimeString();
},1000)