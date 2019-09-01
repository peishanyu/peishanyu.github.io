function moveToSelected(element) {

  if (element == "next") {
    var toSelectEle = document.getElementById("album").getElementsByClassName("selected")[0].nextElementSibling;
    console.log("next btn is the selected " );
  } else if (element == "prev") {
    var toSelectEle = document.getElementById("album").getElementsByClassName("selected")[0].previousElementSibling;
    console.log("prev btn is the selected " );
  } else {
    var toSelectEle = element;
    console.log("else is the selected " );
  }
  
  console.log("selected album element " );
  console.log(toSelectEle);
  
  if(isNull(toSelectEle)) {
  	return;
  }
  

  var nextEle = toSelectEle.nextElementSibling;
  var prevEle = toSelectEle.previousElementSibling ;
  
  console.log("nextEle " +nextEle );
  console.log(nextEle );
  console.log("prevEle " +prevEle );
  console.log(prevEle );
  
  var prevSecond = null;
  if (isNotNull(prevEle)) {
  	prevSecond = prevEle.previousElementSibling ;
  }
  
  var nextSecond = null;
  if (isNotNull(nextEle)) {
  	nextSecond = nextEle.nextElementSibling;
  }
  
  // $(selected).removeClass().addClass("selected");
  toSelectEle.className="";
  toSelectEle.classList.add("selected");

  // $(prev).removeClass().addClass("prev");
  if (isNotNull(prevEle)) {
    console.log("working with prev element" );
    console.log(prevEle);
    
  	prevEle.className="";
  	prevEle.classList.add("prev");
  }
  
  // $(next).removeClass().addClass("next");
  if (isNotNull(nextEle)) {
    console.log("working with next element" );
    console.log( nextEle);
  	nextEle.className="";
  	nextEle.classList.add("next");
  }

  // $(nextSecond).removeClass().addClass("nextRightSecond");
  if (isNotNull(nextSecond)) {
 	nextSecond.className="";
  	nextSecond.classList.add("nextRightSecond");
  }
  
  // $(prevSecond).removeClass().addClass("prevLeftSecond");
  if (isNotNull(prevSecond)) {
  	prevSecond.className="";
  	prevSecond.classList.add("prevLeftSecond");
  }

  // $(nextSecond).nextAll().removeClass().addClass('hideRight');
  var allNextEles = getAllNextSiblings(nextSecond,null);
  console.log("handle allNextEles " + allNextEles);
  for(var i = 0; i < allNextEles.length; i++) {
    console.log(allNextEles[i]);
  	allNextEles[i].className="";
  	allNextEles[i].classList.add("hideRight");
  }
  
  
  //  $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  var allPrevSecEles = getAllPreviousSiblings(prevSecond,null);
  console.log("allPrevSecEles " + allPrevSecEles);
  console.log("allPrevSecEles " + allPrevSecEles.length);
  for(var i = 0; i < allPrevSecEles.length; i++) {
  	console.log(allPrevSecEles[i]);
  	allPrevSecEles[i].className="";
  	allPrevSecEles[i].classList.add("hideLeft");
  }

}

function isNotNull(ele){
	return ele !== null && ele !== '';
}

function isNull(ele){
	return !isNotNull(ele);
}

function getAllNextSiblings(elem, filter) {
    var sibs = [];
    if(isNull(elem)){
    	return sibs;
    }
    var nextElem = elem.parentNode.firstChild;
    do {
        if (nextElem.nodeType === 3) continue; // ignore text nodes
        if (nextElem === elem) continue; // ignore elem of target
        if (nextElem === elem.nextElementSibling) {
            if (!filter || filter(elem)) {
                sibs.push(nextElem);
                elem = nextElem;
            }
        }
    } while(nextElem = nextElem.nextSibling)
    return sibs;
}

function getAllPreviousSiblings(elem, filter) {
	var sibs = [];
	if(isNull(elem)){
    	return sibs;
    }
  	while (elem = elem.previousSibling) {
    	if (elem.nodeType === 3) continue; // ignore text nodes
      	if (!filter || filter(elem)) sibs.push(elem);
  	}
  	return sibs;
}


document.addEventListener("keydown", function(e){
	console.log("fire keydown event on " + this);
 	switch(e.which) {
        case 37: // left
        moveToSelected("prev");
        break;

        case 39: // right
        moveToSelected("next");
        break;

        default: return;
    }
    e.preventDefault();
});

var albumElements = document.getElementById("album").getElementsByTagName('div');
for(var i = 0; i < albumElements.length; i++) {
	console.log("adding event to " + albumElements[i]);
	
	albumElements[i].addEventListener("click", function(e){
 		console.log("fire click event on " + this);
  		moveToSelected(this);
	});
}

document.getElementById("prevBtn").addEventListener("click", function() {
  moveToSelected('prev');
});

document.getElementById("nextBtn").addEventListener("click", function() {
  moveToSelected('next');
});


