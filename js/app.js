/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createNavItems(){
    const sections = document.querySelectorAll('section');
    const fragment = document.createDocumentFragment();
    for(let i=0;i<sections.length;i++){
        const link = document.createElement('a');
        link.setAttribute('href','#section'+(i+1));
        const listItem = document.createElement('li');
        link.innerText = sections[i].getAttribute('data-nav');
        listItem.appendChild(link);
        fragment.appendChild(listItem);
        if(i == 0){
            listItem.setAttribute('class','active_section');
        }
        listItem.setAttribute('data-list-section','Section ' + (i+1));
    }
    const navBar = document.querySelector('#navbar__list');
    navBar.appendChild(fragment);
}

createNavItems();


// Add class 'active' to section when near top of viewport
let sections    = document.querySelectorAll("section");


function checkVisibleSection(){
    let minor   = window.innerHeight, section = null;

    //---Select the section closest to the top
    for(let i = 0;i < sections.length;i++){
        var item = sections[i];
        var offset  = item.getBoundingClientRect();
        if(Math.abs(offset.top) < minor){
            minor   = Math.abs(offset.top);
            section = item;
        }
    }

    //---If the section exists
    if(section){
        let navSections = document.querySelectorAll('li');
        for(let i = 0;i < navSections.length;i++){
            if(navSections[i].getAttribute('data-list-section') === section.getAttribute('data-nav')){
                navSections[i].classList.add('active_section');
            }else{
                navSections[i].classList.remove('active_section');
            }
        }
    }
}



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.addEventListener("scroll", function(){
    delay = setTimeout(checkVisibleSection, 200);
});


// Set sections as active
