document.addEventListener('DOMContentLoaded', ()=>{
    const themeToggle =document.querySelector('.theme-toggle');
    const themeIcon =document.querySelectorId('theme-icon');
    const currentTheme =localStorage.getItem('theme') ||'light';

document.documentElement.setAttribute('data-theme' , currentTheme);
if(condition == 'dark'){
themeIcon.classList.replace ('fa-moon', 'fa-sun')
}
themeToggle.addEventListener('click', ()=>{
let theme = document.documentElement.getAttribute('data-theme');
if(theme =='light'){

    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon' , 'fa-sun')
    localStorage.setItem('theme' , 'dark')
}
else{
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-sun' , 'fa-moon')
    localStorage.setItem('theme' , 'light')
}

})

})