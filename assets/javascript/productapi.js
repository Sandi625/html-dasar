//Membuat Variable dengan DOM
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
const deleteIcon = document.querySelector('.delete-icon');




// function toggleSidebar() {
//     var sidebar = document.getElementById("sidebar");
//     if (sidebar.style.left === "0px" || sidebar.style.left === "") {
//         sidebar.style.left = "-500px"; // Menutup sidebar
//     } else {
//         sidebar.style.left = "0px"; // Membuka sidebar
//     }
// }

// Fungsi untuk membuka atau menutup sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px" || sidebar.style.left === "") {
        sidebar.style.left = "-400px"; // Menutup sidebar
    } else {
        sidebar.style.left = "0px"; // Membuka sidebar
        fetchProducts(); 
    }
}

  
  
  


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

const getEndpoint = "https://650a69e0dfd73d1fab085811.mockapi.io/products";
const postEndpoint = "https://650a69e0dfd73d1fab085811.mockapi.io/products";


//menyimpan id, nama, image, dan harga ke variable products dengan array
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

//Menampung id, nama, image, dan harga dengan array ke variable listCards
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        //menggunakan dom untuk membuat div baru dengan innerhtml untuk menampilkan list produk
        newDiv.innerHTML = `
            <img src="../assets/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="harga">${value.harga.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Masukkan Ke Keranjang</button>
            <p><a href="halamanproduk.html">Klik disini Untuk Deskripsi </a> </p>`;
            
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

//function untuk memasukkan img, nama dan harga ke card atau keranjang
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalHarga = 0;
    listCards.forEach((value, key)=>{
        totalHarga = totalHarga + value.harga;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            //membuat div baru menggunakan newDiv innerhtml agar img,nama dan harga tampil di card atau keranjang
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


function checkout() {
    
    fetch(postEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: listCards }), 
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log('Product berhasil di pesan:', data);
  
    
        listCards = [];
        reloadCard();
        alert('Barang berhasil di pesan');
      })
      .catch((error) => {
      
        console.error('Terjadi kesalahan saat mengirim data ke API:', error);
      });
  }
  
 
  document.getElementById('checkoutButton').addEventListener('click', checkout);




const closeButton = document.querySelector('.close-button');


function closeDeleteCard() {
  
  const deleteElement = document.querySelector('.delete');
  deleteElement.classList.remove('active');
}













const selectedProducts = [];
const productList = document.getElementById("productList");
function fetchProducts() {
    fetch(getEndpoint)
        .then((response) => response.json())
        .then((data) => {
         
            productList.innerHTML = "";

          
            data.forEach((product) => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = product.id; 
                productList.appendChild(checkbox);

                const label = document.createElement("label");
                label.textContent = product.name; // ini bermasalah ya ammpunnn 
                productList.appendChild(label);

                productList.appendChild(document.createElement("br"));
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}


// Pake yang dibawah ini hampir berhasil

// const productList = document.getElementById("productList");

// function fetchProducts() {
//     // URL endpoint yang sesuai dengan data Anda
//     const getEndpoint = "https://650a69e0dfd73d1fab085811.mockapi.io/products";

//     fetch(getEndpoint)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Error fetching data");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             // Hapus semua checkbox yang ada
//             productList.innerHTML = "";

//             // Tambahkan checkbox produk ke dalam daftar
//             data.forEach((product) => {
//                 if (product.data && Array.isArray(product.data)) {
//                     product.data.forEach((productData) => {
//                         if (productData && productData.name) {
//                             const checkbox = document.createElement("input");
//                             checkbox.type = "checkbox";
//                             checkbox.value = productData.id; // Atur nilai checkbox ke ID produk
//                             productList.appendChild(checkbox);

//                             const label = document.createElement("label");
//                             label.textContent = productData.name; // Mengambil "name" dari objek dalam array "data"
//                             productList.appendChild(label);

//                             productList.appendChild(document.createElement("br"));
//                         }
//                     });
//                 }
//             });
//         })
//         .catch((error) => {
//             console.error("Error fetching data:", error);
//         });
// }

//// Fungsi untuk menghapus produk yang telah dipilih
function deleteSelectedProducts() {
    
    const selectedValues = [...productList.querySelectorAll("input[type='checkbox']:checked")].map((checkbox) => checkbox.value);

    
    selectedValues.forEach((value) => {
        
        fetch(`https://650a69e0dfd73d1fab085811.mockapi.io/products/${value}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                // Hapus checkbox yang dipilih dari daftar
                const checkboxToRemove = productList.querySelector(`input[type='checkbox'][value='${value}']`);
                const labelToRemove = checkboxToRemove.nextSibling;
                productList.removeChild(checkboxToRemove);
                productList.removeChild(labelToRemove);
                alert("Pesanan berhasil dihapus");
            } else {
                console.error("Gagal menghapus produk dengan ID: ", value);
            }
        })
        .catch((error) => {
            console.error("Error deleting product:", error);
        });
    });
}
