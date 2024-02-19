const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => { 
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
        }
    })
})

const elements = document.querySelectorAll('.principal, header')

elements.forEach( (element) => myObserver.observe(element) )

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/close_white_36dp.svg"
    }
}