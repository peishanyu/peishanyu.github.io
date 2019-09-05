function showAnswer() {
  var showAnswer = document.getElementById("answer-whenArrival");
  var height = showAnswer.clientHeight;
  var width = showAnswer.clientWidth;
  console.log(width + 'x' + height);


  if (showAnswer.style.display === "none") {
    showAnswer.style.display = "block";

  } else {
    showAnswer.style.display = "none";

  }
}


function hideAnswer() {
  var hideAnswer = document.getElementById("answer-whenArrival");
  var height = hideAnswer.clientHeight;
  var width = hideAnswer.clientWidth;
  console.log(width + 'x' + height);


  if (hideAnswer.style.display === "none") {
    hideAnswer.style.display = "block";
  } else {
    hideAnswer.style.display = "none";

  }
}

