function blowCandles() {
  const flames = document.querySelectorAll(".flame");
  const cake = document.getElementById("cakeWrapper");

  flames.forEach(flame => {
    flame.style.animation = "none";
    flame.style.opacity = "0";
  });

  cake.classList.add("shake");

  createConfetti();

  setTimeout(() => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "ucapan2.html";
    }, 600); 
  }, 5000);
}

/*CONFETTI*/

function createConfetti() {
  const container = document.getElementById("confetti");
  const colors = ["#ff6fcf", "#ffd1e8", "#ffffff", "#ff9ad5"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // posisi random dari atas
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    // kecepatan jatuh random
    confetti.style.animationDuration =
      3 + Math.random() * 2 + "s";

    container.appendChild(confetti);

    // hapus biar ga numpuk
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

/*PAGE FADE-IN (ON LOAD)*/

window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

