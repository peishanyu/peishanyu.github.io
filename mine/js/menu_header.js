function menuClose() {
	var menuMask = document.getElementById("menu-r");
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