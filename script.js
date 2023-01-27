const hollyMain = document.getElementById("holly");
const jennyMain = document.getElementById("jenny");
const jovoMain = document.getElementById("jovo");
const opheliaMain = document.getElementById("ophelia");

const hollyName = document.getElementById("holly-name");
const jennyName = document.getElementById("jenny-name");
// const jovoMain = document.getElementById("jovo");
// const opheliaMain = document.getElementById("ophelia");

hollyMain.addEventListener("mouseenter", function() {
    hollyMain.style.opacity = 1;
    hollyName.style.opacity = 1;
});
hollyMain.addEventListener("mouseleave", function() {
    hollyMain.style.opacity = 0.3;
    hollyName.style.opacity = 0;
});

jennyMain.addEventListener("mouseenter", function() {
    jennyMain.style.opacity = 1;
    jennyName.style.opacity = 1;
});
jennyMain.addEventListener("mouseleave", function() {
    jennyMain.style.opacity = 0.3;
    jennyName.style.opacity = 0;
});

jovoMain.addEventListener("mouseenter", function() {
    jovoMain.style.opacity = 1;
});
jovoMain.addEventListener("mouseleave", function() {
    jovoMain.style.opacity = 0.3;
});

opheliaMain.addEventListener("mouseenter", function() {
    opheliaMain.style.opacity = 1;
});
opheliaMain.addEventListener("mouseleave", function() {
    opheliaMain.style.opacity = 0.3;
});