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
                    <a href="#">Gamification</a>
                    <a href="#">Constructive Alignment</a>
                </div>
            </div>
            <div class="dropdown">
                <a data-anchor="prototype" href="#">Prototype</a>
                <div class="submenu submenu-prototype">
                    <a href="#">Design Decisions</a>
                    <a href="#">Instructional Videos</a>
                </div>
            </div>
            <a href="#">Afterword</a>
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
    const id_anchor =  heading.textContent.toLowerCase().replace(" ","-")
    outline_str += `<a href="#${id_anchor}" class="heading-level-${heading_level}">${heading.textContent}</a>`
})

outline.innerHTML = outline_str


