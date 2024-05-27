function toggleMenu() {
    var menuBox = document.getElementById('menu-box');    
    if(menuBox.style.display == "none") { // if is menuBox displayed, hide it
      menuBox.style.display = "block";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "none";
    }
  }