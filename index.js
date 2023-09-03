let progress = document.querySelector('.scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(document.documentElement.scrollHeight);

window.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop;
    progress.style.width = `${(top / height) * 100}%`;
});
