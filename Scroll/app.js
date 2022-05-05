// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const links = document.querySelector('.links');
const linkContainer = document.querySelector('.links-container')
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => { 
    // linkContainer.classList.toggle("show-links") 
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;
    
    if (containerHeight === 0) {
        linkContainer.style.height = `${linkHeight}px`;
    }
    else { 
        linkContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLinkBtn = document.querySelector('.top-link-btn')

window.addEventListener("scroll", () => { 
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else { 
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLinkBtn.classList.add('show-link-btn')
    }
    else { 
        topLinkBtn.classList.remove('show-link-btn')
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => { 
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        const fixNav = navbar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;

        if (!fixNav) { 
            position = position - navHeight;
        }
        if (navHeight > 82) { 
            position = position + containerHeight;
        }
        window.scrollTo(
            {
                left: 0,
                top: position,
            }
        );
        linkContainer.style.height = 0;
    });
})