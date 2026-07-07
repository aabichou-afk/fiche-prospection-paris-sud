// Sidebar gauche + footer — Espace Paris Sud (CRM premium)
(function(){
  var I={
    home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 11h18"/>',
    crm:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/>',
    rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0z"/><path d="M12 15l-3-3a22 22 0 0 1 8-10 6 6 0 0 1 5 5 22 22 0 0 1-10 8z"/><path d="M15 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>',
    day:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>',
    audit:'<path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    script:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    book:'<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    grad:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
    tag:'<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    flow:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a2 2 0 0 1 2 2v7"/>',
    opco:'<path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/>',
    euro:'<path d="M17.5 5.5a7 7 0 1 0 0 13"/><path d="M3 10h9M3 14h9"/>',
    doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>',
    mega:'<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 8a4 4 0 0 1 0 8"/>',
    sop:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.2V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.2-2.7H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 4.6V4a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.2 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>'
  };
  function logoSVG(id){return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="'+id+'"><circle cx="40" cy="50" r="18"/></clipPath></defs><circle cx="50" cy="50" r="45" fill="#fff" stroke="#11362b" stroke-width="8"/><circle cx="40" cy="50" r="18" fill="#00e676"/><circle cx="60" cy="50" r="18" fill="#0a7d6e"/><g clip-path="url(#'+id+')"><circle cx="60" cy="50" r="18" fill="#fff"/></g></svg>';}
  function opco(txt){return '<span class="opco-badge" style="color:'+txt+'"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2.6" stroke-linecap="round"><path d="M3 8V4a1 1 0 0 1 1-1h4" stroke="#8cc63f"/><path d="M16 3h4a1 1 0 0 1 1 1v4" stroke="#00a88e"/><path d="M21 16v4a1 1 0 0 1-1 1h-4" stroke="#00a88e"/><path d="M8 21H4a1 1 0 0 1-1-1v-4" stroke="#8cc63f"/><circle cx="12" cy="12" r="3.1" fill="#00a88e" stroke="none"/></svg>OPCO Mobilités</span>';}

  var META={
    accueil:['Accueil','index.html',I.home], pilotage:['Pilotage','pilotage.html',I.rocket],
    crm:['CRM','crm.html',I.crm], contrats:['Contrats','contrats.html',I.folder],
    financement:['Financement','financement.html',I.euro], documents:['Documents','documents.html',I.doc],
    journee:['Ma journée','journee.html',I.day],
    qualif:['Qualification','qualification.html',I.phone], audit:['Audit IA','audit.html',I.audit],
    scripts:['Scripts & Pitch','scripts.html',I.script], playbook:['Objections','playbook.html',I.book],
    formation:['Formation','formation.html',I.grad], offres:['Offres','offres.html',I.tag],
    process:['Process','process.html',I.flow], opco:['Compte OPCO','opco.html',I.opco],
    contenu:['Contenu','contenu.html',I.mega], sop:['SOP','sop.html',I.sop]
  };
  var GROUPS=[
    ['Pilotage',['accueil','pilotage','crm','contrats','financement','journee']],
    ['Vente',['qualif','audit','scripts','playbook']],
    ['Formation & offre',['formation','offres','process','opco']],
    ['Contenu',['contenu','sop','documents']]
  ];
  var page=document.body.getAttribute('data-page')||'';
  var navHtml=GROUPS.map(function(g){
    return '<div class="sb-grp">'+g[0]+'</div>'+g[1].map(function(k){var it=META[k];
      return '<a href="'+it[1]+'" class="sb-link'+(k===page?' active':'')+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">'+it[2]+'</svg><span>'+it[0]+'</span></a>';
    }).join('');
  }).join('');

  var side=document.getElementById('side');
  if(side){
    side.className='side';
    side.innerHTML=
      '<a class="sb-brand" href="index.html">'+logoSVG('lgb')+'<span class="sb-bt">Paris Sud<b>Formation</b></span></a>'
      +'<div class="sb-nav">'+navHtml+'</div>'
      +'<div class="sb-foot">'
        +'<a class="sb-cta" href="https://calendly.com/paris-sud/com" target="_blank" rel="noopener">🎯 Audit gratuit</a>'
        +'<div class="sb-badge">'+opco('#eafff3')+'</div>'
        +'<div class="sb-legal">Habilité OPCO Mobilités · Qualiopi · RNCP 38575<br>Outil interne — ne pas diffuser.</div>'
      +'</div>';
  }
  // scrim (mobile) — s'assurer qu'il existe
  var scrim=document.getElementById('scrim');
  if(!scrim){scrim=document.createElement('div');scrim.id='scrim';scrim.className='scrim';document.querySelector('.app').appendChild(scrim);}
  // burger toggle (mobile)
  function toggle(open){document.body.classList[open?'add':'remove']('sb-open');}
  var burger=document.getElementById('burger');
  if(burger)burger.addEventListener('click',function(){toggle(!document.body.classList.contains('sb-open'));});
  scrim.addEventListener('click',function(){toggle(false);});
  document.querySelectorAll('.sb-link').forEach(function(a){a.addEventListener('click',function(){toggle(false);});});

  // bouton flottant WhatsApp
  var wa=document.createElement('a');wa.className='fabwa';wa.href='https://web.whatsapp.com';wa.target='_blank';wa.rel='noopener';wa.title='WhatsApp';
  wa.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.7 14.1c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4.1.2.1.9-.1 1.6z"/></svg>';
  document.body.appendChild(wa);
})();
