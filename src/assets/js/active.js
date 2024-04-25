const activePage = window.location.pathname;
console.log(activePage);
console.log(activePage);

const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(link => {
  if(link.href.includes(`${activePage}`)){
    console.log(activePage);
    link.classList.add('active');
  };
});