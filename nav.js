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
  function logoSVG(id){return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="38" cy="50" r="27" fill="#A7E8C6"/><circle cx="60" cy="50" r="27" fill="#156047"/><path d="M49 26.4a27 27 0 0 1 0 47.2 27 27 0 0 1 0-47.2z" fill="#0c4130"/></svg>';}
  function opco(txt){return '<span class="opco-badge" style="color:'+txt+'"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2.6" stroke-linecap="round"><path d="M3 8V4a1 1 0 0 1 1-1h4" stroke="#8cc63f"/><path d="M16 3h4a1 1 0 0 1 1 1v4" stroke="#00a88e"/><path d="M21 16v4a1 1 0 0 1-1 1h-4" stroke="#00a88e"/><path d="M8 21H4a1 1 0 0 1-1-1v-4" stroke="#8cc63f"/><circle cx="12" cy="12" r="3.1" fill="#00a88e" stroke="none"/></svg>OPCO Mobilités</span>';}

  var META={
    accueil:['Accueil','index.html',I.home], pilotage:['Pilotage','pilotage.html',I.rocket],
    crm:['CRM','crm.html',I.crm], fiche360:['Fiche 360°','fiche360.html',I.audit],
    contrats:['Contrats','contrats.html',I.folder],
    financement:['Financement','financement.html',I.euro], facturation:['Facturation','facturation.html',I.euro],
    documents:['Documents','documents.html',I.doc],
    agenda:['Agenda','agenda.html',I.day],
    journee:['Ma journée','journee.html',I.day],
    qualif:['Qualification','qualification.html',I.phone], audit:['Audit IA','audit.html',I.audit],
    scripts:['Scripts & Pitch','scripts.html',I.script], playbook:['Objections','playbook.html',I.book],
    formation:['Formation','formation.html',I.grad], offres:['Offres','offres.html',I.tag],
    process:['Process','process.html',I.flow], opco:['Compte OPCO','opco.html',I.opco],
    contenu:['Contenu','contenu.html',I.mega], sop:['SOP','sop.html',I.sop]
  };
  var GROUPS=[
    ['Pilotage',['accueil','pilotage','crm','fiche360','contrats','financement','facturation','agenda','journee']],
    ['Vente',['qualif','audit','scripts','playbook']],
    ['Formation & offre',['formation','offres','process','opco']],
    ['Contenu',['contenu','sop','documents']]
  ];
  // Tous les outils externes — liste défilante dans la sidebar (recherche incluse)
  var TOOLS=[
   ['Pilotage & prospection',[
     ['📞','Suivi des appels','https://airtable.com/appaAZXNf5RFf89WV/pagjaeMjeC1CBFWXv'],
     ['🎯','Cockpit — mes leads','https://airtable.com/appaAZXNf5RFf89WV/pagFIIF8dl5vDMjV6'],
     ['📇','Cockpit — Prospects','https://airtable.com/appaAZXNf5RFf89WV/pagj9RlR1OveO6TAi'],
     ['🗂️','Base leads (Airtable)','https://airtable.com/appaAZXNf5RFf89WV']
   ]],
   ['Vente, contrat & financement',[
     ['🏢','Adhésion — Entreprise','https://airtable.com/appaAZXNf5RFf89WV/pagliROW5NttiqP9c/form'],
     ['👤','Adhésion — Salarié','https://airtable.com/appv3OIuP1STIpVgz/pagaIdjkbRKz9ztJK/form'],
     ['📝','YPAREO Neo','https://paris-sud.ypareo-neo.com'],
     ['🏛️','OPCO Mobilités','https://mgestion.opcomobilites.fr'],
     ['📅','Calendly','https://calendly.com/paris-sud/com']
   ]],
   ['Acquisition & contenu',[
     ['📣','Postiz','https://postiz.com'],
     ['📊','Metricool','https://app.metricool.com'],
     ['✉️','lemlist','https://app.lemlist.com/login'],
     ['💬','WATI','https://app.wati.io'],
     ['📓','Notion — Hub','https://app.notion.com/p/Groupe-Paris-Sud-Hub-362f6a5b99ef81bebcc6e32b6f046906'],
     ['📘','Meta Business','https://business.facebook.com'],
     ['📷','Instagram','https://www.instagram.com'],
     ['📘','Facebook','https://www.facebook.com'],
     ['💼','LinkedIn','https://www.linkedin.com'],
     ['🔎','Google Ads','https://ads.google.com'],
     ['🎨','Canva','https://www.canva.com'],
     ['⭐','Trustpilot','https://www.trustpilot.com'],
     ['🌐','Site Paris Sud','https://paris-sud.com']
   ]],
   ['Communication & organisation',[
     ['📧','Hostinger Mail','https://webmail.hostinger.com'],
     ['✉️','Gmail','https://mail.google.com'],
     ['💬','WhatsApp Web','https://web.whatsapp.com'],
     ['📆','Agenda Google','https://calendar.google.com'],
     ['📁','Google Drive','https://drive.google.com']
   ]]
  ];
  var toolCount=TOOLS.reduce(function(a,g){return a+g[1].length;},0);
  var toolsHtml='<div class="sb-toolsbox"><div class="sb-toolshead">🧰 Tous les outils <span class="cnt">'+toolCount+'</span></div>'
    +'<input class="sb-toolsearch" id="toolSearch" placeholder="Chercher un outil…">'
    +'<div class="sb-toolslist" id="toolList">'
    +TOOLS.map(function(g){
      return '<div class="sb-toolgrp">'+g[0]+'</div>'+g[1].map(function(t){
        return '<a class="sb-toolrow" href="'+t[2]+'" target="_blank" rel="noopener" data-name="'+t[1].toLowerCase()+'"><span class="ic">'+t[0]+'</span><span class="nm">'+t[1]+'</span><span class="ext">↗</span></a>';
      }).join('');
    }).join('')
    +'</div></div>';

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
      +toolsHtml
      +'<div class="sb-quickwrap"><div class="sb-grp">⚡ Liens à copier</div>'
        +[['🏢','Adhésion entreprise','https://airtable.com/appaAZXNf5RFf89WV/pagliROW5NttiqP9c/form'],
          ['👤','Adhésion salarié','https://airtable.com/appv3OIuP1STIpVgz/pagaIdjkbRKz9ztJK/form'],
          ['📅','RDV audit (Calendly)','https://calendly.com/paris-sud/com'],
          ['📧','formation@paris-sud.com','formation@paris-sud.com']]
        .map(function(q){return '<div class="sb-quick" data-copy="'+q[2]+'"><span class="qi">'+q[0]+'</span><span class="qt">'+q[1]+'</span><span class="qc">⧉</span>'
          +(q[2].indexOf('http')===0?'<a class="qo" href="'+q[2]+'" target="_blank" rel="noopener" title="Ouvrir">↗</a>':'')+'</div>';}).join('')
      +'</div>'
      +'<div class="sb-foot">'
        +'<a class="sb-cta" href="https://calendly.com/paris-sud/com" target="_blank" rel="noopener">🎯 Audit gratuit</a>'
        +'<div class="sb-badge">'+opco('#1f6f5c')+'</div>'
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

  // topbar façon maquette : recherche à gauche (⌘F) · cloche · avatar ▾ — le titre descend dans le contenu
  var tb=document.querySelector('.topbar');
  if(tb){
    var h1=tb.querySelector('h1'),tag=tb.querySelector('.tag')||tb.querySelector('.conn');
    var content=document.querySelector('.content');
    if(h1&&content){
      if(document.querySelector('.hero-banner')){h1.remove();if(tag&&tag.className.indexOf('conn')<0)tag.remove();}
      else{
        var ph=document.createElement('div');ph.className='page-head';
        ph.appendChild(h1);if(tag)ph.appendChild(tag);
        content.insertBefore(ph,content.firstChild);
      }
    }
    var gs=document.createElement('div');gs.className='gsearch';
    gs.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><input id="gsearchInput" placeholder="Chercher"><span class="kbd">⌘</span><span class="kbd">F</span>';
    var burger=tb.querySelector('.burger');
    if(burger)burger.insertAdjacentElement('afterend',gs);else tb.prepend(gs);
    var inp=gs.querySelector('input');
    inp.addEventListener('keydown',function(e){
      if(e.key==='Enter'&&this.value.trim())location.href='fiche360.html?q='+encodeURIComponent(this.value.trim());
    });
    document.addEventListener('keydown',function(e){
      if((e.metaKey||e.ctrlKey)&&(e.key==='f'||e.key==='F')){e.preventDefault();inp.focus();}
    });
    var me=(window.PSF_AUTH&&window.PSF_AUTH.current())||{id:'Invité',role:''};
    var photo='';try{photo=localStorage.getItem('psf_avatar_'+me.id)||'';}catch(e){}
    var avaInner=photo?'<img src="'+photo+'" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%">':me.id[0];
    var right=document.createElement('div');right.className='tb-right';
    right.innerHTML='<a class="bell" href="agenda.html" title="Échéancier"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg><span class="dot"></span></a>'
      +'<div class="avatar" id="avBtn" style="cursor:pointer"><span class="ava">'+avaInner+'</span><span class="avn">'+me.id+'</span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>'
      +'<div class="avmenu" id="avMenu">'
        +'<div class="avhead"><b>'+me.id+'</b><span>'+(me.role||'')+'</span></div>'
        +'<button data-act="photo">🖼️ Changer ma photo</button>'
        +'<button data-act="pw">🔑 Changer mon mot de passe</button>'
        +'<button data-act="out" class="danger">🚪 Se déconnecter</button>'
      +'</div>'
      +'<input type="file" id="avFile" accept="image/*" style="display:none">'
      +'</div>';
    tb.appendChild(right);
    var menu=document.getElementById('avMenu');
    document.getElementById('avBtn').addEventListener('click',function(e){
      if(e.target.closest('.avmenu'))return;
      menu.classList.toggle('on');
    });
    document.addEventListener('click',function(e){if(!e.target.closest('#avBtn'))menu.classList.remove('on');});
    menu.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){
      var act=b.getAttribute('data-act');menu.classList.remove('on');
      if(act==='out'&&window.PSF_AUTH)window.PSF_AUTH.logout();
      if(act==='photo')document.getElementById('avFile').click();
      if(act==='pw'){
        var oldPw=prompt('Mot de passe actuel :');if(oldPw===null)return;
        var newPw=prompt('Nouveau mot de passe (8 caractères min) :');if(!newPw||newPw.length<8){alert('Trop court.');return;}
        window.PSF_AUTH.changePassword(me.id,oldPw,newPw).then(function(){
          alert('✅ Mot de passe changé sur cet appareil.');
        }).catch(function(err){alert('❌ '+err);});
      }
    });});
    document.getElementById('avFile').addEventListener('change',function(){
      var f=this.files[0];if(!f)return;
      var r=new FileReader();
      r.onload=function(){
        // réduction pour tenir dans le stockage navigateur
        var img=new Image();
        img.onload=function(){
          var c=document.createElement('canvas');var s=Math.min(img.width,img.height);
          c.width=c.height=128;var x=c.getContext('2d');
          x.drawImage(img,(img.width-s)/2,(img.height-s)/2,s,s,0,0,128,128);
          try{localStorage.setItem('psf_avatar_'+me.id,c.toDataURL('image/jpeg',.85));location.reload();}
          catch(e){alert('Image trop lourde.');}
        };
        img.src=r.result;
      };
      r.readAsDataURL(f);
    });
  }

  // recherche dans la liste défilante d'outils
  var tsearch=document.getElementById('toolSearch');
  if(tsearch){
    tsearch.addEventListener('input',function(){
      var f=this.value.toLowerCase().trim();
      var rows=document.querySelectorAll('#toolList .sb-toolrow');
      rows.forEach(function(r){r.style.display=(!f||r.getAttribute('data-name').indexOf(f)>-1)?'flex':'none';});
      document.querySelectorAll('#toolList .sb-toolgrp').forEach(function(g){
        var next=g.nextElementSibling,any=false;
        while(next&&!next.classList.contains('sb-toolgrp')){if(next.style.display!=='none')any=true;next=next.nextElementSibling;}
        g.style.display=any?'block':'none';
      });
    });
  }

  // liens rapides — clic = copier
  document.querySelectorAll('.sb-quick').forEach(function(el){
    el.addEventListener('click',function(e){
      if(e.target.closest('.qo'))return; // la flèche ouvre le lien, ne copie pas
      var v=el.getAttribute('data-copy');
      navigator.clipboard.writeText(v).then(function(){
        var c=el.querySelector('.qc');c.textContent='✓';el.classList.add('copied');
        setTimeout(function(){c.textContent='⧉';el.classList.remove('copied');},1300);
      });
    });
  });

  // bouton flottant WhatsApp
  var wa=document.createElement('a');wa.className='fabwa';wa.href='https://web.whatsapp.com';wa.target='_blank';wa.rel='noopener';wa.title='WhatsApp';
  wa.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.7 14.1c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4.1.2.1.9-.1 1.6z"/></svg>';
  document.body.appendChild(wa);
})();
