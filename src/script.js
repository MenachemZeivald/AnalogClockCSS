let hrs = document.querySelector('.hrs-line-container')
let min = document.querySelector('.min-line-container')
let sec = document.querySelector('.sec-line-container')
let minute = 360 / 60;

// create initial state
hrs.style.transform = 'rotate(' + (((Date().slice(16, 18) % 12)*60) + 1 * Date().slice(19, 21)) * (360 / (12 * 60)) + 'deg)'
sec.style.transform = 'rotate(' + (Date().slice(22, 24) * minute) + 'deg)'
min.style.transform = 'rotate(' + (Date().slice(19, 21) * minute) + 'deg)'
