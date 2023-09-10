const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

const images = [
    "bgp.jpg", "bgp2.jpg", "bgbgp.jpg"
];

const headings = [
    "Breitling Avenger Seawolf", "Rolex Sea-Dweller Deepsea 116660 Wristwatch", "Omega Planet Ocean 600M Co-Axial Chronograph 45.5mm"
];

const descriptions = [
    "Breitling Avenger Seawolf adalah manifestasi dari kekuatan dan ketahanan.",
    "Rolex Sea-Dweller Deepsea 116660 Wristwatch adalah perwujudan sempurna dari keindahan dan ketahanan.",
    "Omega Planet Ocean 600M Co-Axial Chronograph 45.5mm adalah inkarnasi presisi dan keindahan.",
];

let id = 0;

function slide(id) {
    
     slider.style.backgroundImage = `url(../assets/image/${images[id]})`;

    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);

    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}

arrLeft.addEventListener('click', () => {
    id--;
    if (id < 0) {
        id = images.length - 1;
    }
    slide(id);
});

arrRight.addEventListener('click', () => {
    id++;
    if (id > images.length - 1) {
        id = 0;
    }
    slide(id);
});

// Panggil slide pertama kali untuk menampilkan gambar awal
slide(id);
