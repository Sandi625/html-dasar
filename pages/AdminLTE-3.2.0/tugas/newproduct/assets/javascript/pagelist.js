//Membuat Variable dengan DOM
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Rolex Sea-Dweller Deepsea 116660 Wristwatch',
        image: 'Rolex Sea-Dweller Deepsea 116660 Wristwatch.jpg',
        harga: 175000000
    },
    {
        id: 2,
        name: 'Omega Planet Ocean 600M Co-Axial Chronograph 45.5 mm',
        image: 'Omega Planet Ocean 600M Co-Axial Chronograph 45.5mm.jpg',
        harga: 86800000
    },
    {
        id: 3,
        name: 'Breitling Avenger Seawolf',
        image: 'Breitling Avenger Seawolf.jpg',
        harga: 32999000
    },
    {
        id: 4,
        name: ' Lige Tachymeter',
        image: 'lige.jpeg',
        harga: 2421900
    },
    {
        id: 5,
        name: 'Emporio Armani Retro AR1676 Black Dial Stainless Steel Strap',
        image: 'Emporio Armani Retro AR1676 Black Dial Stainless Steel Strap.jpg',
        harga: 3227000
    },
    {
        id: 6,
        name: 'Rado Florence R48874015',
        image: 'Rado Florence R48874015.jpg',
        harga: 13672000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../assets/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="harga">${value.harga.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Masukkan Ke Keranjang</button>
            <a href="halamanproduk.html" ${value.image,value.name,value.harga.toLocaleString()}>
            <p>Klik disini Untuk Deskripsi </p>`;
            
        list.appendChild(newDiv);
    })
    // newDiv.innerHTML = ` <img src="../assets/image/${value.image}">`
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // menyalin daftar form produk ke card form
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalHarga = 0;
    listCards.forEach((value, key)=>{
        totalHarga = totalHarga + value.harga;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../assets/image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.harga.toLocaleString()}</div>
                <div> 
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalHarga.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].harga = quantity * products[key].harga;
    }
    reloadCard();
}