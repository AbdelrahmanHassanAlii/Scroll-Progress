/*
1 --> scrollHeight : is the whole height of your page;
2 --> clintHeight  : is the height of your page you see now (100vh);
3 --> scrollTop    : is the height you left above
*/
/*
# Author: Abdelrahman Hassan Ali
# GitHub: https://github.com/abdo100300500
# Date  : 29/8/2023 
*/ 

let progress = document.querySelector('.scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(document.documentElement.scrollHeight);

window.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop;
    progress.style.width = `${(top / height) * 100}%`;
});
