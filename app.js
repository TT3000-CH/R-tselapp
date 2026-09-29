
const worlds = {
  jungle: {
    name:'Dschungel', icon:'🌿', big:'🦜', desc:'Tiere, Pflanzen und Abenteuer', accent:'#4d9a54', accent2:'#e8b543', accent3:'#89d16d', soft:'#eaf7df',
    bubbles:['🦜','🐒','🌴','🦋','🧭','🍃'],
    words1:['AFFE','LÖWE','LIANE','PALME','PANDA','TIGER','MANGO','PFAU','BANANE','BLATT','KÄFER','TUKAN'],
    words2:['GIRAFFE','KROKODIL','PAPAGEI','DSCHUNGEL','PANTHER','LAGERFEUER','WASSERFALL','SCHMETTERLING','ABENTEUER','FERNGLAS','KOMPASS','HÄNGEBRÜCKE','CHAMÄLEON','DORNRANKEN'],
    words3:['REGENWALD','SCHATZKARTE','ENTDECKERTEAM','KLETTERPFAD','DINOSAURIER','WILDKATZE','DSCHUNGELTEMPEL','URWALDGERÄUSCH','PAPAGEIENSCHWARM','KROKODILZAHN'],
    scramble:['PAPAGEI','PALME','LIANE','TIGER','KROKODIL','PANTHER','ABENTEUER','KOMPASS','WASSERFALL','SCHATZKARTE'],
    memory:['🦁','🐒','🦜','🐍','🌴','🍌','🦋','🐘','🐆','🪲','🌺','🍍','🦓','🐊','🦧','🥭','🪵','🧭'],
    sudoku:['🦁','🐒','🦜','🌴'],
    quick:[
      {q:'Welches Tier passt nicht?',opts:['🦁','🐘','🚀','🐒'],a:2},{q:'Was wächst auf Bäumen?',opts:['🍎','🚗','🛏️','⚽'],a:0},{q:'Womit schaut ein Forscher weit?',opts:['Fernrohr','Gabel','Kissen','Schaufel'],a:0},{q:'Was ist grün?',opts:['🌴','🌙','❄️','🦴'],a:0},
      {q:'Was ist ein Kletterpflanze?',opts:['Liane','Lokomotive','Laterne','Linie'],a:0},{q:'Welches Tier hat Flecken?',opts:['🐆','🐍','🐒','🦜'],a:0},{q:'Was braucht ein Entdecker?',opts:['Kompass','Badehaube','Schlittschuh','Zahnbürste'],a:0},{q:'Was rauscht im Urwald?',opts:['Wasserfall','Laptop','Lift','Toaster'],a:0}
    ]
  },
  space: {
    name:'Weltraum', icon:'🚀', big:'🪐', desc:'Planeten, Sterne und Raketen', accent:'#4e61d8', accent2:'#f2b247', accent3:'#8aa0ff', soft:'#ebeeff',
    bubbles:['🚀','🪐','🌙','🛰️','⭐','👽'],
    words1:['MOND','STERN','MARS','RAKETE','PLANET','KOMET','SONNE','ORBIT','ALIEN','ASTRO'],
    words2:['ASTRONAUT','SATURN','GALAXIE','TELESKOP','METEORIT','SCHWERKRAFT','RAUMSTATION','MILCHSTRASSE','ASTEROID','RAUMSCHIFF','RAKETENSTART','UMLAUFBAHN'],
    words3:['NEBELWOLKE','SONNENSYSTEM','KONTROLLZENTRUM','WELTRAUMMISSION','SATELLITENBILD','GRAVITATION','PLANETENRING','MONDLANDUNG','STERNSCHNUPPE'],
    scramble:['RAKETE','GALAXIE','SATURN','MOND','STERN','KOMET','MILCHSTRASSE','ASTEROID','TELESKOP','ASTRONAUT'],
    memory:['🚀','🪐','🌟','👽','🌙','☄️','🛰️','⭐','🛸','🔭','☀️','🌌','🪐','👾','🌠','🧑‍🚀','🌍','🛰'],
    sudoku:['🚀','🪐','🌙','⭐'],
    quick:[
      {q:'Was leuchtet am Himmel?',opts:['⭐','🍎','🚲','🐟'],a:0},{q:'Womit fliegt man ins All?',opts:['🚀','🚜','🚌','🛶'],a:0},{q:'Was ist rund wie ein Planet?',opts:['⚽','📏','✏️','🪜'],a:0},{q:'Wer trägt einen Raumanzug?',opts:['Astronaut','Bäcker','Pirat','Koch'],a:0},
      {q:'Was umkreist die Erde?',opts:['Mond','Teekanne','Drachen','Zelt'],a:0},{q:'Womit schaut man Sterne an?',opts:['Teleskop','Hammer','Kamm','Löffel'],a:0},{q:'Welche Farbe hat oft die Nacht?',opts:['dunkelblau','orange gepunktet','rosa kariert','beige'],a:0},{q:'Was ist kein Himmelskörper?',opts:['Bleistift','Stern','Planet','Komet'],a:0}
    ]
  },
  sea: {
    name:'Meer', icon:'🌊', big:'🐠', desc:'Wellen, Fische und Unterwasserwelt', accent:'#1f95af', accent2:'#f2b247', accent3:'#56c9de', soft:'#e6f7fb',
    bubbles:['🐟','🐙','🐚','⚓','🐬','🌊'],
    words1:['FISCH','MEER','WELLE','KREBS','MUSCHEL','DELFIN','ANKER','KORALLE','STRAND','TAUCHER'],
    words2:['SEESTERN','SCHATZINSEL','SEEPFERDCHEN','LEUCHTTURM','OZEANWELLE','SCHATZKARTE','UNTERWASSER','SCHIFFSGLOCKE','KORALLENRIFF','TAUCHMASKE','PERLENTAUCHER','SANDSCHLOSS'],
    words3:['MEERESSCHILDKRÖTE','HAFENEINFAHRT','UNTERWASSERHÖHLE','GEZEITENWECHSEL','STRANDBUCHT','SCHATZTRUHE','WELLENSCHAUM','SEGLERHORIZONT'],
    scramble:['DELFIN','KORALLE','MUSCHEL','WELLE','OZEAN','SEESTERN','ANKER','LEUCHTTURM','SEEPFERDCHEN','SCHATZKARTE'],
    memory:['🐟','🐬','🐙','🦀','🌊','⚓','🦑','🐚','⭐','🐡','🪸','⛵','🐢','🐠','🪼','🦞','🏖️','🧜'],
    sudoku:['🐟','🐙','🦀','🐚'],
    quick:[
      {q:'Was schwimmt im Meer?',opts:['🐟','🚗','🌵','🏠'],a:0},{q:'Was hört man am Strand?',opts:['🌊','🚂','📚','🧱'],a:0},{q:'Was ist kein Meerestier?',opts:['🐬','🐙','🐘','🦀'],a:2},{q:'Womit fährt ein U-Boot?',opts:['unter Wasser','auf Schienen','im Wald','im Himmel'],a:0},
      {q:'Was steckt oft in einer Muschel?',opts:['Perle','Schraube','Murmel','Bleistift'],a:0},{q:'Was sieht man im Hafen?',opts:['Anker','Kamin im Schnee','Liftturm','Sofakissen'],a:0},{q:'Was ist nass?',opts:['Welle','Steckdose','Kissen','Schuhkarton'],a:0},{q:'Was baut man am Strand?',opts:['Sandschloss','Rakete','Uhr','Bücherregal'],a:0}
    ]
  },
  greek: {
    name:'Griechenland', icon:'🏛️', big:'☀️', desc:'Mythologie, Tempel und Feriengefühl', accent:'#1896b2', accent2:'#efb84b', accent3:'#59d4dd', soft:'#e8f7fb',
    bubbles:['🏛️','⚡','🫒','🦉','☀️','🏺'],
    words1:['KRETA','ZEUS','MEER','OLIVE','TEMPEL','INSEL','SONNE','EULE','SAGE','LABYRINTH'],
    words2:['MINOTAURUS','ATHENE','OLIVENBAUM','HERCULES','ODYSSEUS','AMPHORE','AKROPOLIS','MYTHOLOGIE','FELSENBUCHT','FERIENINSEL','MARMORSÄULE','LAURELKRANZ'],
    words3:['GRIECHISCHESALPHABET','MYTHENHELD','TEMPELRUINE','MEERESBUCHT','HELDENGESCHICHTE','INSELABENTEUER','LABYRINTHWEG','OLIVENHAIN'],
    scramble:['ZEUS','KRETA','TEMPEL','OLIVE','LABYRINTH','ATHENE','AMPHORE','ODYSSEUS','MYTHOLOGIE','AKROPOLIS'],
    memory:['🏛️','⚡','🐂','🫒','🌊','☀️','🦉','🏺','🛡️','🌿','🎭','🧵','🗿','🏝️','⚔️','🎼','🥾','🗝️'],
    sudoku:['🏛️','⚡','🫒','🌊'],
    quick:[
      {q:'Wer gehört zur Mythologie?',opts:['Zeus','Lokführer','Bäcker','Taucher'],a:0},{q:'Was wächst oft in Griechenland?',opts:['🫒','🌲 aus Eis','🍁','🎈'],a:0},{q:'Kreta ist ...',opts:['eine Insel','ein Auto','ein Tier','eine Wolke'],a:0},{q:'Was ist ein Labyrinth?',opts:['ein Irrweg','ein Getränk','ein Schuh','ein Motor'],a:0},
      {q:'Was steht oft bei Tempeln?',opts:['Säulen','Schneeschaufeln','Ampeln','Gleise'],a:0},{q:'Wer ist eine weise Göttin?',opts:['Athene','Ketchup','Wolke','Lokomotive'],a:0},{q:'Was ist rund und warm am Himmel?',opts:['Sonne','Tisch','Teller','Zelt'],a:0},{q:'Woraus macht man Öl?',opts:['Oliven','Steine','Bälle','Muscheln'],a:0}
    ]
  }
};

const stickerCatalog = {
  jungle:[
    {icon:'🦜',name:'Papagei-Poster',colors:['#5aa44f','#9ddc68']},
    {icon:'🐒',name:'Kletteraffe',colors:['#77b35a','#d8a35a']},
    {icon:'🌴',name:'Palmeninsel',colors:['#3f9a56','#8fd56e']},
    {icon:'🦋',name:'Schmetterling',colors:['#6fc7ff','#76d98e']},
    {icon:'🐯',name:'Tigerblick',colors:['#f0b34d','#e07a38']},
    {icon:'🥭',name:'Mangofund',colors:['#f3c55e','#7ccf76']},
    {icon:'🧭',name:'Entdecker-Kompass',colors:['#5ec2c7','#8bb5ff']},
    {icon:'🐊',name:'Krokopfad',colors:['#4f9862','#79cf7d']},
    {icon:'🌺',name:'Dschungelblüte',colors:['#f38a9c','#f2c65d']},
    {icon:'🪲',name:'Käferkraft',colors:['#2d8d6a','#69c49f']}
  ],
  space:[
    {icon:'🚀',name:'Raketenstart',colors:['#5367e4','#90a0ff']},
    {icon:'🪐',name:'Planet Orbit',colors:['#5b5bd9','#8dc4ff']},
    {icon:'🧑‍🚀',name:'Astronaut',colors:['#7f95ff','#c3d0ff']},
    {icon:'👽',name:'Alienfreund',colors:['#60c98d','#8ef2bc']},
    {icon:'☄️',name:'Kometenschweif',colors:['#f3b35a','#f7d788']},
    {icon:'🛰️',name:'Satellit',colors:['#6fa6ff','#c3d5ff']},
    {icon:'🌌',name:'Nebelwolke',colors:['#7f62ef','#b38cff']},
    {icon:'🌙',name:'Mondreise',colors:['#a0b0ff','#f2e39c']},
    {icon:'⭐',name:'Sternenglanz',colors:['#f3b84b','#ffe28f']},
    {icon:'🔭',name:'Teleskopblick',colors:['#4661c7','#8aa7ff']}
  ],
  sea:[
    {icon:'🐬',name:'Delfinsprung',colors:['#4cc5d8','#91e4f0']},
    {icon:'🐠',name:'Korallenfisch',colors:['#38a3c5','#6fdad9']},
    {icon:'🐙',name:'Oktopus',colors:['#d67ba8','#f1a4ca']},
    {icon:'🦀',name:'Strandkrabbe',colors:['#f08c5b','#f3c17d']},
    {icon:'🐚',name:'Muschelschatz',colors:['#e9be8f','#f5dfba']},
    {icon:'⭐',name:'Seestern',colors:['#f5c55e','#ffe58e']},
    {icon:'⚓',name:'Ankerplatz',colors:['#5ea6c6','#a7d9ef']},
    {icon:'🪸',name:'Korallenriff',colors:['#ff8a8a','#ffb3a3']},
    {icon:'⛵',name:'Segelboot',colors:['#57b2d6','#9de0f2']},
    {icon:'🐢',name:'Meeresschildkröte',colors:['#65b779','#a8e1a5']}
  ],
  greek:[
    {icon:'🏛️',name:'Tempelruine',colors:['#6bc7de','#98dff2']},
    {icon:'⚡',name:'Zeus-Blitz',colors:['#f3be57','#ffe089']},
    {icon:'🫒',name:'Olivenhain',colors:['#63b46e','#94db81']},
    {icon:'🐂',name:'Minotaurus',colors:['#8b6b54','#caa37a']},
    {icon:'🦉',name:'Athene-Eule',colors:['#6ab0d8','#a8d9ed']},
    {icon:'🏺',name:'Amphore',colors:['#d19663','#f0bf8e']},
    {icon:'🌊',name:'Kreta-Bucht',colors:['#4ab7d7','#9ee8f5']},
    {icon:'☀️',name:'Sonnengold',colors:['#f4bd47','#ffe27e']},
    {icon:'🛡️',name:'Heldenschild',colors:['#5a8dd8','#8bb3f0']},
    {icon:'🌿',name:'Lorbeerkranz',colors:['#58a86d','#95d48f']}
  ]
};

const gameCatalog = [
  {id:'word',num:'01 · Wörter',title:'Wortsuche',desc:'Längere Begriffe und grössere Gitter.',sym:'ABC',tag:'touch'},
  {id:'maze',num:'02 · Fingerpfad',title:'Labyrinth',desc:'Pfad bleibt auch nach Loslassen erhalten.',sym:'↝',tag:'zeichnen'},
  {id:'mix',num:'03 · Buchstaben',title:'Wortsalat',desc:'Schwierigere Wörter aus der Welt.',sym:'AZ',tag:'denken'},
  {id:'logic',num:'04 · Muster',title:'Logikreihen',desc:'Mehr Aufgabenbank mit Symbolen und Zahlen.',sym:'◼',tag:'knobeln'},
  {id:'memory',num:'05 · Merken',title:'Memory',desc:'Mehr Karten und mehr mögliche Decks.',sym:'◎',tag:'merken'},
  {id:'sudoku',num:'06 · Ordnen',title:'Symbol-Sudoku',desc:'4×4 Logik mit Welten-Symbolen.',sym:'⊞',tag:'logik'},
  {id:'dots',num:'07 · Zeichnen',title:'Punkte verbinden',desc:'10 Bilder pro Themenwelt.',sym:'⋯',tag:'zeichnen'},
  {id:'quick',num:'08 · Kurz & clever',title:'Mini-Rätsel',desc:'Mehr Fragekarten pro Runde.',sym:'?',tag:'wissen'}
];

let difficulty = +(localStorage.getItem('rw4_difficulty') || 2);
let currentWorld = localStorage.getItem('rw4_world') || 'jungle';
let roundSize = +(localStorage.getItem('rw4_round') || 8);
let stars = +(localStorage.getItem('rw4_stars') || 0);
let solvedFlags = JSON.parse(localStorage.getItem('rw4_solved') || '{}');
let stickers = JSON.parse(localStorage.getItem('rw41_stickers') || '{}');
let currentAlbumWorld = localStorage.getItem('rw41_album_world') || 'jungle';
const screens = [...document.querySelectorAll('.screen')];

function savePrefs(){
  localStorage.setItem('rw4_difficulty', difficulty);
  localStorage.setItem('rw4_world', currentWorld);
  localStorage.setItem('rw4_round', roundSize);
  localStorage.setItem('rw4_stars', stars);
  localStorage.setItem('rw4_solved', JSON.stringify(solvedFlags));
  localStorage.setItem('rw41_stickers', JSON.stringify(stickers));
  localStorage.setItem('rw41_album_world', currentAlbumWorld);
}
function show(id){screens.forEach(s=>s.classList.toggle('active', s.id===id));}
function showHome(){show('home'); syncHome();}
function showAlbum(){show('album'); renderAlbum();}
function openGame(id){clearSolveFlag(id); show(id); if(id==='word') buildWordGame(); if(id==='maze') buildMaze(); if(id==='mix') newScrambleRound(); if(id==='logic') newLogic(); if(id==='memory') buildMemory(); if(id==='sudoku') buildSudoku(); if(id==='dots') buildDots(); if(id==='quick') buildQuick();}
function closeSplash(){document.getElementById('splash').classList.add('hide');}
function toggleFull(){ if(!document.fullscreenElement){document.documentElement.requestFullscreen?.();} else {document.exitFullscreen?.();} }
function clearSolveFlag(gameId){solvedFlags[gameId] = false; savePrefs();}
function normalizeStickers(){
  for(const key of Object.keys(stickerCatalog)){
    if(!Array.isArray(stickers[key])) stickers[key] = [];
    stickers[key] = [...new Set(stickers[key].filter(v => Number.isInteger(v) && v >= 0 && v < stickerCatalog[key].length))].sort((a,b)=>a-b);
  }
}
function worldStickerCount(key){ normalizeStickers(); return (stickers[key] || []).length; }
function totalStickerCount(){ normalizeStickers(); return Object.keys(stickerCatalog).reduce((sum,key)=>sum + (stickers[key] || []).length, 0); }
function updateStickerCounts(){
  const total = totalStickerCount();
  document.getElementById('statStickers').textContent = `${total}/40`;
  const albumStatus = document.getElementById('albumStatus'); if(albumStatus) albumStatus.textContent = `${total} / 40 Sticker gesammelt`;
  const albumTotalMini = document.getElementById('albumTotalMini'); if(albumTotalMini) albumTotalMini.textContent = `${total} / 40`;
}
function unlockSticker(worldKey){
  normalizeStickers();
  const unlocked = new Set(stickers[worldKey] || []);
  const missing = [...Array(stickerCatalog[worldKey].length).keys()].filter(i => !unlocked.has(i));
  if(!missing.length){ updateStickerCounts(); if(document.getElementById('album').classList.contains('active')) renderAlbum(); return null; }
  const idx = missing[Math.floor(Math.random()*missing.length)];
  unlocked.add(idx); stickers[worldKey] = [...unlocked].sort((a,b)=>a-b);
  savePrefs(); updateStickerCounts();
  if(document.getElementById('album').classList.contains('active')) renderAlbum();
  return stickerCatalog[worldKey][idx];
}
function showStickerToast(sticker){
  if(!sticker) return;
  const toast = document.getElementById('rewardToast');
  document.getElementById('rewardIcon').textContent = sticker.icon;
  document.getElementById('rewardName').textContent = sticker.name;
  toast.classList.add('show');
  clearTimeout(showStickerToast.timer);
  showStickerToast.timer = setTimeout(()=>toast.classList.remove('show'), 2100);
}
function awardReward(gameId){
  const sticker = unlockSticker(currentWorld);
  if(sticker){ showStickerToast(sticker); sparkle('🧩'); }
  if(!solvedFlags[gameId]){ solvedFlags[gameId] = true; stars += 1; savePrefs(); document.getElementById('starCount').textContent = stars; document.getElementById('statStars').textContent = stars; sparkle('⭐ +1'); }
}
function renderAlbum(){
  normalizeStickers();
  const tabs = document.getElementById('albumTabs');
  const grid = document.getElementById('albumGrid');
  const title = document.getElementById('albumTitle');
  const sub = document.getElementById('albumSubtitle');
  const prog = document.getElementById('albumProgress');
  tabs.innerHTML = '';
  Object.entries(worlds).forEach(([key,w]) => {
    const b = document.createElement('button');
    b.className = 'album-tab' + (key===currentAlbumWorld ? ' on' : '');
    b.innerHTML = `${w.icon} ${w.name}<small>${worldStickerCount(key)} / 10 Sticker</small>`;
    b.onclick = ()=>{ currentAlbumWorld = key; savePrefs(); renderAlbum(); };
    tabs.appendChild(b);
  });
  const entries = stickerCatalog[currentAlbumWorld];
  const unlocked = new Set(stickers[currentAlbumWorld] || []);
  const count = unlocked.size;
  title.textContent = worlds[currentAlbumWorld].name;
  sub.textContent = 'Sticker sammeln';
  prog.textContent = `${count} / ${entries.length}`;
  grid.innerHTML = '';
  entries.forEach((st,i) => {
    const div = document.createElement('div');
    const isOn = unlocked.has(i);
    div.className = 'sticker ' + (isOn ? 'unlocked' : 'locked');
    if(isOn){
      div.style.background = `linear-gradient(145deg, ${st.colors[0]}, ${st.colors[1]})`;
      div.style.color = '#fff';
      div.innerHTML = `<div class="sticker-top"><span class="sticker-icon">${st.icon}</span><span class="sticker-num">Sticker ${i+1}</span></div><div class="sticker-name">${st.name}</div>`;
    } else {
      div.innerHTML = `<div class="sticker-top"><span class="sticker-icon">🔒</span><span class="sticker-num">Sticker ${i+1}</span></div><div class="sticker-name">Unbekannt</div><div class="sticker-locked-label">Rätsel lösen zum Freischalten</div>`;
    }
    grid.appendChild(div);
  });
  updateStickerCounts();
}
function sparkle(text){
  const layer = document.getElementById('sparkles');
  for(let i=0;i<7;i++){
    const d = document.createElement('div');
    d.className = 'spark';
    d.textContent = i===0 ? text : '✨';
    d.style.left = (45 + Math.random()*10) + '%';
    d.style.top = (54 + Math.random()*8) + '%';
    d.style.fontSize = (i===0 ? 30 : 18 + Math.random()*12) + 'px';
    layer.appendChild(d);
    setTimeout(()=>d.remove(), 1200);
  }
}
function applyTheme(){
  const w = worlds[currentWorld];
  document.documentElement.style.setProperty('--accent', w.accent);
  document.documentElement.style.setProperty('--accent2', w.accent2);
  document.documentElement.style.setProperty('--accent3', w.accent3);
  document.documentElement.style.setProperty('--accent-soft', w.soft);
  document.querySelectorAll('.hero-art .bubble').forEach((b,i)=> b.textContent = w.bubbles[i] || '✨');
}
function syncHome(){
  document.getElementById('worldSelect').value = currentWorld;
  document.getElementById('roundSelect').value = String(roundSize);
  document.getElementById('homeThemeLabel').textContent = worlds[currentWorld].name;
  document.getElementById('homeRoundLabel').textContent = roundSize + ' Aufgaben';
  document.getElementById('starCount').textContent = stars;
  document.getElementById('statStars').textContent = stars;
  updateStickerCounts();
  document.querySelectorAll('.diff').forEach(b => b.classList.toggle('on', +b.dataset.d === difficulty));
  renderWorlds();
  applyTheme();
}
function shuffled(a){ return [...a].sort(()=>Math.random()-.5); }
function pickN(arr,n){ return shuffled(arr).slice(0, Math.min(n, arr.length)); }

function renderWorlds(){
  const wrap = document.getElementById('worldGrid'); wrap.innerHTML='';
  Object.entries(worlds).forEach(([key,w])=>{
    const btn = document.createElement('button');
    btn.className = 'world-card w-'+key + (key===currentWorld ? ' active' : '');
    btn.innerHTML = `<span>${w.icon}</span><b>${w.name}</b><small>${w.desc}</small><em>${w.big}</em>`;
    btn.onclick = ()=>{ currentWorld = key; savePrefs(); syncHome(); };
    wrap.appendChild(btn);
  });
}
function renderGames(){
  const grid = document.getElementById('gameGrid'); grid.innerHTML='';
  gameCatalog.forEach(g=>{
    const card = document.createElement('button');
    card.className='game-card';
    card.innerHTML = `<span class="num">${g.num}</span><span class="tag">${g.tag}</span><h4>${g.title}</h4><p>${g.desc}</p><span class="sym">${g.sym}</span>`;
    card.onclick = ()=> openGame(g.id);
    grid.appendChild(card);
  });
}

// controls
renderGames();
document.querySelectorAll('.diff').forEach(b=>b.addEventListener('click', ()=>{difficulty = +b.dataset.d; savePrefs(); syncHome();}));
document.getElementById('worldSelect').addEventListener('change', e=>{currentWorld = e.target.value; savePrefs(); syncHome();});
document.getElementById('roundSelect').addEventListener('change', e=>{roundSize = +e.target.value; savePrefs(); syncHome();});

// WORD SEARCH
let wg = {size:12, words:[], grid:[], placed:[], found:new Set(), drag:null};
function wordBank(){ const w = worlds[currentWorld]; return difficulty===1 ? w.words1 : difficulty===2 ? w.words2 : w.words3; }
function buildWordGame(){
  const bank = wordBank().map(x=>x.toUpperCase().replace(/ /g,''));
  const size = difficulty===1 ? 12 : difficulty===2 ? 14 : 16;
  const count = difficulty===1 ? 8 : difficulty===2 ? 10 : 12;
  const words = pickN(bank, count);
  const dirs = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
  let grid, placed;
  for(let attempt=0; attempt<120; attempt++){
    grid = Array.from({length:size}, ()=>Array(size).fill(''));
    placed = [];
    let ok = true;
    for(const word of words){
      let done = false;
      for(let t=0;t<460&&!done;t++){
        const [dx,dy] = dirs[Math.floor(Math.random()*dirs.length)];
        const x = Math.floor(Math.random()*size), y = Math.floor(Math.random()*size);
        const ex = x + dx*(word.length-1), ey = y + dy*(word.length-1);
        if(ex<0||ey<0||ex>=size||ey>=size) continue;
        let fits = true;
        for(let i=0;i<word.length;i++){ const c = grid[y+dy*i][x+dx*i]; if(c && c!==word[i]){ fits=false; break; } }
        if(!fits) continue;
        for(let i=0;i<word.length;i++) grid[y+dy*i][x+dx*i] = word[i];
        placed.push({word, cells:Array.from({length:word.length},(_,i)=>`${x+dx*i},${y+dy*i}`)});
        done = true;
      }
      if(!done){ ok=false; break; }
    }
    if(ok) break;
  }
  const abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let y=0;y<size;y++) for(let x=0;x<size;x++) if(!grid[y][x]) grid[y][x] = abc[Math.floor(Math.random()*abc.length)];
  wg = {size, words, grid, placed, found:new Set(), drag:null};
  const el = document.getElementById('wordGrid'); el.innerHTML=''; el.style.gridTemplateColumns = `repeat(${size},1fr)`;
  wg.grid.forEach((row,y)=>row.forEach((ch,x)=>{ const d=document.createElement('div'); d.className='letter'; d.dataset.x=x; d.dataset.y=y; d.textContent=ch; el.appendChild(d);}));
  document.getElementById('wordList').innerHTML = words.map(w=>`<span class="word-chip" data-w="${w}">${w}</span>`).join('');
  document.getElementById('wordStatus').textContent = '0 / ' + words.length;
  document.getElementById('wordMsg').classList.remove('show');
  el.onpointerdown = startWordDrag; el.onpointermove = moveWordDrag; el.onpointerup = endWordDrag; el.onpointercancel = endWordDrag;
}
function letterFromPoint(e){ const el = document.elementFromPoint(e.clientX, e.clientY); return el?.classList.contains('letter') ? el : null; }
function startWordDrag(e){ e.preventDefault(); const c = letterFromPoint(e); if(!c) return; wg.drag = {sx:+c.dataset.x, sy:+c.dataset.y, ex:+c.dataset.x, ey:+c.dataset.y}; e.currentTarget.setPointerCapture?.(e.pointerId); previewWord(); }
function moveWordDrag(e){ if(!wg.drag) return; const c = letterFromPoint(e); if(!c) return; wg.drag.ex = +c.dataset.x; wg.drag.ey = +c.dataset.y; previewWord(); }
function lineCells(d){ const dx=d.ex-d.sx, dy=d.ey-d.sy, ax=Math.abs(dx), ay=Math.abs(dy); if(!(dx===0||dy===0||ax===ay)) return []; const n=Math.max(ax,ay), stepx=Math.sign(dx), stepy=Math.sign(dy); return Array.from({length:n+1},(_,i)=>`${d.sx+stepx*i},${d.sy+stepy*i}`); }
function previewWord(){ document.querySelectorAll('.letter.preview').forEach(x=>x.classList.remove('preview')); lineCells(wg.drag).forEach(k=>{ const [x,y] = k.split(','); document.querySelector(`.letter[data-x="${x}"][data-y="${y}"]`)?.classList.add('preview'); }); }
function endWordDrag(){ if(!wg.drag) return; const candidate = lineCells(wg.drag).join('|'); document.querySelectorAll('.letter.preview').forEach(x=>x.classList.remove('preview')); const match = wg.placed.find(p=>{ const a=p.cells.join('|'), b=[...p.cells].reverse().join('|'); return !wg.found.has(p.word) && (a===candidate || b===candidate); }); if(match){ wg.found.add(match.word); match.cells.forEach(k=>{ const [x,y] = k.split(','); document.querySelector(`.letter[data-x="${x}"][data-y="${y}"]`)?.classList.add('hit'); }); document.querySelector(`.word-chip[data-w="${match.word}"]`)?.classList.add('done'); document.getElementById('wordStatus').textContent = `${wg.found.size} / ${wg.words.length}`; if(wg.found.size === wg.words.length){ document.getElementById('wordMsg').classList.add('show'); awardReward('word'); } } wg.drag = null; }

// MAZE
const mc = document.getElementById('mazeCanvas'), mctx = mc.getContext('2d');
let maze = {cols:14, rows:10, cells:[], path:[{x:0,y:0}], drawing:false, solved:false};
function makeMaze(cols,rows){
  const cells = Array.from({length:rows}, (_,y)=>Array.from({length:cols}, (_,x)=>({x,y,w:[1,1,1,1],v:false})));
  const dirs = [[0,-1,0,2],[1,0,1,3],[0,1,2,0],[-1,0,3,1]];
  const stack=[cells[0][0]]; cells[0][0].v=true;
  while(stack.length){
    const c = stack[stack.length-1];
    const opts=[];
    for(const d of dirs){ const nx=c.x+d[0], ny=c.y+d[1]; if(nx>=0&&ny>=0&&nx<cols&&ny<rows&&!cells[ny][nx].v) opts.push(d); }
    if(!opts.length){ stack.pop(); continue; }
    const d = opts[Math.floor(Math.random()*opts.length)], n = cells[c.y+d[1]][c.x+d[0]];
    c.w[d[2]] = 0; n.w[d[3]] = 0; n.v = true; stack.push(n);
  }
  return cells;
}
function buildMaze(){
  const cols = difficulty===1 ? 12 : difficulty===2 ? 17 : 21;
  const rows = difficulty===1 ? 8 : difficulty===2 ? 12 : 14;
  maze = {cols, rows, cells:makeMaze(cols,rows), path:[{x:0,y:0}], drawing:false, solved:false};
  document.getElementById('mazeMsg').classList.remove('show');
  document.getElementById('mazeStatus').textContent = 'Fingerpfad gespeichert';
  drawMaze();
}
function resetMazePath(){ maze.path = [{x:0,y:0}]; maze.solved=false; document.getElementById('mazeMsg').classList.remove('show'); drawMaze(); }
function mazeDims(){ const pad=24, cw=(mc.width-pad*2)/maze.cols, ch=(mc.height-pad*2)/maze.rows; return {pad,cw,ch}; }
function drawMaze(){
  const {pad,cw,ch} = mazeDims();
  mctx.clearRect(0,0,mc.width,mc.height);
  mctx.fillStyle = '#fff'; mctx.fillRect(0,0,mc.width,mc.height);
  mctx.fillStyle = '#def3e6'; mctx.fillRect(pad+2,pad+2,cw-4,ch-4);
  mctx.fillStyle = '#ffe8a9'; mctx.fillRect(pad+(maze.cols-1)*cw+2,pad+(maze.rows-1)*ch+2,cw-4,ch-4);
  mctx.strokeStyle = '#223038'; mctx.lineWidth = 3.5; mctx.lineCap='round';
  maze.cells.forEach((row,y)=>row.forEach((c,x)=>{ const L=pad+x*cw,T=pad+y*ch,R=L+cw,B=T+ch; mctx.beginPath(); if(c.w[0]){mctx.moveTo(L,T);mctx.lineTo(R,T);} if(c.w[1]){mctx.moveTo(R,T);mctx.lineTo(R,B);} if(c.w[2]){mctx.moveTo(R,B);mctx.lineTo(L,B);} if(c.w[3]){mctx.moveTo(L,B);mctx.lineTo(L,T);} mctx.stroke(); }));
  mctx.font='900 14px system-ui'; mctx.textAlign='center'; mctx.textBaseline='middle';
  mctx.fillStyle='#2f8a66'; mctx.fillText('START', pad+cw/2, pad+ch/2);
  mctx.fillStyle='#8e6a07'; mctx.fillText('ZIEL', pad+(maze.cols-.5)*cw, pad+(maze.rows-.5)*ch);
  if(maze.path.length){
    mctx.strokeStyle='#4e7ea3'; mctx.lineWidth=Math.max(6,Math.min(cw,ch)*.34); mctx.lineJoin='round'; mctx.lineCap='round';
    mctx.beginPath(); maze.path.forEach((p,i)=>{ const x=pad+(p.x+.5)*cw, y=pad+(p.y+.5)*ch; if(!i) mctx.moveTo(x,y); else mctx.lineTo(x,y); }); mctx.stroke();
    const last = maze.path[maze.path.length-1];
    mctx.fillStyle='rgba(242,178,71,.92)'; mctx.beginPath(); mctx.arc(pad+(last.x+.5)*cw,pad+(last.y+.5)*ch,Math.max(6,Math.min(cw,ch)*.18),0,Math.PI*2); mctx.fill();
  }
}
function pointToMazeCell(e){ const rect=mc.getBoundingClientRect(), sx=mc.width/rect.width, sy=mc.height/rect.height, x=(e.clientX-rect.left)*sx, y=(e.clientY-rect.top)*sy; const {pad,cw,ch}=mazeDims(); const cx=Math.floor((x-pad)/cw), cy=Math.floor((y-pad)/ch); if(cx<0||cy<0||cx>=maze.cols||cy>=maze.rows) return null; return {x:cx,y:cy}; }
function canStep(a,b){ if(!a||!b) return false; const dx=b.x-a.x, dy=b.y-a.y; if(Math.abs(dx)+Math.abs(dy)!==1) return false; const c=maze.cells[a.y][a.x]; if(dx===1) return !c.w[1]; if(dx===-1) return !c.w[3]; if(dy===1) return !c.w[2]; if(dy===-1) return !c.w[0]; return false; }
mc.addEventListener('pointerdown', e=>{
  const p = pointToMazeCell(e); if(!p || maze.solved) return;
  const hitIndex = maze.path.findIndex(cell=>cell.x===p.x && cell.y===p.y);
  if(hitIndex >= 0){ maze.path = maze.path.slice(0, hitIndex+1); maze.drawing = true; mc.setPointerCapture?.(e.pointerId); drawMaze(); return; }
  const last = maze.path[maze.path.length-1];
  if(p.x===last.x && p.y===last.y){ maze.drawing = true; mc.setPointerCapture?.(e.pointerId); return; }
  if(canStep(last, p)){ maze.path.push(p); maze.drawing = true; mc.setPointerCapture?.(e.pointerId); drawMaze(); return; }
});
mc.addEventListener('pointermove', e=>{
  if(!maze.drawing || maze.solved) return;
  const p = pointToMazeCell(e); if(!p) return;
  const last = maze.path[maze.path.length-1];
  if(p.x===last.x && p.y===last.y) return;
  const previous = maze.path[maze.path.length-2];
  if(previous && p.x===previous.x && p.y===previous.y){ maze.path.pop(); drawMaze(); return; }
  const existing = maze.path.findIndex(cell=>cell.x===p.x && cell.y===p.y);
  if(existing >= 0){ maze.path = maze.path.slice(0, existing+1); drawMaze(); return; }
  if(canStep(last,p)){ maze.path.push(p); drawMaze(); if(p.x===maze.cols-1 && p.y===maze.rows-1){ maze.solved=true; maze.drawing=false; document.getElementById('mazeMsg').classList.add('show'); document.getElementById('mazeStatus').textContent='Ausgang erreicht'; awardReward('maze'); } }
});
mc.addEventListener('pointerup', ()=>{ maze.drawing=false; });
mc.addEventListener('pointercancel', ()=>{ maze.drawing=false; });

// SCRAMBLE
let scrambleAnswer='';
function scrambleText(word){ let chars = word.split(''); do{ chars = shuffled(chars); } while(chars.join('')===word); return chars.join(''); }
function newScrambleRound(){ const bank = (difficulty===1 ? worlds[currentWorld].words1 : worlds[currentWorld].scramble).map(w=>w.toUpperCase().replace(/ /g,'')); scrambleAnswer = bank[Math.floor(Math.random()*bank.length)]; document.getElementById('scrambleWord').textContent = scrambleText(scrambleAnswer); document.getElementById('scrambleInput').value=''; const msg=document.getElementById('mixMsg'); msg.className='message'; msg.textContent=''; document.getElementById('scrambleInput').focus(); }
function checkScramble(){ const input = document.getElementById('scrambleInput').value.trim().toUpperCase().replace(/ /g,''); const msg=document.getElementById('mixMsg'); msg.className='message show'; if(input===scrambleAnswer){ msg.textContent='Richtig!'; awardReward('mix'); } else { msg.textContent='Noch nicht – probiere es nochmals.'; } }

// LOGIC
const logicBank = [
  {p:'2 · 4 · 8 · 16 · ?',o:['18','24','32','20'],a:'32'},
  {p:'5 · 10 · 15 · 20 · ?',o:['24','25','30','22'],a:'25'},
  {p:'A · C · E · G · ?',o:['I','H','J','L'],a:'I'},
  {p:'B · D · G · K · ?',o:['M','N','P','Q'],a:'P'},
  {p:'1 · 1 · 2 · 3 · 5 · ?',o:['7','8','9','10'],a:'8'},
  {p:'3 · 6 · 12 · 24 · ?',o:['30','36','48','50'],a:'48'},
  {p:'9 · 7 · 5 · 3 · ?',o:['1','2','3','4'],a:'1'},
  {p:'🌙 · ⭐ · 🌙 · ⭐ · ?',o:['⭐','🌙','☀️','🚀'],a:'🌙'},
  {p:'🔺 · 🔷 · 🔺 · 🔷 · ?',o:['🔷','🔺','⭐','⚪'],a:'🔺'},
  {p:'🟢 · 🟡 · 🟢 · 🟡 · ?',o:['🟡','🟢','🔴','🔵'],a:'🟢'},
  {p:'10 · 20 · 30 · ? · 50',o:['35','40','45','60'],a:'40'},
  {p:'Z · X · V · T · ?',o:['S','R','Q','P'],a:'R'}
];
let logicAnswer='';
function newLogic(){
  const pool = difficulty===1 ? logicBank.slice(0,8) : difficulty===2 ? logicBank : logicBank.concat([{p:'2 · 3 · 5 · 8 · 12 · ?',o:['15','16','17','18'],a:'17'},{p:'⬜ · ◼︎ · ▲ · ⬜ · ◼︎ · ?',o:['▲','◼︎','⬜','●'],a:'▲'}]);
  const q = pool[Math.floor(Math.random()*pool.length)]; logicAnswer = q.a;
  document.getElementById('logicPrompt').textContent = q.p; const wrap = document.getElementById('logicOptions'); wrap.innerHTML=''; const msg=document.getElementById('logicMsg'); msg.className='message'; msg.textContent='';
  shuffled(q.o).forEach(opt=>{ const b=document.createElement('button'); b.className='logic-opt'; b.textContent=opt; b.onclick=()=>{ [...wrap.children].forEach(x=>x.disabled=true); if(opt===logicAnswer){ b.classList.add('correct'); msg.textContent='Stimmt!'; awardReward('logic'); } else { b.classList.add('wrong'); [...wrap.children].find(x=>x.textContent===logicAnswer)?.classList.add('correct'); msg.textContent='Fast – die richtige Lösung ist markiert.'; } msg.classList.add('show'); }; wrap.appendChild(b); });
}

// MEMORY
let mem = {cards:[], first:null, second:null, lock:false, pairs:0, total:0};
function buildMemory(){
  const symbolPool = worlds[currentWorld].memory;
  const pairsCount = difficulty===1 ? 8 : difficulty===2 ? 10 : 12;
  const symbols = pickN(symbolPool, pairsCount);
  const cards = shuffled([...symbols, ...symbols]).map((sym,i)=>({id:i, sym, open:false, done:false}));
  mem = {cards, first:null, second:null, lock:false, pairs:0, total:pairsCount};
  const cols = pairsCount===8 ? 4 : pairsCount===10 ? 5 : 6;
  const board = document.getElementById('memoryBoard'); board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`; board.innerHTML='';
  document.getElementById('memoryMsg').classList.remove('show');
  mem.cards.forEach((c,idx)=>{ const btn=document.createElement('button'); btn.className='mem-card'; btn.innerHTML='<span class="mem-face mem-front"></span><span class="mem-face mem-back">'+c.sym+'</span>'; btn.onclick=()=>flipMemory(idx); board.appendChild(btn); });
  updateMemory();
}
function updateMemory(){ document.getElementById('memoryStatus').textContent = `Paare: ${mem.pairs} / ${mem.total}`; [...document.querySelectorAll('#memoryBoard .mem-card')].forEach((el,idx)=>{ const c=mem.cards[idx]; el.classList.toggle('flipped', c.open || c.done); }); }
function flipMemory(idx){ if(mem.lock) return; const c=mem.cards[idx]; if(c.done || mem.first===idx) return; c.open=true; updateMemory(); if(mem.first===null){ mem.first=idx; return; } mem.second=idx; mem.lock=true; const a=mem.cards[mem.first], b=mem.cards[mem.second]; if(a.sym===b.sym){ a.done=b.done=true; mem.pairs++; mem.first=mem.second=null; mem.lock=false; updateMemory(); if(mem.pairs===mem.total){ document.getElementById('memoryMsg').classList.add('show'); awardReward('memory'); } return; } setTimeout(()=>{ a.open=false; b.open=false; mem.first=mem.second=null; mem.lock=false; updateMemory(); }, 650); }

// SUDOKU
let sudoku = {solution:[], puzzle:[], symbols:[], selected:null};
function buildSudoku(){
  const syms = [...worlds[currentWorld].sudoku];
  const base = [[0,1,2,3],[2,3,0,1],[1,0,3,2],[3,2,1,0]];
  const rowPerm = shuffled([0,1]).concat(shuffled([2,3]));
  const colPerm = shuffled([0,1]).concat(shuffled([2,3]));
  const symPerm = shuffled([0,1,2,3]);
  const solution = rowPerm.map(r=>colPerm.map(c=>syms[symPerm[base[r][c]]]));
  let puzzle = solution.map(r=>r.map(v=>({value:v, fixed:true})));
  const blanks = difficulty===1 ? 5 : difficulty===2 ? 7 : 9;
  pickN([...Array(16).keys()], blanks).forEach(i=>{ const y=Math.floor(i/4), x=i%4; puzzle[y][x] = {value:'', fixed:false}; });
  sudoku = {solution, puzzle, symbols:syms, selected:syms[0]};
  renderSudoku();
}
function renderSudoku(){
  const board=document.getElementById('sudokuBoard'); board.innerHTML=''; document.getElementById('sudokuMsg').classList.remove('show');
  sudoku.puzzle.forEach((row,y)=>row.forEach((cell,x)=>{ const d=document.createElement('div'); d.className='sudoku-cell'+(cell.fixed?' fixed':' empty')+(x===1?' sep-r':'')+(y===1?' sep-b':''); if(cell.fixed){ d.textContent=cell.value; } else { const b=document.createElement('button'); b.textContent=cell.value || '·'; b.onclick=()=>placeSudoku(x,y); d.appendChild(b); } board.appendChild(d); }));
  const pick=document.getElementById('pickRow'); pick.innerHTML=''; sudoku.symbols.forEach(sym=>{ const b=document.createElement('button'); b.className='pick-btn'+(sudoku.selected===sym?' on':''); b.textContent=sym; b.onclick=()=>{ sudoku.selected=sym; renderSudoku(); }; pick.appendChild(b); });
  document.getElementById('sudokuStatus').textContent='Aktiv: ' + sudoku.selected;
}
function placeSudoku(x,y){ sudoku.puzzle[y][x].value = sudoku.selected; renderSudoku(); for(let yy=0;yy<4;yy++) for(let xx=0;xx<4;xx++) if(sudoku.puzzle[yy][xx].value !== sudoku.solution[yy][xx]) return; document.getElementById('sudokuMsg').classList.add('show'); awardReward('sudoku'); }

// DOTS - 10 shapes per theme, each resampled to 50-100 points
function resampleAnchors(anchors, count, closed=true){
  const pts = anchors.map(p=>({x:p[0], y:p[1]}));
  const chain = closed ? pts.concat([pts[0]]) : pts;
  const segs=[]; let total=0;
  for(let i=0;i<chain.length-1;i++){ const a=chain[i], b=chain[i+1], d=Math.hypot(b.x-a.x,b.y-a.y); segs.push({a,b,d}); total+=d; }
  const out=[];
  for(let i=0;i<count;i++){
    const target = (total * i) / (count-1);
    let acc=0;
    for(const s of segs){
      if(acc + s.d >= target){ const t=(target-acc)/s.d; out.push({x:s.a.x+(s.b.x-s.a.x)*t, y:s.a.y+(s.b.y-s.a.y)*t}); break; }
      acc += s.d;
    }
  }
  return out;
}
function makeDotShapes(){
  return {
    jungle:[
      {name:'Blatt',count:64,a:[[50,12],[63,18],[78,34],[86,53],[78,72],[63,86],[48,92],[37,82],[26,66],[20,49],[25,33],[36,19]]},
      {name:'Schmetterling',count:72,a:[[50,48],[34,30],[18,18],[10,32],[18,48],[34,54],[50,48],[66,30],[82,18],[90,32],[82,48],[66,54],[50,48],[50,20],[50,76],[44,86],[50,92],[56,86]]},
      {name:'Schlange',count:78,a:[[12,56],[20,44],[32,38],[44,43],[56,54],[68,59],[80,54],[88,42],[82,28],[70,20],[54,22],[42,30],[30,36],[18,34],[12,24]]},
      {name:'Palme',count:74,a:[[50,88],[48,74],[46,62],[48,48],[44,34],[40,20],[50,28],[60,18],[56,34],[72,26],[62,42],[74,48],[58,50],[64,64],[52,58],[50,88]]},
      {name:'Panda-Kopf',count:66,a:[[32,26],[20,18],[12,30],[18,44],[12,58],[24,72],[40,82],[60,82],[76,72],[88,58],[82,44],[88,30],[80,18],[68,26],[50,18]]},
      {name:'Blume',count:80,a:[[50,18],[58,28],[70,24],[72,38],[82,46],[72,54],[70,68],[58,64],[50,74],[42,64],[30,68],[28,54],[18,46],[28,38],[30,24],[42,28]]},
      {name:'Tukan',count:70,a:[[24,56],[34,36],[52,30],[62,38],[84,34],[76,48],[86,58],[66,58],[54,72],[36,78],[24,66],[24,56]]},
      {name:'Tiger-Kopf',count:82,a:[[18,32],[30,18],[40,26],[50,18],[60,26],[70,18],[82,32],[84,48],[76,68],[60,82],[40,82],[24,68],[16,48]]},
      {name:'Frosch',count:68,a:[[22,54],[18,38],[26,24],[38,22],[50,30],[62,22],[74,24],[82,38],[78,54],[66,68],[50,74],[34,68]]},
      {name:'Kompass',count:72,a:[[50,12],[58,34],[88,50],[58,66],[50,88],[42,66],[12,50],[42,34]]}
    ],
    space:[
      {name:'Rakete',count:74,a:[[50,10],[62,28],[66,54],[74,70],[66,72],[58,62],[50,90],[42,62],[34,72],[26,70],[34,54],[38,28]]},
      {name:'Stern',count:70,a:[[50,10],[60,36],[88,38],[66,54],[74,82],[50,66],[26,82],[34,54],[12,38],[40,36]]},
      {name:'Planet',count:78,a:[[24,50],[30,34],[44,22],[60,20],[74,28],[82,42],[80,58],[70,72],[54,80],[38,78],[24,66],[18,52],[14,46],[20,40],[30,36],[44,34],[58,36],[72,42],[84,46]]},
      {name:'Komet',count:72,a:[[14,64],[24,56],[34,50],[44,48],[58,44],[72,34],[84,20],[76,34],[68,44],[76,52],[88,56],[70,62],[54,70],[40,76],[28,80],[16,76]]},
      {name:'Satellit',count:68,a:[[18,38],[34,38],[42,30],[58,30],[66,38],[82,38],[82,54],[66,54],[58,62],[42,62],[34,54],[18,54]]},
      {name:'Mond',count:66,a:[[66,20],[56,16],[42,18],[28,28],[20,42],[20,58],[28,72],[42,82],[58,80],[70,70],[60,66],[50,56],[48,42],[54,30]]},
      {name:'Alien',count:76,a:[[30,20],[20,34],[18,50],[24,68],[38,82],[62,82],[76,68],[82,50],[80,34],[70,20],[58,18],[50,10],[42,18]]},
      {name:'Teleskop',count:60,a:[[24,66],[34,54],[46,42],[58,30],[70,24],[76,34],[64,46],[52,58],[40,70],[48,82],[42,88],[36,82],[28,74]]},
      {name:'UFO',count:72,a:[[20,54],[30,42],[44,34],[58,34],[72,42],[82,54],[72,62],[58,66],[44,66],[30,62],[20,54],[50,18],[46,30],[54,30]]},
      {name:'Helm',count:78,a:[[20,62],[20,44],[28,28],[42,18],[58,18],[72,28],[80,44],[80,70],[68,82],[32,82],[20,70]]}
    ],
    sea:[
      {name:'Fisch',count:74,a:[[18,50],[34,32],[58,28],[78,38],[86,50],[78,62],[58,72],[34,68],[18,50],[8,36],[8,64]]},
      {name:'Delfin',count:78,a:[[16,54],[28,40],[44,30],[64,30],[78,22],[74,36],[84,46],[70,50],[62,62],[50,72],[34,68],[22,60]]},
      {name:'Muschel',count:72,a:[[18,62],[24,44],[36,30],[50,22],[64,30],[76,44],[82,62],[72,68],[62,72],[50,74],[38,72],[28,68]]},
      {name:'Anker',count:74,a:[[50,12],[50,58],[38,70],[26,66],[18,54],[24,42],[32,54],[50,72],[68,54],[76,42],[82,54],[74,66],[62,70],[50,58]]},
      {name:'Krabbe',count:76,a:[[18,50],[24,36],[36,24],[50,20],[64,24],[76,36],[82,50],[74,62],[64,70],[50,74],[36,70],[26,62],[18,50],[8,38],[14,54],[8,68]]},
      {name:'Seestern',count:70,a:[[50,12],[58,34],[82,34],[62,48],[70,76],[50,58],[30,76],[38,48],[18,34],[42,34]]},
      {name:'Welle',count:66,a:[[10,62],[18,48],[30,40],[44,42],[56,54],[70,58],[84,52],[90,36],[82,24],[68,20],[54,26],[42,38],[30,44],[18,44],[10,36]]},
      {name:'Seepferdchen',count:84,a:[[54,18],[62,28],[60,40],[48,48],[42,62],[46,76],[58,82],[70,76],[74,64],[68,54],[58,52],[50,56],[46,66],[40,74],[28,72],[24,60],[30,48],[40,40],[46,28]]},
      {name:'Segelboot',count:68,a:[[18,68],[30,68],[50,20],[50,68],[78,68],[68,78],[28,78]]},
      {name:'Krake',count:80,a:[[30,28],[42,18],[58,18],[70,28],[74,44],[68,58],[74,72],[64,78],[56,72],[50,60],[44,72],[36,78],[26,72],[32,58],[26,44]]}
    ],
    greek:[
      {name:'Tempel',count:78,a:[[18,72],[82,72],[74,62],[70,38],[60,38],[60,72],[50,72],[50,38],[40,38],[40,72],[30,72],[30,38],[22,38],[18,62],[18,72],[50,16],[82,38],[18,38]]},
      {name:'Amphore',count:76,a:[[38,16],[62,16],[68,28],[64,40],[74,54],[70,72],[60,84],[40,84],[30,72],[26,54],[36,40],[32,28]]},
      {name:'Olivenzweig',count:78,a:[[20,70],[30,60],[42,50],[56,40],[72,28],[62,20],[52,28],[44,36],[54,44],[66,52],[74,62],[66,70],[54,64],[46,56],[38,64],[30,72]]},
      {name:'Eule',count:72,a:[[28,24],[18,40],[18,58],[28,74],[42,82],[58,82],[72,74],[82,58],[82,40],[72,24],[58,18],[50,26],[42,18]]},
      {name:'Sonne',count:70,a:[[50,12],[56,28],[72,20],[64,36],[82,36],[68,48],[82,60],[64,60],[72,76],[56,68],[50,84],[44,68],[28,76],[36,60],[18,60],[32,48],[18,36],[36,36],[28,20],[44,28]]},
      {name:'Labyrinth',count:82,a:[[18,18],[82,18],[82,30],[30,30],[30,70],[70,70],[70,42],[42,42],[42,58],[58,58],[58,54],[50,54],[50,46],[74,46],[74,74],[18,74]]},
      {name:'Lorbeer',count:78,a:[[50,14],[40,20],[30,30],[22,44],[20,58],[26,72],[38,82],[50,86],[62,82],[74,72],[80,58],[78,44],[70,30],[60,20]]},
      {name:'Helm',count:74,a:[[24,28],[38,18],[58,18],[74,28],[82,46],[78,64],[62,64],[58,82],[42,82],[42,64],[26,64],[18,48]]},
      {name:'Lyra',count:76,a:[[34,18],[26,34],[24,52],[30,72],[42,82],[58,82],[70,72],[76,52],[74,34],[66,18],[58,28],[50,38],[42,28]]},
      {name:'Dreizack',count:68,a:[[30,18],[30,36],[40,26],[50,18],[50,72],[60,18],[70,26],[70,18],[70,36],[60,26],[50,18],[40,26],[30,36],[50,72],[42,84],[58,84]]}
    ]
  };
}
const dotShapeSets = makeDotShapes();
const dotsCanvas = document.getElementById('dotsCanvas'), dctx = dotsCanvas.getContext('2d');
let dotsState = {points:[], next:1, shapeIndex:0};
function buildDots(){
  const set = dotShapeSets[currentWorld];
  const shapeIndex = Math.floor(Math.random()*set.length);
  const spec = set[shapeIndex];
  const points = resampleAnchors(spec.a, spec.count, true).map((p,i)=>({x:p.x,y:p.y,n:i+1}));
  dotsState = {points, next:1, shapeIndex};
  document.getElementById('dotsStatus').textContent = `${spec.name} · Bild ${shapeIndex+1} / ${set.length}`;
  document.getElementById('dotsMsg').classList.remove('show');
  drawDots();
}
function scaleDotPoint(p){ const W=dotsCanvas.width,H=dotsCanvas.height, margin=92; return {x: margin + (p.x/100)*(W-margin*2), y: margin + (p.y/100)*(H-margin*2)}; }
function drawDots(){
  dctx.clearRect(0,0,dotsCanvas.width,dotsCanvas.height); dctx.fillStyle='#fff'; dctx.fillRect(0,0,dotsCanvas.width,dotsCanvas.height);
  dctx.strokeStyle='#4a7fa7'; dctx.lineWidth=5; dctx.beginPath();
  for(let i=1;i<dotsState.next-1;i++){ const a=scaleDotPoint(dotsState.points[i-1]), b=scaleDotPoint(dotsState.points[i]); dctx.moveTo(a.x,a.y); dctx.lineTo(b.x,b.y); }
  dctx.stroke();
  dotsState.points.forEach(p=>{ const s=scaleDotPoint(p); const done = p.n < dotsState.next; dctx.fillStyle = done ? '#2f8a66' : '#f1efe7'; dctx.beginPath(); dctx.arc(s.x,s.y, done ? 11 : 10, 0, Math.PI*2); dctx.fill(); dctx.fillStyle = done ? '#fff' : '#223038'; dctx.font='900 10px system-ui'; dctx.textAlign='center'; dctx.textBaseline='middle'; dctx.fillText(p.n, s.x, s.y); });
}
function dotsPointer(e){ const rect=dotsCanvas.getBoundingClientRect(), sx=dotsCanvas.width/rect.width, sy=dotsCanvas.height/rect.height; return {x:(e.clientX-rect.left)*sx, y:(e.clientY-rect.top)*sy}; }
dotsCanvas.addEventListener('pointerdown', e=>{
  if(!dotsState.points.length) return;
  const pointer=dotsPointer(e); const target = scaleDotPoint(dotsState.points[dotsState.next-1]);
  if(Math.hypot(pointer.x-target.x, pointer.y-target.y) <= 20){ dotsState.next++; if(dotsState.next > dotsState.points.length){ drawDots(); document.getElementById('dotsMsg').classList.add('show'); awardReward('dots'); } else { drawDots(); } }
});

// QUICK
function buildQuick(){
  const wrap = document.getElementById('quickGrid'); wrap.innerHTML='';
  const items = pickN(worlds[currentWorld].quick, Math.min(roundSize, worlds[currentWorld].quick.length));
  let solved = 0;
  items.forEach(q=>{
    const card=document.createElement('div'); card.className='quick-card'; card.innerHTML=`<b>${q.q}</b><div class="opts"></div>`; const opts=card.querySelector('.opts');
    shuffled(q.opts.map((text,i)=>({text, correct:i===q.a}))).forEach(opt=>{ const b=document.createElement('button'); b.className='quick-opt'; b.textContent=opt.text; b.onclick=()=>{ if(b.disabled) return; [...opts.children].forEach(x=>x.disabled=true); if(opt.correct){ b.classList.add('good'); solved++; if(solved===items.length) awardReward('quick'); } else { b.classList.add('bad'); [...opts.children].find(x=>x.textContent===q.opts[q.a])?.classList.add('good'); } }; opts.appendChild(b); });
    wrap.appendChild(card);
  });
}

syncHome(); showHome();
