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
<<<<<<< HEAD
	  if (menuMask.style.display === "none") {
	    menuMask.style.display = "block";
	    /*
	    document.getElementById("page-all").classList.add("scrollNone");
	    */
	    
	  } else {
	    menuMask.style.display = "none";
	    /*
	    document.getElementById("page-all").classList.remove("scrollNone");
	    */
	  };
}
=======
	menuMask.style.display = null;
	
	menuMask.classList.add("menuMaskFadeOut");
	menuMask.classList.remove("menuMaskFadeIn");
	
	var menuRR = menuMask.firstElementChild;
	
	menuRR.classList.remove("menuSlideInRight");
    menuRR.classList.add("menuSlideOutRight");
    
}

>>>>>>> origin/master
