const navigation = `
    <div class="logo-container">
            <a href="index.html"><img src="img/logo.png" alt="Practice Quest Logo" title="Practice Quest Logo"/>
            </a>
            <button id="hamburger">☰</button>
            <button id="close">x</button>
        </div>
        <nav>
            <a href="process.html">Process</a>
            <a href="define.html">Define</a>
            <div class="dropdown">
                <a data-anchor="ideate" href="#">Ideate</a>
                <div class="submenu submenu-ideate">
                    <a href="gamification.html">Gamification</a>
                    <a href="constructivealignment.html">Constructive Alignment</a>
                </div>
            </div>
            <div class="dropdown">
                <a data-anchor="prototype" href="#">Prototype</a>
                <div class="submenu submenu-prototype">
                    <a href="designdecisions.html">Design Decisions</a>
                    <a href="instructionalvideos.html">Instructional Videos</a>
                </div>
            </div>
            <a href="afterword.html">Afterword</a>
            <a href="#">References</a>
        </nav>
    `

const header = document.getElementsByTagName('header')[0];
header.innerHTML = navigation;

function toggleShow(element){
    if (element.classList.contains('show')){
        element.classList.remove('show');
        element.classList.add('hide');
    } else {
        element.classList.remove('hide');
        element.classList.add('show');
    }
}

const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const nav = document.querySelector('nav')
hamburger.addEventListener('click', (e)=>{
    nav.style.display='flex';
    hamburger.style.display='none';
    close.style.display='block';
})

close.addEventListener('click', (e)=>{
    nav.style.display='none';
    hamburger.style.display='block';
    close.style.display='none';
})

const dropdowns = document.getElementsByTagName('nav')[0];
dropdowns.addEventListener('click', (event)=>{
    const anchor = event.target.dataset.anchor;
    const submenu_target = document.getElementsByClassName(`submenu-${anchor}`)[0]
    toggleShow(submenu_target);
})

const outline = document.getElementById("outline");

let outline_str = ""

const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

headings.forEach((heading)=>{
    const heading_level = heading.tagName.charAt(1)
    const id_anchor =  heading.textContent.toLowerCase().replaceAll("-", "").replaceAll(" ","-")
    outline_str += `<a href="#${id_anchor}" class="heading-level-${heading_level}">${heading.textContent}</a>`
})

outline.innerHTML = outline_str



const top_button = document.getElementById("top-button");
top_button.addEventListener('click', topFunction)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_button.style.display = "block";
    } else {
        top_button.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

