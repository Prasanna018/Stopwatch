let section = document.querySelector("section");



let start = document.getElementById("start")
// let sec = document.querySelector(".sec");
let second = document.querySelector(".sec span");

let min = document.querySelector(".min span");
let hr = document.querySelector(".hr span");
let timer = true;

let count = 0;
let minute = 0;
let hour = 0;
async function startTime() {



    if (timer) {
        count++;
        second.textContent = `${count} seconds`;
        if (count >= 59) {
            min.textContent = `${minute++} minute`;
            count = 0;
        }

        if (minute >= 59) {
            hr.textContent = `${hour++} hour`;
            minute = 0;

        }
    }

}



start.addEventListener("click", (e) => {
    e.preventDefault();
    timer = true;

    setInterval(startTime, 1000);

})


let stop = document.querySelector("#stop");

stop.addEventListener("click", (e) => {
    e.preventDefault();
    timer = false;



})

let reset = document.querySelector("#reset");

reset.addEventListener("click", (e) => {
    e.preventDefault();
    timer = false;
    min.textContent = "00 Minute"
    second.textContent = "00 Seconds"
    hr.textContent = "00 Hour"
})



