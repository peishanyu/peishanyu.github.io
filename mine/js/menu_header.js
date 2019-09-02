function menuShow() {
	/*handle scroll bar */
	document.body.style.overflow="hidden";
	
	var scrollBarWidth = getScrollBarWidth();
	document.body.style.paddingRight = scrollBarWidth + "px";
	var headerMask = document.getElementsByClassName("mask-header")[0].getElementsByClassName("row")[0];
	headerMask.style.paddingRight = scrollBarWidth + "px";
	/*------*/
	
	var menuMask = document.getElementById("menu-r");
	menuMask.style.display = "block";
	
	menuMask.classList.remove("menuMaskFadeOut");
	menuMask.classList.add("menuMaskFadeIn");
	
	var menuRR = menuMask.firstElementChild;
	menuRR.classList.remove("menuSlideOutRight");
	menuRR.classList.add("menuSlideInRight");
	
	
	var menuIcon = document.getElementById("ic-menu");
	menuIcon.classList.add("open-menu");
}

function menuClose() {
	/*handle scroll bar */
	document.body.style.overflow = null;
	document.body.style.paddingRight = null;
	var headerMask = document.getElementsByClassName("mask-header")[0].getElementsByClassName("row")[0];
	headerMask.style.paddingRight = null;
	/*------*/
	
	
	var menuMask = document.getElementById("menu-r");
	
	menuMask.classList.remove("menuMaskFadeIn");
	menuMask.classList.add("menuMaskFadeOut");
	
	var menuRR = menuMask.firstElementChild;
	
	menuRR.classList.remove("menuSlideInRight");
    menuRR.classList.add("menuSlideOutRight");
    
    // must have
    setTimeout(function(){
    	menuMask.style.display = "none";
     	var menuIcon = document.getElementById("ic-menu");
    	menuIcon.classList.remove("open-menu");
    },100);
    
}

function menuClick() {
	var menuIcon = document.getElementById("ic-menu");
	if(menuIcon.classList.contains("open-menu")){
		menuClose();
	} else {
		menuShow();
	}
    
}

function getScrollBarWidth () {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return (w1 - w2);
};


