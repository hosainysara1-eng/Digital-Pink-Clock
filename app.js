const hoursElem = document.querySelector(".hours");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");

function updateClock() {
  const d = new Date();
  if (d.getHours() < 10) {
    secondsElem.innerHTML = `0${d.getHours()}`;
  } else {
    hoursElem.innerHTML = d.getHours();
  }
  if (d.getMinutes() < 10) {
    secondsElem.innerHTML = `0${d.getMinutes()}`;
  } else {
    minutesElem.innerHTML = d.getMinutes();
  }
  if (d.getSeconds() < 10) {
    secondsElem.innerHTML = `0${d.getSeconds()}`;
  } else {
    secondsElem.innerHTML = d.getSeconds();
  }
}
setInterval(updateClock, 1000);
