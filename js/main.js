const menuBarOpen = document.getElementById('menu-bar-open');
const menuBarClose = document.getElementById('menu-bar-close');
const menuBar = document.querySelector('.nav-list');

menuBarOpen.addEventListener('click', function() {
    menuBar.classList.add('active');
})

menuBarClose.addEventListener('click', function() {
    menuBar.classList.remove('active');
})

//Modals 
const modalsbg = document.querySelector('.container-modals');
const modals = document.querySelector('.modals');
const orderMenu = document.querySelector('.buy-button1')
const closeModals = document.querySelector('.close-modals')
console.log(closeModals)

orderMenu.addEventListener('click', function(){
    modalsbg.classList.add('active');
    modals.classList.add('active');
    document.body.style.overflow = 'hidden';
    
})

closeModals.addEventListener('click', function() {
    modals.classList.remove('active');
    modalsbg.classList.remove('active');
    document.body.style.overflow = 'auto';
    
})