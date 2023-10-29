/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const ctx = document.getElementById('myChart');
    let Linguagens = ['JavaScript', 'HTML/Css', 'Python', 'SQL', 'TypeScript', 'Bash/Shell']
    let Notas = [63, 52, 49, 48, 38, 32]

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Linguagens,
            datasets: [{
                label: 'Mais Usadas',
                data: Notas,
                borderWidth: 1
            }]
         },
        options: {
            indexAxis: 'y', 
        }
    });

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entries.target.classList.remove('show')
        }
    })
})
        
const elements = document.querySelectorAll('.hidden')
        
elements.forEach (element => myObserver.observe(element))
        
        
const myObserver2 = new IntersectionObserver((entries2) =>{
    entries2.forEach(entry2 => {
        if(entry2.isIntersecting){
            entry2.target.classList.add('show2')
        }else{
            entries2.target.classList.remove('show2')
        }
    })
})
        
const elements2 = document.querySelectorAll('.hidden2')
        
elements2.forEach (element2 => myObserver2.observe(element2))
