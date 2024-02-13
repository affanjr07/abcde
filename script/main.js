window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// function loopTypewriter() {
//     const text = document.getElementById('text');
//     const originalText = text.textContent;
//     let i = 0;
//     const interval = setInterval(() => {
//         if (i < originalText.length) {
//             text.textContent = originalText.slice(0, i + 1);
//         } else {
//             clearInterval(interval);
//             setTimeout(loopTypewriter, 2000); // Wait for 1 second before starting the next loop
//         }
//         i++;
//     }, 150); // Type 1 character every 100 milliseconds
// }
// loopTypewriter();

function typeWriter(lines) {
    const text = document.getElementById("text");
    text.classList.add("typewriter");
    // ... rest of the function ...
  }