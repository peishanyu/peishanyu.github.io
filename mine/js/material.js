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

