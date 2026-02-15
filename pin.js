let inputPin = "";
const correctPin = "180210";
const maxLength = 6;

const pinBox = document.querySelector(".pin-box");

// TAMBAH ANGKA
function addPin(num) {
  if (inputPin.length >= maxLength) return;
  inputPin += num;
  showTemp();
}

// TAMPIL 0.5 DETIK
function showTemp() {
  const d = document.getElementById("pinDisplay");
  d.textContent = inputPin;

  setTimeout(() => {
    d.textContent = "●".repeat(inputPin.length).padEnd(maxLength, "○");
  }, 500);
}

// HAPUS
function deletePin() {
  if (!inputPin.length) return;
  inputPin = inputPin.slice(0, -1);
  document.getElementById("pinDisplay").textContent =
    "●".repeat(inputPin.length).padEnd(maxLength, "○");
}

// CEK PIN
function checkPin() {
  if (inputPin.length < maxLength) return shake();

  if (inputPin === correctPin) unlock();
  else {
    shake();
    resetPin();
  }
}

// ANIMASI
function shake() {
  pinBox.classList.remove("shake");
  void pinBox.offsetWidth;
  pinBox.classList.add("shake");
}

function unlock() {
  pinBox.classList.add("unlock");
  setTimeout(() => location.href = "ucapan1.html", 800);
}

// RESET
function resetPin() {
  inputPin = "";
  document.getElementById("pinDisplay").textContent =
    "○".repeat(maxLength);
}

window.onload = resetPin;
