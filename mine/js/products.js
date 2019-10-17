
function setProductsToRow(e) {
 	console.log(e);
 	cleanAllRowStatus();
 	var toSetSrcPath = e.getAttribute("src");
 	toSetSrcPath = toSetSrcPath.replace(".svg","_active.svg");
 	e.src = toSetSrcPath;
 	
 	var changeClzName = "col-";
 	if(e.name === "1"){
 		changeClzName += "100";
 		
 	}else if(e.name === "2"){
 		changeClzName += "50";
 		
 	}else if(e.name === "3"){
 		changeClzName += "33";
 		
 	}else if(e.name === "4"){
 		changeClzName += "25";
 		
 	}else{
 		changeClzName += "50";
 	}
 	console.log(changeClzName);
 	
 	var productDivEles = document.getElementsByClassName("productRowCtrlDiv");
 	for(var divEE of productDivEles){
 		//console.log(divEE);
 		divEE.classList.remove("col-25");
 		divEE.classList.remove("col-33");
 		divEE.classList.remove("col-50");
 		divEE.classList.remove("col-100");
 		
 		divEE.classList.add(changeClzName);
 	}
}

function cleanAllRowStatus(){
	document.getElementById("pcViewCtrl").querySelectorAll('img').forEach( img =>{
		var srcPath = img.getAttribute("src");
		img.src=srcPath.replace("_active.svg",".svg");
	});
	
	document.getElementById("mbViewCtrl").querySelectorAll('img').forEach( img =>{
		var srcPath = img.getAttribute("src");
		img.src=srcPath.replace("_active.svg",".svg");
	});
}
