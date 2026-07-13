// Comptes Espace Paris Sud — connexion par profil (déterrent côté navigateur, pas une sécurité forte)
// Chaque membre a son mot de passe. Changement possible depuis le menu avatar (stocké sur CET appareil).
(function(){
  var USERS=[
    {id:'Abdel',    role:'Direction',   hash:'83b4ac00d574d4b484c45efd3899c72402092e8c54727e09486cb7ff106fcfc0'},
    {id:'Souleyman',role:'Admin PSF',   hash:'db559c86f264d6d7cf06df9b06cfc66ad69ccf810b4d2b9a93e92b55ebcf295f'},
    {id:'Agente 1', role:'Commerciale', hash:'9fd2f3c6e2349df2e1acd055f520cb9151538cb684efaf3270acf76249359bf9'},
    {id:'Agente 2', role:'Commerciale', hash:'a0a0a9538647e6a1810afd65651b3f3bcc540e77d970e9765579aec80d40263a'}
  ];
  function hashOf(u){ try{return localStorage.getItem('psf_pw_'+u.id)||u.hash;}catch(e){return u.hash;} }
  function sha(t){return crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')});}

  // API globale (utilisée par nav.js : avatar, menu, déconnexion)
  window.PSF_AUTH={
    users:USERS,
    current:function(){ try{var u=sessionStorage.getItem('psf_user');var h=sessionStorage.getItem('psf_sess');
      var rec=USERS.filter(function(x){return x.id===u})[0];
      return (rec&&h===hashOf(rec))?rec:null; }catch(e){return null;} },
    logout:function(){ try{sessionStorage.removeItem('psf_user');sessionStorage.removeItem('psf_sess');}catch(e){} location.reload(); },
    changePassword:function(user,oldPw,newPw){
      var rec=USERS.filter(function(x){return x.id===user})[0]; if(!rec)return Promise.reject('Profil inconnu');
      return sha(oldPw).then(function(h){ if(h!==hashOf(rec))throw 'Mot de passe actuel incorrect';
        return sha(newPw); }).then(function(nh){ localStorage.setItem('psf_pw_'+rec.id,nh);
        sessionStorage.setItem('psf_sess',nh); return true; });
    }
  };

  if(window.PSF_AUTH.current())return; // déjà connecté

  var hide=document.createElement('style');
  hide.textContent='.app{display:none!important}';
  (document.head||document.documentElement).appendChild(hide);

  function build(){
    var o=document.createElement('div');
    o.id='psfgate';
    o.style.cssText='position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;font-family:Inter,system-ui,sans-serif;background:#F7F9F8';
    var userBtns=USERS.map(function(u,i){
      return '<button data-u="'+i+'" class="pu" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 12px;border:1.5px solid #E9EEEC;border-radius:12px;background:#fff;cursor:pointer;font-family:inherit;text-align:left;transition:.13s">'
        +'<span style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#1f8a5c,#1f6f5c);color:#fff;font-weight:800;display:grid;place-items:center;font-size:.85rem">'+u.id[0]+'</span>'
        +'<span><b style="color:#1e2a3a;font-size:.92rem">'+u.id+'</b><br><span style="color:#7a8781;font-size:.74rem">'+u.role+'</span></span></button>';
    }).join('');
    o.innerHTML='<div style="background:#fff;border:1px solid #E9EEEC;border-radius:22px;padding:30px 28px;max-width:380px;width:100%;box-shadow:0 30px 70px -30px rgba(17,54,43,.35)">'
      +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">'
      +'<svg width="40" height="40" viewBox="0 0 100 100"><circle cx="38" cy="50" r="27" fill="#A7E8C6"/><circle cx="60" cy="50" r="27" fill="#156047"/><path d="M49 26.4a27 27 0 0 1 0 47.2 27 27 0 0 1 0-47.2z" fill="#0c4130"/></svg>'
      +'<div style="font-family:Poppins,system-ui,sans-serif;font-size:1.15rem;font-weight:800;color:#1e2a3a">Paris Sud <span style="color:#1f8a5c">Formation</span></div></div>'
      +'<p style="color:#7a8781;font-size:.86rem;margin:2px 0 16px">Choisissez votre profil pour continuer.</p>'
      +'<div id="pusers" style="display:grid;gap:8px">'+userBtns+'</div>'
      +'<div id="pstep2" style="display:none">'
      +'<button id="pback" style="background:none;border:none;color:#7a8781;font-size:.8rem;cursor:pointer;padding:0;margin-bottom:10px;font-family:inherit">← changer de profil</button>'
      +'<div id="pwho" style="font-weight:700;color:#1e2a3a;margin-bottom:8px"></div>'
      +'<input id="psfpw" type="password" placeholder="Mot de passe" style="width:100%;padding:12px 14px;border:1.5px solid #E9EEEC;border-radius:12px;font-size:1rem;font-family:inherit">'
      +'<div id="psferr" style="color:#e2553f;font-size:.8rem;height:16px;margin:8px 0 0"></div>'
      +'<button id="psfok" style="width:100%;margin-top:10px;padding:13px;border:none;border-radius:999px;background:#1f8a5c;color:#fff;font-weight:700;font-size:.95rem;cursor:pointer;font-family:inherit">Entrer</button>'
      +'</div></div>';
    document.body.appendChild(o);
    var sel=null;
    o.querySelectorAll('.pu').forEach(function(b){
      b.addEventListener('mouseenter',function(){b.style.borderColor='#1f8a5c'});
      b.addEventListener('mouseleave',function(){b.style.borderColor='#E9EEEC'});
      b.addEventListener('click',function(){
        sel=USERS[+b.getAttribute('data-u')];
        document.getElementById('pusers').style.display='none';
        document.getElementById('pstep2').style.display='block';
        document.getElementById('pwho').textContent='👤 '+sel.id+' — '+sel.role;
        document.getElementById('psfpw').focus();
      });
    });
    document.getElementById('pback').addEventListener('click',function(){
      sel=null;document.getElementById('pstep2').style.display='none';document.getElementById('pusers').style.display='grid';
      document.getElementById('psferr').textContent='';document.getElementById('psfpw').value='';
    });
    function tryit(){
      if(!sel)return;
      sha(document.getElementById('psfpw').value).then(function(h){
        if(h===hashOf(sel)){
          try{sessionStorage.setItem('psf_user',sel.id);sessionStorage.setItem('psf_sess',h);
            localStorage.setItem('crm_me',sel.id);}catch(e){}
          location.reload();
        } else {
          document.getElementById('psferr').textContent='Mot de passe incorrect.';
          document.getElementById('psfpw').value='';document.getElementById('psfpw').focus();
        }
      });
    }
    document.getElementById('psfok').addEventListener('click',tryit);
    document.getElementById('psfpw').addEventListener('keydown',function(e){if(e.key==='Enter')tryit()});
  }
  if(document.body)build(); else document.addEventListener('DOMContentLoaded',build);
})();
