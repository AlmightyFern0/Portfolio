function toggleMenu() {
    var menuBox = document.getElementById('menu-box');    
    if(menuBox.style.height == "fit-content") { // if is menuBox displayed, hide it
      menuBox.style.height = "0px";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.height = "fit-content";
    }
  }