const toggle = document.querySelector('[data-element="nav-toggle"]');
const targetSelector = toggle.getAttribute('data-target');
const target = document.querySelector(targetSelector);

toggle.addEventListener('click', () => target.classList.toggle('open'));

const AnchorJump = (function () {
    let links;

    const setLinks = () => {
        links = Array.from(document.querySelectorAll("[data-link]"))
    };

    const linkAction = function (event) {
        event.preventDefault();

        const href = this.getAttribute('href');
        const target = document.querySelector(href);

        history.pushState(null, null, href);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    };

    const setLinkAction = () => {
        links.forEach(link => link.addEventListener('click', linkAction))
    };

    const init = () => {
        setLinks();
        setLinkAction()
    };

    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', AnchorJump.init);


const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

/* generate HTML */
function generateHTML([h, v]) {
    return `
      <div class="item h${h} v${v}">
        <img src="images/${randomNumber(12)}.jpg" alt="wes bos test images">
        <div class="item__overlay">
          <button class="item-view">view</button>
        </div>
      </div>
    `;
}

/* helper function that gives us a random number */
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}

/* out of the 12 images of wes bos, generate 50 "placements" on site */
/* concat, because otherwise we have unfilled 1x1 spaces on site */
const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

/* take that digits array, map over it, pass generateHTML to it; join it to convert it to a string  */
const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);