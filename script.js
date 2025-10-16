//Sidebar
const openSideButton = document.querySelector('.acount');
const sideBar = document.querySelector('.side-bar');
const acount = document.querySelector('.acount');
const acount2 = document.querySelector('.acount2');
const sideBarContent = document.querySelector('.side-bar-content');
const logOut = document.querySelector('.side-bar-logout');
console.log(sideBarContent);

//Sidebar Open
openSideButton.addEventListener('click', ()=> {
    acount.classList.add('hidden');
    sideBar.classList.add('active');
    sideBarContent.classList.add('active');
    acount2.classList.add('active');
    logOut.classList.add('active');
})
//Sidebar Close 
const sideBarClose = document.querySelector('.side-bar-close');
sideBarClose.addEventListener('click', ()=> {
    acount.classList.remove('hidden');
    sideBar.classList.remove('active');
    sideBarContent.classList.remove('active');
    acount2.classList.remove('active');
    logOut.classList.remove('active');
})
