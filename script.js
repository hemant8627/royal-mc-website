const SERVER_IP = "play.royalmc.in";

function copyIP() {
  navigator.clipboard.writeText(SERVER_IP).then(() => {
    const msg = document.getElementById("copied");
    if (msg) {
      msg.textContent = "✓ Server IP copied: " + SERVER_IP;
      setTimeout(() => msg.textContent = "", 3000);
    }
  }).catch(() => {
    alert("Server IP: " + SERVER_IP);
  });
}

function comingSoon() {
  alert("ROYAL MC ranks are coming soon!");
}
