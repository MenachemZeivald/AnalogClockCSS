let date = new Date();
let r = document.querySelector(':root');

// create initial state
r.style.setProperty('--hour-start-at', `${(date.getHours() * 30) + (date.getMinutes() / 2)}deg`);
r.style.setProperty('--min-start-at', `${date.getMinutes() * 360 / 60}deg`);
r.style.setProperty('--sec-start-at', `${date.getSeconds() * 360 / 60}deg`);
