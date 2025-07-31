window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 0.2; // lebih pelan
  music.play().catch(e => {
    console.log("Autoplay diblokir browser, menunggu interaksi");
  });

  typeWriterEffect();
  startHeartRain();
});

function typeWriterEffect() {
  const element = document.querySelector(".typewriter-text");
  const fullText = `Laras\nDulu,kau hadir bagai embun pagi yang lembut dan menyejukkan hati.\nKini, kau adalah lautan; kadang tenang memeluk bulan, kadang bergelombang menghantam karang.Tapi justru dalam kontras itulah aku menemukan keabadian: cintamu yang tak pernah setengah hati,utuh,dan abadi.\n\nBy cowokmu 31/Juli/2025`;

  element.textContent = "";
  let index = 0;

  const type = () => {
    if (index < fullText.length) {
      element.textContent += fullText.charAt(index);
      index++;
      setTimeout(type, 40);
    }
  };
  type();
}

function revealVideo() {
  const video = document.getElementById("videoPlayer");
  video.style.display = "block";
  video.style.opacity = "1";
  video.style.pointerEvents = "auto";

  // request fullscreen
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }

  video.play();
}

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDelay = Math.random() * 2 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function startHeartRain() {
  setInterval(createFloatingHeart, 300);
}
