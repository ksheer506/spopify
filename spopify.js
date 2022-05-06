document.addEventListener("DOMContentLoaded", (e) => {
  const hamburger = document.querySelector(".hamburger");
  
  hamburger.addEventListener('change', (e) => {
    
    if (e.target.checked) {
      document.body.classList.add("sideMenu-opened")
    }
    else {
      document.body.classList.remove("sideMenu-opened")
    }
  })
})