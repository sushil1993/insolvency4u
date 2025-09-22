
(function(){
  const header = document.querySelector('header');
  const onScroll = () => { if(window.scrollY > 8) header.classList.add('scrolled'); else header.classList.remove('scrolled'); };
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15}) : null;
  document.querySelectorAll('.reveal').forEach(el=>{ if(io) io.observe(el); else el.classList.add('in'); });
})();
