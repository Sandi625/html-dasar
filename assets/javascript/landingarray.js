let panahKanan = document.querySelector("#carousel-1 .panah-kanan");
let panahKiri = document.querySelector("#carousel-1 .panah-kiri");
let layarToko = document.querySelectorAll("#carousel-1 .layar-carousel");
let nmrLayar = layarToko.length;

let circleStore = document.querySelectorAll("#carousel-1 .circle-container .circle");

let currentScreen = 0;

let inAnim = false;

let animTime = 500;

const gambarArray = [
    {
        src: "../assets/image/bgj1.jpg",
        alt: "Rolex",
        judul: "Rolex",
        deskripsi: "Jam tangan mewah yang terkenal karena kualitasnya yang tinggi, presisi, dan desain klasik."
    },
    {
        src: "../assets/image/bgj2.jpg",
        alt: "Armani",
        judul: "Armani",
        deskripsi: "Produk dari merek fesyen Italia, Giorgio Armani. Mereka dikenal karena kombinasi desain yang elegan dan gaya kontemporer."
    },
    {
        src: "../assets/image/omegaose.jpg",
        alt: "Omega",
        judul: "Omega",
        deskripsi: "Omega terkenal karena presisi yang tinggi dalam pembuatan jam tangan mereka. Mereka sering menggunakan mekanisme Co-Axial, yang dikembangkan oleh George Daniels, untuk meningkatkan akurasi jam tangan mereka."
    }
];

for (let i = 0; i < gambarArray.length; i++) {
    const imgElement = document.getElementById(`carousel-img-${i + 1}`);
    const judulElement = document.getElementById(`judul-${i + 1}`);
    const deskripsiElement = document.getElementById(`deskripsi-${i + 1}`);
    imgElement.src = gambarArray[i].src;
    imgElement.alt = gambarArray[i].alt;
     //text
    judulElement.textContent = gambarArray[i].judul;
    deskripsiElement.textContent = gambarArray[i].deskripsi;
    
   
       
}



pindahGambar(layarToko[currentScreen], layarToko[currentScreen - 1], layarToko[currentScreen + 1]);

highlightCircle(circleStore[0]);

panahKanan.addEventListener("click", () => {
    startAnim("right");
});

//Saat Klik Kiri
panahKiri.addEventListener("click", () => {
    startAnim("left");
});

//Mulai animasi. Entah ke arah kiri atau ke kanan
function startAnim(direction) {
    if(!inAnim) {
        inAnim = true;
        if(direction === "right") {
            moveRight();
            highlightCircle(circleStore[currentScreen + 1], "right");
        }else if(direction === "left"){
            moveLeft();
            highlightCircle(circleStore[currentScreen - 1], "left");
        }else{
            isAnim = false;
            return
        }
    }
}

//Function Pindah Kanan
function moveRight() {
    //Pindah ke layar Berikutnya 
    if(currentScreen < nmrLayar - 1){
    toLeft(layarToko[currentScreen]);
    comeRight(layarToko[currentScreen + 1]);
    setTimeout(() => {
        inAnim = false;
        currentScreen++;
        pindahGambar(layarToko[currentScreen], layarToko[currentScreen - 1], layarToko[currentScreen + 1]);
    }, animTime)
    }else{
        //Masuk layar pertama lagi
        toLeft(layarToko[currentScreen]);
        comeRight(layarToko[0]);
        setTimeout(() => {
            inAnim = false;
            currentScreen = 0;
            pindahGambar(layarToko[currentScreen], layarToko[currentScreen - 1], layarToko[currentScreen + 1]);
        }, animTime)
    }
}

//Saat Klik kanan
function moveLeft() {
    //Pindah Kelayar yang aktif
    if(currentScreen > 0){
        toRight(layarToko[currentScreen]);
        comeLeft(layarToko[currentScreen - 1]);
        setTimeout(() => {
        inAnim = false;
        currentScreen--;
        pindahGambar(layarToko[currentScreen], layarToko[currentScreen - 1], layarToko[currentScreen + 1]);
        }, animTime)
    }else{
        //Pindah kembali ke layar terakhir
        toRight(layarToko[currentScreen]);
        comeLeft(layarToko[nmrLayar - 1]);
        setTimeout(() => {
            inAnim = false;
            currentScreen = nmrLayar - 1;
            pindahGambar(layarToko[currentScreen], layarToko[currentScreen - 1], layarToko[currentScreen + 1]);
            }, animTime)
    }
}

//Function Untuk indikasi bulat ketika kita pindah gambar
function highlightCircle(circleSelect, direction) {
    if(circleSelect === undefined && direction === "right"){
        circleSelect = circleStore[0];
    }else if (circleSelect === undefined && direction === "left"){
        circleSelect = circleStore[nmrLayar - 1];
    }
    circleStore.forEach(circle => {
        if(circle === circleSelect){
            circle.classList.add("circle-fill");
        }else{
            circle.classList.remove("circle-fill");
        }
    })
}



//Animasi Pindah layar
function toLeft(screen) {
    screen.style.animation = "toLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function toRight(screen) {
    screen.style.animation = "toRight 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function comeRight(screen) {
    screen.style.animation = "comeRight 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function comeLeft(screen) {
    screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}



//Urutkan posisi gamabr.
function pindahGambar(mainScreen, leftScreen, rightScreen) {
  
   //Jika layar kanan undifined. maka kembali kelayar utama 
    if(rightScreen === undefined){
        rightScreen =layarToko[0];
    }
   
    //Jika layar kiri undifined, gunakan layar terakhir
    if(leftScreen === undefined){
        leftScreen = layarToko[nmrLayar - 1];
    }
    //Agar Scrool mulus
    layarToko.forEach(screen => {
        if(screen === mainScreen){
            screen.style.display = "block";
            screen.style.left = "0px";
        }else if (screen === leftScreen){
            screen.style.display = "block";
            screen.style.left = "-100%";
        }else if (screen === rightScreen){
            screen.style.display = "block";
            screen.style.left = "100%";
        }else{
            screen.style.display = "none";
        }
    })
}

//AutoScroll 
let carousel = document.getElementById("carousel-1");
let scrollTime = Number(carousel.getAttribute("auto-scroll"));
//Hanya terapkan fitur ini jika pengguna telah menyertakan 'auto-scroll'.
if(scrollTime) {
    //Auto Scroll akan diatur pertama kali
    let autoWipe = setInterval(() => {
        startAnim("right");
    }, scrollTime);
    //Hapus pengatur waktu saat mereka menggunakan di carousel
    carousel.addEventListener("mouseenter", () => {
        clearInterval(autoWipe);
    });
    //Inisialisasi ulang pengatur waktu saat mereka tidak menggunakan carousel
    carousel.addEventListener("mouseleave", () => {
         autoWipe = setInterval(() => {
            startAnim("right");
        }, scrollTime);
    })

}

