const features = document.querySelector('.features')
const company = document.querySelector('.company')
const featuresToggle = document.querySelector('.features-toggle')
const companyToggle = document.querySelector('.company-toggle')
const closeMenu = document.querySelector('.close-menu')
const openMenu = document.querySelector('.toggle-menu')
const menu = document.querySelector('.mobile-menu')

features.addEventListener('click', () =>{
    featuresToggle.classList.toggle('none')
})

company.addEventListener('click', () =>{
    companyToggle.classList.toggle('none')
})

closeMenu.addEventListener('click', () =>{
    menu.classList.add('none')
})

openMenu.addEventListener('click', () =>{
    menu.classList.remove('none')
})