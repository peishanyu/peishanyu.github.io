
function hideAnswer() {

  var showAnswer = document.getElementById("answer-whenArrival");
      showAnswer.classList.remove("answer-on-show");
      showAnswer.classList.remove("answer-on-close");
      
      showAnswer.classList.remove("container");
      showAnswer.classList.remove("blank");
      showAnswer.classList.add("answer-on-close");
      
      
  var faq = document.getElementById("faq");
  faq.scrollIntoView({ behavior: 'smooth' });

}

/* bind all anchor to href under */
document.getElementById("faq").querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
        
	  var showAnswer = document.getElementById("answer-whenArrival");
  	  showAnswer.classList.remove("answer-on-close");
  	  showAnswer.classList.remove("answer-on-show");
    
      showAnswer.classList.add("container");
      showAnswer.classList.add("blank");
      showAnswer.classList.add("answer-on-show");
       
    });
});
