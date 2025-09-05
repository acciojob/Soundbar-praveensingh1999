let currentSound = null;

const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

// Play sound on button click
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Stop current sound if playing
    if(currentSound){
      currentSound.pause();
      currentSound.currentTime = 0; // Reset time
    }

    // Play new sound
    const soundFile = btn.getAttribute('data-sound');
    currentSound = new Audio(`sounds/${soundFile}`);
    
    // Handle error if sound file doesn't load
    currentSound.onerror = () => {
      console.error(`Error loading sound: ${soundFile}`);
    };

    currentSound.play();
  });
});

// Stop button functionality
stopButton.addEventListener('click', () => {
  if(currentSound){
    currentSound.pause();
    currentSound.currentTime = 0; // Reset time
  }
});