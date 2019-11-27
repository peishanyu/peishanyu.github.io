function itemTabClick(ele) {
  
  var itemCateName = ele.getAttribute("name");
  if(itemCateName==null){
    return;
  }
  console.log(itemCateName);
  
  var itemsFarm = document.getElementById("itemsFarm");
  console.log(itemsFarm);
  
  //demo
  var addText = '<div id="cateB" class="flexbox">';
  var addItemText = "";
  if(itemCateName === "item1"){
    addItemText = '<div><img src="static/images/customization/g01.png" /></div>';
  } else if(itemCateName === "item2"){
    addItemText = '<div><img src="static/images/customization/g02.png" /></div>';
  } else {
    addItemText = '<div><img src="static/images/customization/g03.png" /></div>';
  }
  
  for(var ii=0 ; ii<150 ; ii++){
    addText += addItemText;
  }
  
  addText += '</div>';
  
  itemsFarm.innerHTML = addText;
}