let audio = document.querySelectorAll("audio");
let chkbx = document.querySelector("#checkbox");
chkbx.addEventListener("input", looping);

function looping(){
audio.forEach(function(a){
chkbx.checked ? a.loop = true : a.loop = false;
})
}