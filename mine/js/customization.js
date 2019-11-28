var choseItemInitialHeight = null;
var fullScreenHeight = null;
var screenDefaultHeight = null;

function toggleFullScreen() {
  // https://developer.mozilla.org/zh-TW/docs/Web/API/Fullscreen_API
  if (!document.fullscreenElement && // alternative standard method
  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    var itemChoose = document.getElementById("itemChoose-wrapper");
    itemChoose.style.height = null; // real vh

  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    var itemChoose = document.getElementById("itemChoose-wrapper");
    itemChoose.style.height = choseItemInitialHeight + "px";

  }
}

function isOnFullScreen() {
  var currentWH = getClientWidthHeight();
  if (fullScreenHeight == null || fullScreenHeight <= 0) {
    if (currentWH.height == screenDefaultHeight) {
      return false;
    } else {
      fullScreenHeight = currentWH.height;
    }
    console.log(fullScreenHeight);
  }
  return currentWH.height == fullScreenHeight;
}

function getClientWidthHeight() {
  // https://stackoverflow.com/questions/3333329/javascript-get-browser-height
  var myWidth = 0, myHeight = 0;
  if (typeof (window.innerWidth) == 'number') {
    // Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    // IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
    // IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return {
    width : myWidth,
    height : myHeight
  };
}

function itemChooseToggle() {
  if (getClientWidthHeight().width > 768) {
    return;
  }
  var expandKey = "expand";
  var itemChoose = document.getElementById("itemChoose-wrapper");
  var itemsFlexContainer = document.getElementById("itemsFlexContainer");
  var zoneControl = document.getElementById("zoneControl");
  var objPrepared = document.getElementById("obj-prepared");
  var bgZonePrepared = document.getElementById("bg-zonePrepare");
  var workmenu = document.getElementById("workmenu");
  var zoneGuide = document.getElementById("zoneGuide");

  if (itemChoose.classList.contains(expandKey)) {
    // reset
    itemChoose.classList.remove(expandKey);
    itemChoose.style.marginTop = null;

    if (isOnFullScreen()) {
      itemChoose.style.height = null;

    } else {
      itemChoose.style.height = choseItemInitialHeight + "px";
    }

    itemsFlexContainer.style.height = null;

    zoneControl.classList.remove(expandKey);
    zoneControl.style.transform = null;

    objPrepared.classList.remove(expandKey);
    objPrepared.style.transform = null;

    bgZonePrepared.classList.remove(expandKey);
    bgZonePrepared.style.transform = null;

    workmenu.classList.remove(expandKey);
    workmenu.style.transform = null;

    zoneGuide.classList.remove(expandKey);
    zoneGuide.style.transform = null;

  } else {
    itemChoose.classList.add(expandKey);

    var adjustHeight = getClientWidthHeight().height / 10;
    if (adjustHeight < 100) {
      adjustHeight = 100;
    }

    itemChoose.style.marginTop = "-" + adjustHeight + "px";
    itemChoose.style.height = (itemChoose.getBoundingClientRect().height + adjustHeight) + "px";
    itemsFlexContainer.style.height = (itemsFlexContainer.getBoundingClientRect().height + adjustHeight) + "px";

    zoneControl.classList.add(expandKey);
    zoneControl.style.transform = "translateY(-" + adjustHeight + "px)";

    objPrepared.classList.add(expandKey);
    objPrepared.style.transform = "translateY(-" + adjustHeight + "px)";

    bgZonePrepared.classList.add(expandKey);
    bgZonePrepared.style.transform = "translateY(-" + adjustHeight + "px)";

    workmenu.classList.add(expandKey);
    workmenu.style.transform = "translateY(-" + (adjustHeight / 3) + "px)";

    zoneGuide.classList.remove(expandKey);
    zoneGuide.style.transform = "translateY(100%)";
  }

}

function setItemChooseFill() {
  var itemChoose = document.getElementById("itemChoose-wrapper");
  var icRect = itemChoose.getBoundingClientRect();

  if (screenDefaultHeight == null) {
    // only apply in first time
    var cwh = getClientWidthHeight();
    screenDefaultHeight = cwh.height;
  }

  // window.alert(getClientWidthHeight().height);
  if (icRect.bottom >= cwh.height) {
    var setHeight = (icRect.height - (icRect.bottom - cwh.height));

    if (choseItemInitialHeight == null) {
      // only apply in first time
      choseItemInitialHeight = setHeight;
      // window.alert("set height choseItemInitialHeight" + choseItemInitialHeight);
      console.log("set height choseItemInitialHeight " + choseItemInitialHeight);
    }

    itemChoose.style.height = setHeight + "px";
  } else {
    itemChoose.style.height = null;
  }
  console.log(icRect);
}

// toggleFullScreen();
window.addEventListener('resize', function(event) {

}, true);

setItemChooseFill();