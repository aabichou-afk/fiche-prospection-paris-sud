// Porte d'accès par mot de passe — Espace Paris Sud (déterrent côté navigateur)
(function(){
  var OK='83b4ac00d574d4b484c45efd3899c72402092e8c54727e09486cb7ff106fcfc0';
  try{ if(sessionStorage.getItem('psf_gate')===OK) return; }catch(e){}
  var hide=document.createElement('style');
  hide.textContent='.app{display:none!important}';
  (document.head||document.documentElement).appendChild(hide);
  function sha(t){return crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')})}
  function build(){
    var o=document.createElement('div');
    o.id='psfgate';
    o.style.cssText='position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;font-family:Inter,system-ui,sans-serif;background:linear-gradient(135deg,#11362b,#1f6f5c,#1f8a5c)';
    o.innerHTML='<div style="background:#fff;border-radius:18px;padding:30px 28px;max-width:360px;width:100%;box-shadow:0 30px 70px -20px rgba(0,0,0,.5);text-align:center">'
      +'<svg width="76" height="76" viewBox="0 0 100 100" style="display:block;margin:0 auto 8px"><defs><clipPath id="lgg"><circle cx="40" cy="50" r="18"/></clipPath></defs><circle cx="50" cy="50" r="45" fill="#fff" stroke="#2f4a63" stroke-width="8"/><circle cx="40" cy="50" r="18" fill="#00e676"/><circle cx="60" cy="50" r="18" fill="#0a7d6e"/><g clip-path="url(#lgg)"><circle cx="60" cy="50" r="18" fill="#fff"/></g></svg>'
      +'<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-size:1.3rem;font-weight:700;color:#11362b">Paris Sud <span style="color:#1f8a5c">Formation</span></div>'
      +'<p style="color:#5f6b62;font-size:.9rem;margin:6px 0 18px">Accès réservé — entrez le mot de passe.</p>'
      +'<input id="psfpw" type="password" placeholder="Mot de passe" autofocus style="width:100%;padding:12px 14px;border:1px solid #E4E2D6;border-radius:11px;font-size:1rem;text-align:center">'
      +'<div id="psferr" style="color:#e2553f;font-size:.82rem;height:16px;margin:8px 0 0"></div>'
      +'<button id="psfok" style="width:100%;margin-top:10px;padding:13px;border:none;border-radius:999px;background:#1f8a5c;color:#fff;font-weight:700;font-size:.95rem;cursor:pointer">Entrer</button>'
      +'</div>';
    document.body.appendChild(o);
    var inp=document.getElementById('psfpw'),btn=document.getElementById('psfok'),err=document.getElementById('psferr');
    function tryit(){
      sha(inp.value).then(function(h){
        if(h===OK){ try{sessionStorage.setItem('psf_gate',OK)}catch(e){} o.remove(); hide.remove(); }
        else{ err.textContent='Mot de passe incorrect.'; inp.value=''; inp.focus(); }
      });
    }
    btn.addEventListener('click',tryit);
    inp.addEventListener('keydown',function(e){if(e.key==='Enter')tryit()});
    inp.focus();
  }
  if(document.body)build(); else document.addEventListener('DOMContentLoaded',build);
})();
