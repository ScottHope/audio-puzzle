let audio = document.querySelector(".audio");
let chkbx = document.querySelector("#checkbox");
chkbx.addEventListener("input", function(){chkbx.checked === true ? audio.loop = true : audio.loop = false});