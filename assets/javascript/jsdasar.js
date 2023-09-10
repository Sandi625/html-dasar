// console.log('hello world'); alert("hello world!");
console.log('hello world')
//  alert("hello world!")

//  ini adalah komentar

/*ini adalah komentar
multi 
baris */

var nama = "Arkatama";
let id = 123;
const alamat = "Malang";
console.log(nama, id, alamat)

let n = 25;
n = 30;
console.log(n)

let inf = 100 / 0;
console.log(inf);

//atau
console.log(Infinity)

console.log("arkatama" + 1);
console.log(typeof "arkatama" + 1)
console.log("Multi Solusindo" + (2 * 5));
console.log(typeof "Multi Solusindo" + (2 * 5));
console.log('Nama' * 3);
console.log(typeof 'nama' * 3);  //Nan

const bigInt = 1234567890123456789012345678901234567890n;

const nama1 = "Arkatama";
const nama2 = 'Arkatama';
const nama3 = `Arkatama`;

let isLoggedIn = true;
console.log(isLoggedIn);
let isAdmin = false;
console.log(isAdmin);

let isGreater = 10 > 5;
console.log(isGreater);
let isLess = 10 < 5;
console.log(isLess);

let girlfriend = null;
console.log(girlfriend);

let name;
console.log('name');

let employee = Symbol('Joko');
console.log(employee);
console.log(employee.description);

let employees = {
   name: "jhon",
   age: 30,
   job: "web developer",
   isMarried: false,
   hobies: ["sports", "cooking"],
};
console.log(`His name is ${employees.name} and he is ${employees.age} years old`);

value = String(11);
//  alert(typeof value);

//  alert("6" / "2"); 

let str = "123";
//  alert(typeof str);

let num = Number(str);

//  alert(typeof num);

/*alert ( Boolean(1));
alert ( Boolean(0));

alert ( Boolean("hello"));
alert ( Boolean("")); */

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let s = 2;
console.log(s);

s += 5;
console.log(s);

let x = 4;
let y = 5;

console.log(x == y);
console.log(x < y);
console.log(x > y);
console.log(x != y);

let i = true;
let j = false;

console.log(i && j);
console.log(i || j);
console.log(!i);

let v = 60;      // jika dibinerkan menjadi 00111100
let c = 13;      //jika dibinerkan menjadi 00001101

console.log(v & c);
console.log(v | c);
console.log(v ^ c);
console.log(~v);

let o = 1;
let p = 1;
console.log(o == p ? "yes" : "no");

// alert("Selamat Datang Di Arkatama");
alert("Sekarang tanggal " + new Date());

// let response = prompt("Apakah kamu mau nonton akhir pekan ini?");
// alert("Jawaban nya adalah " + response);

let response1 = confirm("Mau dinner malam ini?");
alert("Jawabanya: " + response1);

/*let response2 = prompt("1 + 1 =")
if (response2 == 2) {
   alert("Correct!");
}else{
   alert("Wrong");
}*/

let response3 = prompt("1 + 1 =");
if (response3 == 2) {
   alert("Correct!");
} else if (response3 < 2) {
   alert("To low!");
} else {
   alert("To High!");
}

let color = "blue";

switch (color) {
   case "red":
      alert("I love red!");
      break;
   case "blue":
      alert("I love blue!");
      break;
   default:
      alert("I don't know what color it is!");
      break;
}

for (let i = 0; i < 5; i++) {
   console.log(`Iterasi ke ${i}`);
}

let f = 0;

do {
   console.log(`Iterasi1 ke ${f}`);
   f+=1;

} while (f < 5);

let r = 0;
while (r < 5) {
   console.log(`Iterasi2 ke ${r}`);
   r++
}

for (let c = 0; c < 5; c++) {
   if(c==3){
      break;
   }
   console.log(`Iterasi4 ke ${c}`);
}

for (let h = 0; h < 5; h++ ) {
   if(h==3){
      continue;
   }
   console.log(`Iterasi5 ke ${h}`)
}
