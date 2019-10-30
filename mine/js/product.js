let triggerMove = false;
let lastY = 0;
let descriptionMove = null;
let scrollDirection = 1;
let subMenu = null;
let recommand = null;

window.addEventListener('scroll', function() {

  if (!triggerMove) {

    window.requestAnimationFrame(function() {
      moveRightToView();

      setTimeout(function() {
        triggerMove = false;
      });

    }, 250);

    triggerMove = true;
  }

});

function isSubMenuShow() {
  if (subMenu == null) {
    subMenu = document.getElementById("subMenu");
  }
  var rect = subMenu.getBoundingClientRect();

  return (rect.top + rect.height) > 0;

}

function isRecommandHit() {
  if (recommand == null) {
    recommand = document.getElementById("recommand");
  }
  let recRect = recommand.getBoundingClientRect();
  let desRect = descriptionMove.getBoundingClientRect();
  return (desRect.bottom) + 50 >= recRect.top;

}

function moveRightToView() {

  if (descriptionMove == null) {
    descriptionMove = document.getElementById("descriptionMove");
  }

  if (window.screen.width <= 768) {
    descriptionMove.setAttribute("style", "");
    return;
  }

  scrollDirection = (window.scrollY - lastY) > 0 ? 1 : -1;
  lastY = window.scrollY;

  if (isRecommandHit() && scrollDirection >= 1) {
    return;
  }

  if (isSubMenuShow()) {
    let style = "transform: translate3d(0,0,0);";
    descriptionMove.setAttribute("style", style);

  } else {
    let toMove = -1 * (subMenu.getBoundingClientRect().top + subMenu.getBoundingClientRect().height);
    let scrollHeight = descriptionMove.scrollHeight;
    let rectHeight = descriptionMove.getBoundingClientRect().height;
    if (!scrollHeight) {
      scrollHeight = 0;
    }
    if (!rectHeight) {
      rectHeight = 0;
    }

    if ((toMove + scrollHeight + rectHeight) < (lastY + recommand.getBoundingClientRect().top)) {

      let style = ";backface-visibility: hidden;perspective: 1000;transform: translate3d(0," + (toMove + 50) + "px,0);transition: all cubic-bezier(0.45, 0, 0, 1) .45s;";
      descriptionMove.setAttribute("style", style);
    }

  }

}
