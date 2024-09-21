let topBtn = document.querySelector('.btn-scroll-toUp')

let apperBtn = function () {
    topBtn.classList.add('top');
}

// function to apper btntop
let removeBtn = function () {
    topBtn.classList.remove('top');
}
// when window on scroll we used this function in top
window.onscroll = function () {
    if (this.scrollY > "200") {

        apperBtn()
    }
    else {
        removeBtn()
    }

}

// to go to the  top
topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}
