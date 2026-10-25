```javascript
const copyButton = document.getElementById("copy-ip");
const ipElement = document.getElementById("server-ip");
const message = document.getElementById("copy-message");

if (copyButton && ipElement && message) {
  copyButton.addEventListener("click", async () => {
    const ip = ipElement.textContent.trim();

    try {
      await navigator.clipboard.writeText(ip);
      message.textContent = "Server IP copied!";
    } catch (error) {
      message.textContent = "IP: " + ip + " — copy it manually.";
    }
  });
}
```
