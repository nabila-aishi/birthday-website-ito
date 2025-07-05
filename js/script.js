function playSong(filename) {
  const audio = document.getElementById("audioPlayer");
  const img = document.getElementById("songImage");

  audio.src = "assets/music/" + filename;
  audio.play();

  // Mapping lagu ke gambar
  const songCovers = {
    "glue_song.mp3": "assets/mc_album/glue_song.jpg",
    "fix_you.mp3": "assets/mc_album/fix_you.jpg",
    "anything_you_want.mp3": "assets/mc_album/anything_you_want.jpg",
    "my_love_mine_all_mine.mp3": "assets/mc_album/my_love_mine_all_mine.jpg",
    "same_dream.mp3": "assets/mc_album/same_dream.jpg",
    "kita_usahakan_rumah_itu.mp3": "assets/mc_album/kita_usahakan_rumah_itu.jpg",
  };

  img.src = songCovers[filename] || "";
  img.classList.remove("hidden");
}

let loveMultiplier = 1;
const baseLove = 10000000;

function addLove() {
  loveMultiplier++;
  const count = baseLove * loveMultiplier;
  document.getElementById("loveCount").innerText = `+ ${count.toLocaleString()} Cinta`;

  // Buat elemen hati melayang
  const loveEffect = document.getElementById("loveEffect");
  const heart1 = document.createElement("div");
  const heart2 = document.createElement("div");
  const heart3 = document.createElement("div");

  heart1.innerHTML = "❤️";
  heart2.innerHTML ="💕";
  heart3.innerHTML = "💜";
  heart1.className = "absolute text-xl animate-ping-love";
  heart2.className = "absolute text-xl animate-ping-love";
  heart3.className = "absolute text-xl animate-ping-love";
  heart1.style.left = Math.random() * 80 + 10 + "%"; // posisi horizontal acak
  heart2.style.left = Math.random() * 80 + 10 + "%";
  heart3.style.left = Math.random() * 80 + 10 + "%";
  heart1.style.top = "100%";
  heart2.style.top = "100%";
  heart3.style.top = "100%";

  loveEffect.appendChild(heart1);
  loveEffect.appendChild(heart2);
  loveEffect.appendChild(heart3);

  // Hapus setelah animasi selesai
  setTimeout(() => {
    heart1.remove();}, 1000);

  setTimeout(() => {
    heart2.remove();}, 1000);

  setTimeout(() => {
    heart3.remove();},1000);
  
}

function showPopup() {
  document.getElementById('popupModal').classList.remove('hidden');
}

function hidePopup() {
  document.getElementById('popupModal').classList.add('hidden');
}

function togglePopup(button) {
  const popupId = button.getAttribute('data-popup-id');
  const popup = document.getElementById(popupId);
  popup.classList.toggle('hidden');
}

function togglePopupById(id) {
  const popup = document.getElementById(id);
  popup.classList.toggle('hidden');
}
