let currentSound = null;

const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		// Stop current sound if playing
		if(currentSound){
			currentSound.pause();
			currentSound.currentTime = 0;
		}

		// Get sound file from data attribute
		const soundFile = btn.getAttribute('data-sound');

		// Play new sound
		currentSound = new Audio(`sounds/${soundFile}`);
		currentSound.play();
	});
});

// Stop button functionality
stopButton.addEventListener('click', () => {
	if(currentSound){
		currentSound.pause();
		currentSound.currentTime = 0;
	}
});
