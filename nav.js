// Sidebar partagée — Espace Agents Paris Sud Formation
(function(){
  var I={
    home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    day:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>',
    audit:'<path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    script:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/>',
    book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    grad:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
    tag:'<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    flow:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a2 2 0 0 1 2 2v7"/>',
    opco:'<path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"/>',
    sop:'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1l-.3-2.5H10.4l-.3 2.5a7 7 0 0 0-1.7 1l-2.3-1-2 3.4L6 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.3 2.5h3.2l.3-2.5a7 7 0 0 0 1.7-1l2.3 1 2-3.4L18.9 13a7 7 0 0 0 .1-1z"/>'
  };
  var items=[
    ['accueil','Accueil','index.html',I.home],
    ['journee','Ma journée','journee.html',I.day],
    ['qualif','Qualification','qualification.html',I.phone],
    ['audit','Audit IA','audit.html',I.audit],
    ['scripts','Scripts & Pitch','scripts.html',I.script],
    ['playbook','Objections & Playbook','playbook.html',I.book],
    ['formation','Formation','formation.html',I.grad],
    ['offres','Offres & Financement','offres.html',I.tag],
    ['process','Process & Admin','process.html',I.flow],
    ['opco','Aide compte OPCO','opco.html',I.opco],
    ['sop','SOP — Réseaux & contenu','sop.html',I.sop]
  ];
  var page=document.body.getAttribute('data-page')||'';
  var nav=items.map(function(it){
    return '<a href="'+it[2]+'" class="'+(it[0]===page?'active':'')+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">'+it[3]+'</svg>'+it[1]+'</a>';
  }).join('');
  var side=document.getElementById('side');
  if(side){
    side.innerHTML='<div class="logo"><span class="dot">P</span> Paris Sud · Agents</div>'
      +'<div class="lab">Espace de travail</div><div class="nav">'+nav+'</div>'
      +'<div class="foot">Outil interne — usage agents.<br>Ne pas diffuser aux prospects.</div>';
  }
  var b=document.getElementById('burger'),sc=document.getElementById('scrim');
  if(b){b.addEventListener('click',function(){side.classList.toggle('open');sc.classList.toggle('open');});}
  if(sc){sc.addEventListener('click',function(){side.classList.remove('open');sc.classList.remove('open');});}
})();
