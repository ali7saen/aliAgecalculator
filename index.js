let form = document.getElementById("form1");
let birthInput = document.getElementById("birthday");
let calcBtn = document.getElementById("calcBtn");
let years = document.getElementById("years");
let months = document.getElementById("months");
let weeks = document.getElementById("weeks");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mnuets = document.getElementById("mnuets");
let seconds = document.getElementById("seconds");

let reset = function(){
    birthInput.value = "";
    userDate = "";
    }
calcBtn.addEventListener("click",function(){
    if (birthInput.value !== ""){
        let userbithday = birthInput.value;
        let minDate = new Date();
        let userDate = new Date(userbithday);
        
        years.innerText = Math.floor((minDate - userDate) / 1000 / 60 / 60 / 24 / 365);
        months.innerText = Math.floor((minDate - userDate) / 1000 / 60 / 60 / 24/30);
        weeks.innerText = Math.floor((minDate - userDate) / 1000 / 60 / 60 / 24/7);
        days.innerText = Math.floor((minDate - userDate) / 1000 / 60 / 60 / 24);
        hours.innerText = Math.floor((minDate - userDate) / 1000 / 60 / 60 );
        mnuets.innerText = Math.floor((minDate - userDate) / 1000 / 60 );
        seconds.innerText = Math.floor((minDate - userDate) / 1000 );
        reset();
    }
});





form.onsubmit = (event) => {event.preventDefault()}


