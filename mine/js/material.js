function filterModal() {
  var filterMask = document.getElementById("add-filterMask");
  if (filterMask.style.display === "none") {
    filterMask.style.display = "block";
  } else {
    filterMask.style.display = "none";
  };

  var filterPopup = document.getElementById("filterPopup");
  if (filterPopup.style.display === "none") {
    filterPopup.style.display = "block";
  } else {
    filterPopup.style.display = "none";
  };	  

};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function convertColor(color) {  
  var rgbColors=new Object();

  ///////////////////////////////////
  // Handle rgb(redValue, greenValue, blueValue) format
  //////////////////////////////////
  if (color[0]=='r') {
    // Find the index of the redValue.  Using subscring function to 
    // get rid off "rgb(" and ")" part.  
    // The indexOf function returns the index of the "(" and ")" which we 
    // then use to get inner content.  
    color=color.substring(color.indexOf('(')+1, color.indexOf(')'));
  
    // Notice here that we don't know how many digits are in each value,
    // but we know that every value is separated by a comma.
    // So split the three values using comma as the separator.
    // The split function returns an object.
    rgbColors=color.split(',', 3);

    // Convert redValue to integer
    rgbColors[0]=parseInt(rgbColors[0]);
    // Convert greenValue to integer
    rgbColors[1]=parseInt(rgbColors[1]);
    // Convert blueValue to integer
    rgbColors[2]=parseInt(rgbColors[2]);	
    return rgbToHex	( rgbColors[0], rgbColors[1], rgbColors[2]);
  }

  ////////////////////////////////
  // Handle the #RRGGBB' format
  ////////////////////////////////
  else if (color.substring(0,1)=="#") {
    // This is simples because we know that every values is two 
    // hexadecimal digits.
    rgbColors[0]=color.substring(1, 3);  // redValue
    rgbColors[1]=color.substring(3, 5);  // greenValue
    rgbColors[2]=color.substring(5, 7);  // blueValue

    // We need to convert the value into integers, 
    //   but the value is in hex (base 16)!
	// Fortunately, the parseInt function takes a second parameter 
    // signifying the base we're converting from.  
    rgbColors[0]=parseInt(rgbColors[0], 16);
    rgbColors[1]=parseInt(rgbColors[1], 16);
    rgbColors[2]=parseInt(rgbColors[2], 16);
  }
  return rgbColors;
}


function getSelectedColorCodes() {
	var colorCodes = [];
	var selectedOptions = document.getElementById("materialColorOptions").querySelectorAll(".colorSquare.active");
	for(var si=0; si < selectedOptions.length ; si++){
		var rgbColor = window.getComputedStyle( selectedOptions[si] , null).getPropertyValue("background-color");
		colorCodes.push(convertColor(rgbColor));
	}
	return colorCodes;
}

function updateColorSelected() {
	var addSearchSection = document.getElementById("materialColorChoosen");
	addSearchSection.innerHTML = "";
	var selectedOptions = document.getElementById("materialColorOptions").querySelectorAll(".colorSquare.active");
	for(var si=0; si < selectedOptions.length ; si++){
		var appendColorStr = "";
		var insertDiv = document.createElement("div");
		for(var clzII=0; clzII < selectedOptions[si].classList.length ; clzII++ ){
	 		insertDiv.classList.add( selectedOptions[si].classList[clzII] );
		}
		if( si < 8){
			addSearchSection.appendChild(insertDiv);
			
		} else {
			insertDiv = document.createElement("div");
			insertDiv.classList.add("colorSquare");
			insertDiv.classList.add("over");
			insertDiv.classList.add("active");
			
			addSearchSection.appendChild(insertDiv);
			break;
		}
	}
}

function updateMineTypeSelected() {
	var addSearchSection = document.getElementById("materialMineTypeChoosen");
	addSearchSection.innerHTML = "";
	var selectedOptions = document.getElementById("materialMineTypeOptions").querySelectorAll(".mineType.active");
	for(var si=0; si < selectedOptions.length ; si++){
		if(si < 5) {
			addSearchSection.innerHTML += "<span>" + selectedOptions[si].textContent + "</span>";
			if( si+1 !== selectedOptions.length ){
				addSearchSection.innerHTML += "<span>、</span>";
			}
		} else{
			addSearchSection.innerHTML += "<span>...</span>";		
			break;
		}
	}
}

function updateMeaningSelected() {
	var addSearchSection = document.getElementById("materialMeaningChoosen");
	addSearchSection.innerHTML = "";
	var selectedOptions = document.getElementById("materialMeaningOptions").querySelectorAll(".meanType.active");
	for(var si=0; si < selectedOptions.length ; si++){
		if(si < 5) {
			addSearchSection.innerHTML += "<span>" + selectedOptions[si].textContent + "</span>";
			if( si+1 !== selectedOptions.length ){
				addSearchSection.innerHTML += "<span>、</span>";
			}
		} else{
			addSearchSection.innerHTML += "<span>...</span>";		
			break;
		}
	}
}

/* bind color option */
document.getElementById("materialColorOptions").querySelectorAll('.colorSquare').forEach(colorSquare => {
	colorSquare.addEventListener('click', function (e) {
	    e.preventDefault();
	    if(colorSquare.classList.contains("active")){
	    	colorSquare.classList.remove("active");
	    }else{
	    	colorSquare.classList.add("active");
	    }
		updateColorSelected();
		console.log(getSelectedColorCodes());
    });
});


/* bind mine type option */
document.getElementById("materialMineTypeOptions").querySelectorAll('.mineType').forEach(mineType => {
	mineType.addEventListener('click', function (e) {
	    e.preventDefault();
	    if(mineType.classList.contains("active")){
	    	mineType.classList.remove("active");
	    }else{
	    	mineType.classList.add("active");
	    }
	    updateMineTypeSelected();
		
    });
});


/* bind meaning type option */
document.getElementById("materialMeaningOptions").querySelectorAll('.meanType').forEach(meaningType => {
	meaningType.addEventListener('click', function (e) {
	    e.preventDefault();
	    if(meaningType.classList.contains("active")){
	    	meaningType.classList.remove("active");
	    }else{
	    	meaningType.classList.add("active");
	    }
		updateMeaningSelected();
    });
});

document.getElementById("meterialFilterSubmitBtn").addEventListener('click', function (e) {
	e.preventDefault();
	filterModal();
	   
});



document.getElementById("mineTypeZoneArrow").addEventListener('click', function (e) {
	//e.preventDefault();
	var element = event.target;
	var foldZone = document.getElementById("materialMineTypeOptions");
	
	if(element.classList.contains("zoneArrowClose")) {
		element.classList.remove("zoneArrowClose");
		
		foldZone.classList.remove("foldSelectionZone");
		foldZone.classList.add("unfoldSelectionZone");
	} else{
		element.classList.add("zoneArrowClose");
		
		foldZone.classList.remove("unfoldSelectionZone");
		foldZone.classList.add("foldSelectionZone");
	}
});

document.getElementById("meaningZoneArrow").addEventListener('click', function (e) {
	//e.preventDefault();
	var element = event.target;
	var foldZone = document.getElementById("materialMeaningOptions");
	
	if(element.classList.contains("zoneArrowClose")) {
		element.classList.remove("zoneArrowClose");
		
		foldZone.classList.remove("foldSelectionZone");
		foldZone.classList.add("unfoldSelectionZone");
	} else{
		element.classList.add("zoneArrowClose");
		
		foldZone.classList.remove("unfoldSelectionZone");
		foldZone.classList.add("foldSelectionZone");
	}
});

document.getElementById("colorZoneArrow").addEventListener('click', function (e) {
	//e.preventDefault();
	var element = event.target;
	var foldZone = document.getElementById("materialColorOptions");
	
	if(element.classList.contains("zoneArrowClose")) {
		element.classList.remove("zoneArrowClose");
		
		foldZone.classList.remove("foldSelectionZone");
		foldZone.classList.add("unfoldSelectionZone");
	} else{
		element.classList.add("zoneArrowClose");
		
		foldZone.classList.remove("unfoldSelectionZone");
		foldZone.classList.add("foldSelectionZone");
	}
});










