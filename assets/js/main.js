        /* NAV MOBILE */
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

        /*Open*/

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }
        /*Close*/

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    /*Close by href*/

    const navLink = document.querySelectorAll('.nav-link')

    function linkClose() {
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(e => e.addEventListener('click', linkClose));
    
    /* SKILLS OPENER */

    const skillsContent = document.getElementsByClassName('skills-content'),
        skillsHeader = document.querySelectorAll('.skills-header')

        function toggleSkills () {
            let itemClass = this.parentNode.className

            for(i = 0; i < skillsContent.length; i++) {
                skillsContent[i].className = 'skills-content skills-close'
            }
            if(itemClass === 'skills-content skills-close') {
                this.parentNode.className = 'skills-content skills-open'
            }
        }

        skillsHeader.forEach((el) => {
            el.addEventListener('click', toggleSkills)
        })

        /*SWIPER JS*/
  
        var swiper = new Swiper(".mySwiper", {
            cssMode: true,
            loop: true,
        
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
                delay: 10000,
            },
          });


          /* SCROLL SECTIONS */
          const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*CHANGE BACKGROUND HEADER */

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 60) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Dark light */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* SCROLL REVEAL */
      const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: '2500',
          delay: 300,
          //reset: true
      })

      ScrollReveal().reveal('.home');
      ScrollReveal().reveal('.about');
      ScrollReveal().reveal('.skills');
      ScrollReveal().reveal('.portfolio');
      ScrollReveal().reveal('.contact');
      