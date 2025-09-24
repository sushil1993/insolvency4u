(function(){
  const header = document.querySelector('header');

  // --- Scroll effect on header ---
  const onScroll = () => {
    if(window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // --- Reveal animations ---
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(e.isIntersecting){
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, {threshold:0.15})
    : null;
  document.querySelectorAll('.reveal').forEach(el=>{
    if(io) io.observe(el);
    else el.classList.add('in');
  });

  // --- Mobile nav toggle (safe addition) ---
  const btn = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.nav-panel');
  if(btn && panel){
    btn.addEventListener('click', ()=>{
      const open = panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? '✕' : '☰';
    });
  }
})();
