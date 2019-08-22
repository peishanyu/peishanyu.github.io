function menuClose() {
	var menuMask = document.getElementById("menu-r");
	  if (menuMask.style.display === "none") {
	  	document.getElementById("page-all").classList.add("scrollNone");
	    menuMask.style.display = "block";
	    
	  } else {
	    menuMask.style.display = "none";
	    document.getElementById("page-all").classList.remove("scrollNone");
	  };
}