//your JS code here. If required.
const button = document.querySelectorAll(".btn");
const stopbutton = document.querySelector(".stop");

button.forEach(buttons=>{
	buttons.addEventListner('click',()=>{
		if(currentSound){
			currentSound.pause();
			currentSound.currentTime=0;
		}
		const soundFile = buttons.getAttribute('data-sound');
		currentSound=new Audio('sounds/${soundFile}');
		currentSound.play();
	})
})
stopbutton.addEventListner('click', ()=>{
	if(currentSound){
		currentSound.pause();
		currentSound.currentTime=0;
	}
})

buttons.addEventListner("click" , ()=>{
    	console.log(button);
})