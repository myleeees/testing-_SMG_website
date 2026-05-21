// PAGE NAVIGATION
function showPage(id){
    const pages = document.querySelectorAll('.page');
  
    pages.forEach(page => {
      page.classList.remove('active');
    });
  
    document.getElementById(id).classList.add('active');
  
    // close mobile menu after click
    document.getElementById("navLinks").classList.remove("show");
  
    // scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  
  // MOBILE MENU TOGGLE
  function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("show");
  }
  
  
  // CLOSE MENU WHEN CLICKING OUTSIDE (optional but good UX)
  document.addEventListener("click", function(e){
    const nav = document.querySelector(".nav-container");
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");
  
    if (!nav.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });
  
  
  // ACTIVE NAV HIGHLIGHT (optional upgrade)
  const navItems = document.querySelectorAll(".nav-links li");
  
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });