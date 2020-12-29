const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");
const audio = document.querySelector("#pop");
//math floar berfungis untuk membulatkan bilangan kebawah

//variabel dibawah berguna untuk mencegeah tikus muncul 2 x
let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];

  //kondisi untuk mencegah tikus 2x muncul ditempat yang sama
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function RandomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = RandomWaktu(300, 1000);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    // ini adalah function rekursif
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 30000);
}


function pukul() {
  skor++;
  papanSkor.textContent = skor;
  pop.play();
  this.parentNode.classList.remove('muncul');


}

tikus.forEach(t =>{
  t.addEventListener('click',pukul); 
})