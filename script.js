// Toggle dark mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Text Tools
function repeatText() {
  let text = document.getElementById("inputText").value;
  document.getElementById("output").innerText = text.repeat(5);
}

function shuffleText() {
  let text = document.getElementById("inputText").value.split("");
  text.sort(() => Math.random() - 0.5);
  document.getElementById("output").innerText = text.join("");
}

function crazyText() {
  let text = document.getElementById("inputText").value;
  document.getElementById("output").innerText = text
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
    .join("");
}

function blankText() {
  document.getElementById("output").innerText = "‏‏‎ ‎".repeat(10); // karakter blank
}

function emojiText() {
  let text = document.getElementById("inputText").value;
  document.getElementById("output").innerText = "😆 " + text + " 😆";
}

// Sticker Maker
function makeSticker() {
  let text = document.getElementById("output").innerText;
  if (!text) return alert("Buat teks dulu!");

  const canvas = document.getElementById("stickerCanvas");
  const ctx = canvas.getContext("2d");

  // Default PNG size
  canvas.width = 512;
  canvas.height = 512;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#000";
  ctx.font = "bold 42px Poppins";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // PNG download
  let linkPng = document.getElementById("downloadSticker");
  linkPng.style.display = "inline-block";
  linkPng.href = canvas.toDataURL("image/png");
  linkPng.download = "ditzy-sticker.png";

  // WebP download
  let linkWebp = document.getElementById("downloadStickerWebp");
  linkWebp.style.display = "inline-block";
  linkWebp.href = canvas.toDataURL("image/webp");
  linkWebp.download = "ditzy-sticker.webp";
}
