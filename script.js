
document.addEventListener('DOMContentLoaded', function(){
  function smoothScrollTo(selector){
    const el = document.querySelector(selector);
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const offsetTop = window.pageYOffset + rect.top - 70;
    window.scrollTo({top: offsetTop, behavior: 'smooth'});
  }

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      smoothScrollTo(a.getAttribute('href'));
    });
  });

  const book = document.getElementById('bookBtn');
  if(book){
    book.addEventListener('click', ()=>smoothScrollTo('#contact'));
  }
});
