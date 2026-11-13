(function(){
  var games = ["Pokémon","Yu-Gi-Oh!","One Piece","Graded slabs","Japanese imports","Vintage WOTC","99¢ singles"];
  var once = games.map(function(g){return "<span>"+g+"</span><i>✦</i>";}).join("");
  document.getElementById("ticker").innerHTML = once + once + once + once;

  document.getElementById("searchBtn").addEventListener("click", function(){
    setTimeout(function(){ document.getElementById("q").focus(); }, 400);
  });

  var burger = document.getElementById("burger"), drawer = document.getElementById("drawer");
  burger.addEventListener("click", function(){
    var open = drawer.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  drawer.addEventListener("click", function(e){ if(e.target.tagName==="A"){ drawer.classList.remove("open"); burger.setAttribute("aria-expanded","false"); }});

  var E = function(id){ return "https://www.ebay.com/itm/" + id; };
  // [title, price, wasPrice, itemId, game, tag, cardLabel, colorA, colorB, grade]
  var FEATURED = [
    ["Charizard V 260 Ultra Premium SWSH Black Star Promo PSA 10",624.99,null,"377525527914","pokemon","graded","Charizard V","#ff8a3d","#8f1b10","PSA 10"],
    ["Lugia V 186/195 Silver Tempest PSA 9",499.99,null,"377525527921","pokemon","graded","Lugia V","#cfd9ff","#2b3a8f","PSA 9"],
    ["Pikachu 241/236 Secret Rare Cosmic Eclipse Holo NM",199.99,null,"377524082766","pokemon","","Pikachu","#ffe57a","#b77d06",""],
    ["Haunter 027 Black Star Promo Mega Gengar ex Battle Deck CGC 10",159.99,null,"377563903569","pokemon","graded","Haunter","#ffd86b","#6b4500","CGC 10"],
    ["Mew GG10/GG70 Crown Zenith Galarian Gallery Holo NM",69.34,72.99,"377524082782","pokemon","","Mew","#fff0b0","#9a6a00",""]
  ];
  var ITEMS = [
    ["Charmander 044 Scarlet & Violet Promo Holo NM",56.99,59.99,"377524082555","pokemon","","Charmander","#ff9a5a","#8f2a0f"],
    ["Dragonite 5 Wizards Black Star Promo NM",52.24,54.99,"377526591320","pokemon","vintage","Dragonite","#ffc56b","#9a5a12"],
    ["Aerodactyl 1/62 Fossil Prerelease 1st Edition Holo LP",48.44,50.99,"377526591068","pokemon","vintage","Aerodactyl","#c7b8a3","#5a4a35"],
    ["Mewtwo 052 151 Ultra-Premium Collection SV Promo PSA 7",42.74,44.99,"377525527905","pokemon","graded","Mewtwo","#ffe48a","#7a5200","PSA 7"],
    ["Dark Exeggutor 33/105 Neo Destiny 1st Edition NM",21.84,22.99,"377526591240","pokemon","vintage","Dark Exeggutor","#7fd18b","#1f4a26"],
    ["Cinderace V 035/192 Rebel Clash PSA 9",18.99,19.99,"377525527924","pokemon","graded","Cinderace V","#ff6b6b","#7a1a1a","PSA 9"],
    ["Articuno 132/128 ME: 30th Celebration Holo NM",14.24,14.99,"377526591043","pokemon","","Articuno","#9fe3ff","#1a5a80"],
    ["Suicune V 173/203 Evolving Skies Holo NM",9.49,9.99,"377518937449","pokemon","","Suicune V","#8fd6ff","#174a7a"],
    ["Dark Magician LC01-EN005 Quarter Century Secret Rare NM",7.59,7.99,"377565716298","yugioh","","Dark Magician","#ffcf4d","#5c3a00"],
    ["Gengar 066/196 Lost Origin Reverse Holo NM",5.69,5.99,"377563803210","pokemon","","Gengar","#f5c242","#664200"],
    ["Red-Eyes Black Dragon MGED-EN003 Premium Gold Rare 1st Ed LP",5.69,5.99,"377565247315","yugioh","","Red-Eyes","#ff5a5a","#3a0a0a"],
    ["Swablu GG27/GG70 Crown Zenith Galarian Gallery Holo NM",5.69,5.99,"377518937352","pokemon","","Swablu","#a8e6ff","#2a6a8a"],
    ["Snorlax (Cosmos Holo) 055/078 NM",5.69,5.99,"377563837244","pokemon","","Snorlax","#7fb8c9","#1f4a5a"],
    ["Mew V 113/264 Fusion Strike Holo NM",4.74,4.99,"377511562961","pokemon","","Mew V","#fff3c4","#8f6200"],
    ["Alolan Ninetales 28/147 Burning Shadows Reverse Holo NM",2.85,3.00,"377588483931","pokemon","","Alolan Ninetales","#d6f2ff","#4a7a9a"],
    ["Blue-Eyes White Dragon LC01-EN004 Ultra Rare NM",2.84,2.99,"377565716272","yugioh","","Blue-Eyes","#bfe0ff","#1a3a6a"],
    ["Abra / Kadabra / Alakazam 3-Card Lot Twilight Masquerade RH NM",2.84,2.99,"377551016260","pokemon","","Alakazam Line","#ffd98a","#7a5a1a"],
    ["Pikachu 35/108 Evolutions NM",1.90,2.00,"377589028182","pokemon","","Pikachu","#fff07a","#a88a0a"],
    ["The Winged Dragon of Ra LC01-EN003 Ultra Rare NM",1.89,1.99,"377565716277","yugioh","","Winged Dragon of Ra","#ffd84d","#7a4a00"],
    ["Squirtle 015/078 Pokémon GO Reverse Holo NM",1.89,1.99,"377547628350","pokemon","","Squirtle","#8fd0ff","#1a5a8a"],
    ["Charmeleon 10/108 Evolutions Reverse Holo NM",1.13,1.19,"377588483963","pokemon","","Charmeleon","#ff8a5a","#8a2a0a"],
    ["Dusknoir 53/147 Burning Shadows Holo NM",1.00,null,"377588483939","pokemon","","Dusknoir","#8a8aa8","#2a2a40"],
    ["Terrakion SM223 Sun & Moon Black Star Promo Holo NM",0.99,null,"377588953420","pokemon","","Terrakion","#d9b38a","#5a3a1a"],
    ["Regieleki 051/189 Astral Radiance NM",0.99,null,"377589117506","pokemon","","Regieleki","#fff38a","#6a7a1a"]
  ];
  function money(n){ return "$" + n.toFixed(2); }
  function gameName(g){ return g==="yugioh" ? "Yu-Gi-Oh!" : g==="onepiece" ? "One Piece" : "Pokémon"; }
  function card(it,idx){
    var title=it[0], price=it[1], was=it[2], id=it[3], game=it[4], label=it[6], a=it[7], b=it[8], grade=it[9]||"";
    var pills = '<div class="pills"><span class="pill stock">In stock</span>'+(was?'<span class="pill sale">Sale</span>':'')+'</div>';
    var slabCls = grade ? ' slabbed" data-g="'+grade : '';
    return '<a class="p" style="--i:'+(idx%8)+'" href="'+E(id)+'" target="_blank" rel="noopener">'+
      '<div class="shot">'+pills+
        '<div class="mini'+slabCls+'" style="position:relative"><div class="face" style="background:linear-gradient(160deg,'+a+','+b+')">'+label+'</div></div>'+
      '</div>'+
      '<div class="info"><span class="cat">'+gameName(game)+'</span><span class="ttl">'+title+'</span>'+
      '<div class="price">'+(was?'<s>'+money(was)+'</s>':'')+'<b>'+money(price)+'</b><em>USD</em></div></div></a>';
  }
  document.getElementById("featGrid").innerHTML = FEATURED.map(card).join("");

  var filter="all", q="", sort="featured";
  function render(){
    var list = ITEMS.filter(function(it){
      if(filter==="pokemon" && it[4]!=="pokemon") return false;
      if(filter==="yugioh" && it[4]!=="yugioh") return false;
      if(filter==="graded" && it[5]!=="graded") return false;
      if(filter==="vintage" && it[5]!=="vintage") return false;
      if(filter==="budget" && it[1]>=5) return false;
      return !q || it[0].toLowerCase().indexOf(q) > -1;
    });
    if(sort==="low") list = list.slice().sort(function(a,b){return a[1]-b[1];});
    if(sort==="high") list = list.slice().sort(function(a,b){return b[1]-a[1];});
    document.getElementById("count").textContent = list.length + (list.length===1 ? " card" : " cards");
    document.getElementById("shopGrid").innerHTML = list.length ? list.map(card).join("") :
      '<div class="empty">No matches here. <a class="va" style="color:#FFD21F" target="_blank" rel="noopener" href="https://www.ebay.com/sch/i.html?_ssn=emiliohernz&store_name=hernztcg&_nkw='+encodeURIComponent(q)+'">Search the full store on eBay →</a></div>';
  }
  document.getElementById("filters").addEventListener("click", function(e){
    var b = e.target.closest("button"); if(!b) return;
    var all = document.querySelectorAll("#filters .chip");
    for(var i=0;i < all.length;i++) all[i].classList.remove("on");
    b.classList.add("on"); filter = b.dataset.f; render();
  });
  document.getElementById("q").addEventListener("input", function(e){ q = e.target.value.trim().toLowerCase(); render(); });
  document.getElementById("sort").addEventListener("change", function(e){ sort = e.target.value; render(); });
  render();

  function S(n,id){ return '<a target="_blank" rel="noopener" href="https://www.ebay.com/sch/i.html?_ssn=emiliohernz&store_name=hernztcg&store_cat='+id+'">'+n+'</a>'; }
  var GROUPS = [
    ["Mega Evolution & Scarlet & Violet",[["Mega Evolution",86415745013],["Phantasmal Flames",86415754013],["ME 30th Celebration",86415741013],["Ascended Heroes",86415702013],["Perfect Order",86415753013],["Chaos Rising",86415713013],["Pitch Black",86415755013],["Destined Rivals",86415720013],["Journey Together",86415734013],["Prismatic Evolutions",86415757013],["Surging Sparks",86415768013],["Twilight Masquerade",86415775013],["Temporal Forces",86415772013],["Paldean Fates",86415700013],["Paradox Rift",86415752013],["151",86415697013],["Obsidian Flames",86415751013],["Paldea Evolved",86415698013],["Scarlet & Violet",86415701013],["S&V Promos",86415763013]]],
    ["Sword & Shield",[["Crown Zenith",86415717013],["Silver Tempest",86415765013],["Lost Origin",86415739013],["Pokémon GO",86415783013],["Astral Radiance",86415703013],["Brilliant Stars",86415710013],["Fusion Strike",86415726013],["Evolving Skies",86415722013],["Chilling Reign",86415714013],["Battle Styles",86415709013],["Vivid Voltage",86415777013],["Champion's Path",86415712013],["Darkness Ablaze",86415718013],["Rebel Clash",86415761013],["Sword & Shield",86415769013],["SWSH Promos",86415770013]]],
    ["Sun & Moon, XY & older",[["Cosmic Eclipse",86415715013],["Hidden Fates",86415731013],["Lost Thunder",86415740013],["Forbidden Light",86415723013],["Shining Legends",86415764013],["Crimson Invasion",86415716013],["Burning Shadows",86415711013],["Guardians Rising",86415728013],["Sun & Moon",86415766013],["Evolutions",86415721013],["BREAKthrough",86415705013],["Primal Clash",86415756013],["Furious Fists",86415725013],["XY Promos",86415779013],["Legendary Treasures",86415736013],["Next Destinies",86415750013],["Great Encounters",86415727013]]],
    ["Vintage",[["Base Set",86415706013],["Jungle",86415735013],["Fossil",86415724013],["Base Set 2",86415707013],["Team Rocket",86415771013],["Gym Heroes",86415730013],["Gym Challenge",86415729013],["Neo Genesis",86415748013],["Neo Discovery",86415747013],["Neo Revelation",86415749013],["Neo Destiny",86415746013],["Wizards Black Star Promos",86415778013]]],
    ["Japanese",[["MEGA Dream ex",86415699013],["Infinity Zone",86415732013],["Jet Black Spirit",86415733013],["Mega Brave",86415744013],["VSTAR Universe",86415776013],["151 Japanese",86415781013],["Gengar VMAX High Class Deck",86415782013],["Gym Japanese",86415786013]]],
    ["Specials",[["Trading Card Game Classic",86415773013],["Trick or Trade",86415774013],["McDonald's 25th",86415743013],["Deck Exclusives",86415719013],["Misc. Cards & Products",86415787013]]]
  ];
  document.getElementById("setGroups").innerHTML = GROUPS.map(function(g){
    return '<div class="setgroup"><h4>'+g[0]+'</h4><div class="sets">'+g[1].map(function(s){return S(s[0],s[1]);}).join("")+'</div></div>';
  }).join("");
  document.getElementById("yr").textContent = new Date().getFullYear();

  var slides=document.querySelectorAll("#hero .slide"), dbtn=document.querySelectorAll("#dots button"), cur=0, timer=null;
  function go(n){ cur=(n+slides.length)%slides.length;
    for(var k=0;k < slides.length;k++){ slides[k].classList.toggle("on",k===cur); dbtn[k].classList.toggle("on",k===cur); slides[k].setAttribute("aria-hidden",k===cur?"false":"true"); } }
  function play(){ if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches) return; clearInterval(timer); timer=setInterval(function(){go(cur+1);},6500); }
  for(var k=0;k < dbtn.length;k++){ (function(k){ dbtn[k].addEventListener("click",function(){ go(k); play(); }); })(k); }
  document.getElementById("hero").addEventListener("mouseenter",function(){clearInterval(timer);});
  document.getElementById("hero").addEventListener("mouseleave",play);
  go(0); play();

  /* ---------- motion ---------- */
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hdr = document.querySelector("header");
  function onScroll(){
    hdr.classList.toggle("scrolled", window.scrollY > 40);
    var pend = document.querySelectorAll(".motion .rv:not(.in), .motion .grid:not(.in)");
    for (var z=0; z < pend.length; z++){ if (pend[z].getBoundingClientRect().top < window.innerHeight*0.95){ pend[z].classList.add("in"); countUp(pend[z]); } }
  }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

  if (document.documentElement.classList.contains("motion")) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); countUp(en.target); } });
    }, {rootMargin:"0px 0px -8% 0px", threshold:0.08});
    var els = document.querySelectorAll(".rv, .grid");
    for (var r=0;r < els.length;r++) io.observe(els[r]);
  }
  function countUp(root){
    var big = root.querySelector ? root.querySelector(".rep .big") : null;
    if(!big || reduce || big.dataset.done) return; big.dataset.done="1";
    var end = 100, t0 = null;
    function step(ts){ if(!t0) t0=ts; var k=Math.min(1,(ts-t0)/1400); var e=1-Math.pow(1-k,3);
      big.textContent = Math.round(end*e) + "%"; if(k < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }

  /* holo tilt on product art */
  if (!reduce && window.matchMedia && matchMedia("(hover: hover)").matches) {
    document.addEventListener("pointermove", function(e){
      var shot = e.target.closest && e.target.closest(".p .shot"); if(!shot) return;
      var b = shot.getBoundingClientRect(), x = (e.clientX-b.left)/b.width, y = (e.clientY-b.top)/b.height;
      var m = shot.querySelector(".mini"); if(!m) return;
      m.style.setProperty("--ry", ((x-.5)*22).toFixed(1)+"deg");
      m.style.setProperty("--rx", ((.5-y)*18).toFixed(1)+"deg");
      m.style.setProperty("--hx", (130 - x*160).toFixed(0)+"%");
    });
    document.addEventListener("pointerout", function(e){
      var shot = e.target.closest && e.target.closest(".p .shot"); if(!shot || shot.contains(e.relatedTarget)) return;
      var m = shot.querySelector(".mini"); if(m){ m.style.removeProperty("--rx"); m.style.removeProperty("--ry"); m.style.removeProperty("--hx"); }
    });
  }

  /* drifting sparks on every graphic */
  (function(){
    if (reduce) return;
    var cvs = document.querySelectorAll("canvas.fx-sparks");
    var dpr = Math.min(2, window.devicePixelRatio||1);
    function make(cv){
      var cx = cv.getContext("2d"), parts = [], W = 0, H = 0, on = false, raf = 0, N = +cv.getAttribute("data-n") || 30;
      function size(){ var r = cv.getBoundingClientRect(); W = r.width; H = r.height; cv.width = Math.max(1,W*dpr); cv.height = Math.max(1,H*dpr); cx.setTransform(dpr,0,0,dpr,0,0); }
      function spawn(init){ var side = Math.random() < .5 ? Math.random()*.28 : .72+Math.random()*.28;
        var sc = Math.max(.6, Math.min(1.2, W/700));
        return { x: (Math.random() < .7 ? side : Math.random())*W, y: init ? Math.random()*H : H*(.75+Math.random()*.2), r: (.5+Math.random()*1.5)*sc,
                 vy: (.18+Math.random()*.55)*sc, vx: (Math.random()-.5)*.2, a: .3+Math.random()*.6, ph: Math.random()*6.28 }; }
      function tick(){
        if(!on){ raf = 0; return; }
        cx.clearRect(0,0,W,H); cx.globalCompositeOperation = "lighter";
        for(var i=0;i < parts.length;i++){ var q = parts[i];
          q.y -= q.vy; q.x += q.vx + Math.sin(q.ph += .02)*.18;
          if(q.y < -8) parts[i] = q = spawn(false);
          var f = Math.min(1, q.y/(H*.25));
          cx.beginPath(); cx.arc(q.x, q.y, q.r, 0, 6.283);
          cx.fillStyle = "rgba(255,236,170," + (q.a*f).toFixed(3) + ")";
          cx.shadowColor = "rgba(255,200,40,1)"; cx.shadowBlur = 8; cx.fill(); }
        raf = requestAnimationFrame(tick);
      }
      size(); for(var i=0;i < N;i++) parts.push(spawn(true));
      window.addEventListener("resize", size);
      new IntersectionObserver(function(en){ on = en[0].isIntersecting; if(on && !raf){ size(); raf = requestAnimationFrame(tick); } }).observe(cv);
    }
    for (var k=0;k < cvs.length;k++) make(cvs[k]);
  })();
})();
