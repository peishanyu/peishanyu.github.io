function menuShow() {
	var menuMask = document.getElementById("menu-r");
	menuMask.style.display = null;
	
	menuMask.classList.remove("menuMaskFadeOut");
	menuMask.classList.add("menuMaskFadeIn");
	
	var menuRR = menuMask.firstElementChild;
	menuRR.classList.add("menuSlideInRight");
	menuRR.classList.remove("menuSlideOutRight");
	
}

function menuClose() {
	var menuMask = document.getElementById("menu-r");
	menuMask.style.display = null;
	
	menuMask.classList.add("menuMaskFadeOut");
	menuMask.classList.remove("menuMaskFadeIn");
	
	var menuRR = menuMask.firstElementChild;
	
	menuRR.classList.remove("menuSlideInRight");
    menuRR.classList.add("menuSlideOutRight");
    
}

