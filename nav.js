// En-tête + footer type paris-sud.com — Espace Paris Sud
(function(){
  var I={
    home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
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
    mega:'<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 8a4 4 0 0 1 0 8"/>',
    sop:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.2V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.2-2.7H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 4.6V4a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.2 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>'
  };
  function logoSVG(id){return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="'+id+'"><circle cx="40" cy="50" r="18"/></clipPath></defs><circle cx="50" cy="50" r="45" fill="#fff" stroke="#2f4a63" stroke-width="8"/><circle cx="40" cy="50" r="18" fill="#00e676"/><circle cx="60" cy="50" r="18" fill="#0a7d6e"/><g clip-path="url(#'+id+')"><circle cx="60" cy="50" r="18" fill="#fff"/></g></svg>';}
  function opco(txt){return '<span class="opco-badge" style="color:'+txt+'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.6" stroke-linecap="round"><path d="M3 8V4a1 1 0 0 1 1-1h4" stroke="#8cc63f"/><path d="M16 3h4a1 1 0 0 1 1 1v4" stroke="#00a88e"/><path d="M21 16v4a1 1 0 0 1-1 1h-4" stroke="#00a88e"/><path d="M8 21H4a1 1 0 0 1-1-1v-4" stroke="#8cc63f"/><circle cx="12" cy="12" r="3.1" fill="#00a88e" stroke="none"/></svg>OPCO Mobilités</span>';}
  var items=[
    ['accueil','Accueil','index.html',I.home],
    ['pilotage','Pilotage','pilotage.html',I.rocket],
    ['contrats','Contrats','contrats.html',I.day],
    ['journee','Ma journée','journee.html',I.day],
    ['qualif','Qualification','qualification.html',I.phone],
    ['audit','Audit IA','audit.html',I.audit],
    ['scripts','Scripts & Pitch','scripts.html',I.script],
    ['playbook','Objections','playbook.html',I.book],
    ['formation','Formation','formation.html',I.grad],
    ['offres','Offres','offres.html',I.tag],
    ['process','Process','process.html',I.flow],
    ['opco','Compte OPCO','opco.html',I.opco],
    ['contenu','Contenu','contenu.html',I.mega],
    ['sop','SOP','sop.html',I.sop]
  ];
  var page=document.body.getAttribute('data-page')||'';
  var nav=items.map(function(it){
    return '<a href="'+it[2]+'" class="'+(it[0]===page?'active':'')+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">'+it[3]+'</svg>'+it[1]+'</a>';
  }).join('');
  var side=document.getElementById('side');
  if(side){
    side.innerHTML=
      '<div class="utilbar"><div class="w"><span class="gps">'+logoSVG('lgu')+' Groupe Paris Sud</span>'
        +'<span class="ulinks"><a href="https://paris-sud.com" target="_blank" rel="noopener">Paris Sud Formation</a><a href="https://groupegaf.fr" target="_blank" rel="noopener">GAF Transport ↗</a></span></div></div>'
      +'<div class="brandbar"><div class="w"><a class="brand" href="index.html">'+logoSVG('lgb')+' Paris Sud <span class="g">Formation</span></a>'
        +'<a class="cta" href="https://calendly.com/paris-sud/com" target="_blank" rel="noopener">Audit gratuit &rarr;</a></div></div>'
      +'<div class="topnav"><div class="w"><div class="nav">'+nav+'</div></div></div>';
  }
  // footer + bouton flottant WhatsApp
  var main=document.querySelector('.main');
  if(main){
    var f=document.createElement('footer');f.className='foot-site';
    f.innerHTML='<div class="cols">'
      +'<div><h4>Espace</h4><a href="index.html">Accueil agents</a><a href="pilotage.html">Pilotage dirigeant</a><a href="qualification.html">Qualification</a><a href="playbook.html">Objections</a></div>'
      +'<div><h4>Outils clés</h4><a href="https://airtable.com/appaAZXNf5RFf89WV/pagFIIF8dl5vDMjV6" target="_blank" rel="noopener">Cockpit leads</a><a href="https://airtable.com/appaAZXNf5RFf89WV/pagj9RlR1OveO6TAi" target="_blank" rel="noopener">Cockpit prospects</a><a href="https://paris-sud.ypareo-neo.com" target="_blank" rel="noopener">YPAREO Neo</a><a href="https://mgestion.opcomobilites.fr" target="_blank" rel="noopener">OPCO Mobilités</a></div>'
      +'<div><h4>Paris Sud Formation</h4><a href="mailto:formation@paris-sud.com">formation@paris-sud.com</a><a href="https://paris-sud.com" target="_blank" rel="noopener">paris-sud.com</a><div style="margin-top:8px">'+opco('#ffffff')+'</div></div>'
      +'</div>'
      +'<div class="foot-badges"><span class="foot-badge">✓ Certifié Qualiopi</span><span class="foot-badge">'+opco('#ffffff')+'</span><span class="foot-badge">Partenaire CCI</span><span class="foot-badge">France Compétences · RNCP 38575</span><span class="foot-badge">Ministère de la Transition Écologique</span></div>'
      +'<div class="foot-legal">Paris Sud Formation · CFA certifié Qualiopi · N° DA 11911094991 · Titre RNCP38575 (Niveau 5) · <b>Habilité OPCO Mobilités</b>. <b>Outil interne agents — ne pas diffuser aux prospects.</b></div>';
    main.appendChild(f);
  }
  var wa=document.createElement('a');wa.className='fabwa';wa.href='https://web.whatsapp.com';wa.target='_blank';wa.rel='noopener';wa.title='WhatsApp';
  wa.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.7 14.1c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4.1.2.1.9-.1 1.6z"/></svg>';
  document.body.appendChild(wa);
})();
