
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
  {id:'quick',num:'08 · Wissen',title:'Quiz',desc:'Knifflige Fragen.',sym:'?',tag:'quiz'}
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


/* ========================= V4.3 advanced game engines ========================= */
/* Expanded word banks for more variation */
worlds.jungle.words3.push('BAUMKRONE','TIERSPUREN','REGENZEIT','BLÄTTERDACH','WILDPFAD','URWALDFLUSS','LEBENSRAUM','BAUMFROSCH','TUKANSCHNABEL','JAGUARFELL','LIANENGEFLECHT');
worlds.space.words3.push('STERNBILD','PLANETENBAHN','RAUMANZUG','MONDKRATER','KOSMOS','SONNENSTURM','MARSROVER','STERNNEBEL','LICHTJAHR','RAUMKAPSEL','STARTFENSTER');
worlds.sea.words3.push('DELFINSCHULE','TIEFSEE','MEERESGRUND','KÜSTENLINIE','WASSERDRUCK','STRÖMUNG','GEZEITEN','WALGESANG','HAIFLOSSE','SEETANG','MEERESWELLE');
worlds.greek.words3.push('GÖTTERBOTE','OLYMP','HELDENSAGE','ARIADNEFADEN','POSEIDON','GÖTTERBERG','SÄULENGANG','MEERESGOTT','ORAKEL','LORBEERKRANZ','HELDENTAT','ANTIKETEMPEL');

const quizBankV43 = {
  jungle:[
    {d:1,q:'Welches dieser Tiere ist ein Säugetier?',o:['Tukan','Krokodil','Affe','Frosch'],a:2},
    {d:1,q:'Welche Pflanzenteile nehmen Wasser aus dem Boden auf?',o:['Blüten','Wurzeln','Früchte','Blätter'],a:1},
    {d:1,q:'Warum ist Tarnung im Dschungel nützlich?',o:['Zum Verstecken','Zum Fliegen','Zum Schwimmen','Zum Wärmen'],a:0},
    {d:1,q:'Was beschreibt das Kronendach des Regenwaldes?',o:['Baumwipfel-Schicht','Waldboden','Flussbett','Wurzelschicht'],a:0},
    {d:1,q:'Welches Tier gehört zu den Amphibien?',o:['Jaguar','Frosch','Papagei','Schlange'],a:1},
    {d:1,q:'Was braucht eine Pflanze für Fotosynthese?',o:['Sonnenlicht','Sanduhr','Salzwasser','Steine'],a:0},
    {d:2,q:'Warum haben viele Regenwaldpflanzen grosse Blätter?',o:['Mehr Licht auffangen','Schneller rennen','Weniger Wurzeln bilden','Tiere erschrecken'],a:0},
    {d:2,q:'Welche Reihenfolge passt zu einer Nahrungskette?',o:['Blatt → Insekt → Frosch','Frosch → Blatt → Sonne','Jaguar → Baum → Regen','Insekt → Sonne → Blatt'],a:0},
    {d:2,q:'Was bedeutet nachtaktiv?',o:['Tagsüber schlafen, nachts aktiv','Nur im Regen aktiv','Nur auf Bäumen leben','Im Wasser schlafen'],a:0},
    {d:2,q:'Warum sind Warnfarben bei manchen Fröschen auffällig?',o:['Sie können vor Gift warnen','Sie machen unsichtbar','Sie kühlen den Körper','Sie locken Pflanzen an'],a:0},
    {d:2,q:'Welche Aussage über Regenwälder stimmt?',o:['Viele Nährstoffe zirkulieren schnell','Es regnet dort nie','Es gibt kaum Arten','Alle Bäume sind gleich hoch'],a:0},
    {d:2,q:'Was ist ein Epiphyt?',o:['Pflanze, die auf anderer Pflanze wächst','Ein nachtaktives Tier','Ein Fluss im Urwald','Eine Baumwurzel'],a:0},
    {d:3,q:'Wenn das Kronendach stark verschwindet, was ändert sich am Waldboden zuerst?',o:['Mehr direktes Sonnenlicht','Weniger Schwerkraft','Mehr Meerwasser','Der Boden wird sofort zu Eis'],a:0},
    {d:3,q:'Warum hilft ein dichter Regenwald dem Wasserkreislauf?',o:['Pflanzen geben Wasser an die Luft ab','Bäume stoppen jede Wolke','Blätter erzeugen Meerwasser','Wurzeln verhindern Verdunstung vollständig'],a:0},
    {d:3,q:'Warum sind nährstoffarme Böden im Regenwald trotzdem von dichtem Wald bedeckt?',o:['Nährstoffe werden rasch wiederverwendet','Bäume brauchen keine Nährstoffe','Nur Regen ernährt Bäume','Tiere düngen jeden Baum täglich'],a:0},
    {d:3,q:'Ein Tier hat sehr grosse Augen und bewegt sich nachts. Welche Anpassung ist am wahrscheinlichsten?',o:['Besseres Sehen bei wenig Licht','Schnelleres Schwimmen','Schutz vor Kälte im Schnee','Atmen unter Wasser'],a:0},
    {d:3,q:'Welche Veränderung gefährdet Artenvielfalt am stärksten?',o:['Zerschneiden grosser Waldgebiete','Ein einzelner Regenschauer','Ein neuer Blatttrieb','Ein umgefallener Ast'],a:0},
    {d:3,q:'Warum leben viele Arten in unterschiedlichen Höhen des Regenwaldes?',o:['Dort gibt es verschiedene Nahrung und Lichtbedingungen','Alle Höhen sind völlig gleich','Nur wegen der Temperatur am Boden','Weil Tiere nicht klettern können'],a:0}
  ],
  space:[
    {d:1,q:'Warum leuchtet der Mond am Nachthimmel?',o:['Er reflektiert Sonnenlicht','Er erzeugt eigenes Feuer','Er ist aus Lampen','Er sammelt Sternenlicht'],a:0},
    {d:1,q:'Welcher Planet ist für seine grossen Ringe bekannt?',o:['Mars','Saturn','Merkur','Erde'],a:1},
    {d:1,q:'Was hält uns auf der Erde am Boden?',o:['Schwerkraft','Wind','Magnetfarbe','Mondlicht'],a:0},
    {d:1,q:'Was ist die Sonne?',o:['Ein Stern','Ein Planet','Ein Mond','Ein Komet'],a:0},
    {d:1,q:'Welcher Planet ist der dritte von der Sonne?',o:['Mars','Venus','Erde','Jupiter'],a:2},
    {d:1,q:'Wofür braucht ein Astronaut einen Raumanzug?',o:['Luft und Schutz','Zum schneller Rennen','Zum Schwimmen','Als Fallschirm auf der Erde'],a:0},
    {d:2,q:'Warum schweben Astronauten in einer Raumstation?',o:['Sie befinden sich im dauernden freien Fall','Es gibt gar keine Schwerkraft','Die Raumstation ist mit Helium gefüllt','Magnete drücken sie nach oben'],a:0},
    {d:2,q:'Warum sehen wir verschiedene Mondphasen?',o:['Wir sehen unterschiedlich beleuchtete Teile','Der Mond wird kleiner und grösser','Wolken schneiden den Mond ab','Die Erde wirft jede Nacht Schatten auf ihn'],a:0},
    {d:2,q:'Warum wirkt Mars rötlich?',o:['Eisenoxide im Boden','Rote Lampen','Flüssige Lava überall','Rote Wolken aus Feuer'],a:0},
    {d:2,q:'Was ist ein Lichtjahr?',o:['Eine Entfernung','Eine Zeitspanne von 12 Monaten','Eine Temperatur','Eine Geschwindigkeit'],a:0},
    {d:2,q:'Was ist eine Umlaufbahn?',o:['Der Weg eines Körpers um einen anderen','Eine Startbahn auf der Erde','Ein Tunnel im Mond','Ein Sternbild'],a:0},
    {d:2,q:'Was unterscheidet einen Stern von einem Planeten am stärksten?',o:['Ein Stern erzeugt selbst Licht','Planeten sind immer grösser','Sterne haben keine Schwerkraft','Planeten bestehen nur aus Stein'],a:0},
    {d:3,q:'Warum kann sich Schall im Weltraum kaum ausbreiten?',o:['Es fehlt ein Medium wie Luft','Schall ist dort zu schwer','Sterne schlucken jeden Ton','Licht ist zu hell'],a:0},
    {d:3,q:'Was verursacht die Jahreszeiten auf der Erde hauptsächlich?',o:['Neigung der Erdachse','Abstand der Erde zur Sonne','Mondphasen','Wolkenmenge'],a:0},
    {d:3,q:'Wann entsteht eine Mondfinsternis?',o:['Die Erde steht zwischen Sonne und Mond','Der Mond steht zwischen Sonne und Erde','Der Mars verdeckt den Mond','Die Sonne steht hinter Jupiter'],a:0},
    {d:3,q:'Warum bleiben Fussabdrücke auf dem Mond sehr lange erhalten?',o:['Kaum Wind und Wetter verändern sie','Der Boden ist aus Beton','Sie frieren sofort fest','Der Mond dreht sich nicht'],a:0},
    {d:3,q:'Was passiert mit deinem Gewicht auf dem Mond?',o:['Es ist kleiner als auf der Erde','Es ist grösser','Es bleibt exakt gleich','Es wird null, weil es keine Masse gibt'],a:0},
    {d:3,q:'Warum sehen wir Sterne in die Vergangenheit?',o:['Ihr Licht braucht Zeit bis zu uns','Sterne drehen die Zeit zurück','Die Erde speichert Sternbilder','Teleskope zeigen alte Fotos'],a:0}
  ],
  sea:[
    {d:1,q:'Welches Tier ist ein Säugetier?',o:['Delfin','Thunfisch','Seestern','Krabbe'],a:0},
    {d:1,q:'Womit atmen die meisten Fische?',o:['Kiemen','Lungen','Flügel','Hauttaschen'],a:0},
    {d:1,q:'Was ist Meerwasser im Vergleich zu Trinkwasser?',o:['Salzig','Süss','Ölig','Trocken'],a:0},
    {d:1,q:'Wozu dient ein Leuchtturm?',o:['Schiffen Orientierung geben','Fische füttern','Wellen stoppen','Sand trocknen'],a:0},
    {d:1,q:'Was ist eine Koralle?',o:['Ein Tierverband','Eine Steinpflanze','Eine Muschelart','Ein Fischschwarm'],a:0},
    {d:1,q:'Welches Tier muss zum Atmen regelmässig an die Oberfläche?',o:['Wal','Hai','Thunfisch','Seestern'],a:0},
    {d:2,q:'Was geschieht mit dem Wasserdruck, wenn man tiefer taucht?',o:['Er nimmt zu','Er nimmt ab','Er bleibt immer gleich','Er verschwindet'],a:0},
    {d:2,q:'Warum sind viele Fische oben dunkler und unten heller?',o:['Tarnung von oben und unten','Damit sie schneller schwimmen','Damit sie wärmer bleiben','Damit sie lauter hören'],a:0},
    {d:2,q:'Welcher Himmelskörper beeinflusst Ebbe und Flut besonders stark?',o:['Mond','Mars','Saturn','Polarstern'],a:0},
    {d:2,q:'Was transportieren Meeresströmungen über grosse Strecken?',o:['Wärme und Nährstoffe','Nur Sand','Nur Salz','Nur Fische'],a:0},
    {d:2,q:'Warum ist ein Delfin kein Fisch?',o:['Er atmet Luft und säugt Junge','Er kann springen','Er lebt in Gruppen','Er ist grau'],a:0},
    {d:2,q:'Was bedeutet Biolumineszenz?',o:['Lebewesen erzeugen Licht','Wasser leuchtet durch Salz','Mondlicht wird gespeichert','Korallen spiegeln Lampen'],a:0},
    {d:3,q:'Warum kann warmes Meerwasser Korallenbleiche auslösen?',o:['Korallen verlieren wichtige Algenpartner','Korallen werden zu Eis','Das Salz verschwindet','Fische färben Korallen weiss'],a:0},
    {d:3,q:'Was passiert bei zunehmender Ozeanversauerung?',o:['Schalenbildner können es schwerer haben','Das Meer wird zu Essig','Alles Salz verschwindet','Wellen hören auf'],a:0},
    {d:3,q:'Warum sind Seegraswiesen wichtig?',o:['Sie bieten Lebensraum und speichern Kohlenstoff','Sie machen das Meer süss','Sie stoppen Gezeiten','Sie erzeugen Sand aus Licht'],a:0},
    {d:3,q:'Was ist Plankton?',o:['Kleine treibende Organismen','Nur junge Haie','Unterwassersteine','Eine Wellenart'],a:0},
    {d:3,q:'Warum können grosse Algenwälder viele Tiere beherbergen?',o:['Sie schaffen Struktur und Nahrung','Sie entfernen allen Sauerstoff','Sie machen Wasser fest','Sie verhindern Sonnenlicht vollständig'],a:0},
    {d:3,q:'Welche Folge kann Überfischung haben?',o:['Nahrungsnetze geraten aus dem Gleichgewicht','Das Meer wird weniger salzig','Gezeiten verschwinden','Korallen werden zu Fischen'],a:0}
  ],
  greek:[
    {d:1,q:'Mit welchem Zeichen wird Zeus oft dargestellt?',o:['Blitz','Dreizack','Flügelhelm','Lyra'],a:0},
    {d:1,q:'Welches Tier gehört besonders zu Athene?',o:['Eule','Delfin','Löwe','Adler'],a:0},
    {d:1,q:'Wo lebte der Minotaurus der Sage nach?',o:['Im Labyrinth','Auf dem Olymp','Im Meer','In Troja'],a:0},
    {d:1,q:'Was ist Kreta?',o:['Eine Insel','Ein Gebirge','Ein Fluss','Ein Planet'],a:0},
    {d:1,q:'Woraus wird Olivenöl hergestellt?',o:['Oliven','Feigen','Trauben','Mandeln'],a:0},
    {d:1,q:'Wofür nutzte man Amphoren?',o:['Zum Aufbewahren und Transportieren','Zum Fliegen','Als Musikinstrument','Als Schild'],a:0},
    {d:2,q:'Wer gilt in der griechischen Mythologie als Gott des Meeres?',o:['Poseidon','Hermes','Ares','Apollo'],a:0},
    {d:2,q:'Welche Hilfe bekam Theseus für den Weg aus dem Labyrinth?',o:['Ariadnes Faden','Zeus Blitz','Hermes Sandalen','Poseidons Dreizack'],a:0},
    {d:2,q:'Wofür ist Hermes besonders bekannt?',o:['Als Götterbote','Als Gott des Meeres','Als Minotaurus','Als König von Kreta'],a:0},
    {d:2,q:'Wo liegt Knossos?',o:['Auf Kreta','Auf Sizilien','In Ägypten','In Spanien'],a:0},
    {d:2,q:'Wie beginnt das griechische Alphabet?',o:['Alpha, Beta','Gamma, Delta','Omega, Sigma','Pi, Rho'],a:0},
    {d:2,q:'Wer musste der Sage nach zwölf grosse Aufgaben lösen?',o:['Herakles','Odysseus','Ikarus','Minos'],a:0},
    {d:3,q:'Warum war Ariadnes Faden im Labyrinth so wichtig?',o:['Er markierte den Rückweg','Er öffnete eine Geheimtür','Er machte Theseus unsichtbar','Er band den Minotaurus fest'],a:0},
    {d:3,q:'Was war der entscheidende Fehler von Ikarus?',o:['Er flog zu nah an die Sonne','Er vergass den Faden','Er verlor den Dreizack','Er weckte Zeus'],a:0},
    {d:3,q:'Womit ist Odysseus besonders verbunden?',o:['Der langen Heimreise nach Troja','Den zwölf Arbeiten','Dem Bau des Labyrinths','Der Erfindung des Alphabets'],a:0},
    {d:3,q:'Was bezeichnet der Olymp in den Mythen?',o:['Wohnort der Götter','Das Labyrinth auf Kreta','Ein Schiff','Eine Amphore'],a:0},
    {d:3,q:'Welche Kombination passt zusammen?',o:['Athene – Weisheit – Eule','Poseidon – Himmel – Blitz','Zeus – Meer – Dreizack','Hermes – Labyrinth – Minotaurus'],a:0},
    {d:3,q:'Was unterscheidet Mythologie von Geschichte?',o:['Mythen erzählen überlieferte Götter- und Heldengeschichten','Mythen sind immer genaue Messprotokolle','Geschichte handelt nur von Göttern','Es gibt keinen Unterschied'],a:0}
  ]
};

let stickerMeterV43 = JSON.parse(localStorage.getItem('rw43_sticker_meter') || '{}');
const STICKER_THRESHOLD_V43 = 4;
function saveStickerMeterV43(){ localStorage.setItem('rw43_sticker_meter', JSON.stringify(stickerMeterV43)); }
function meterForWorld(key){ return Math.max(0, Math.min(STICKER_THRESHOLD_V43-1, +(stickerMeterV43[key] || 0))); }
function setMeterForWorld(key,v){ stickerMeterV43[key]=v; saveStickerMeterV43(); }

function showProgressToast(text,icon='🧩'){
  const toast=document.getElementById('rewardToast');
  document.getElementById('rewardIcon').textContent=icon;
  document.getElementById('rewardName').textContent=text;
  toast.querySelector('b').textContent = icon==='🏆' ? 'Runde geschafft!' : 'Sticker-Fortschritt';
  toast.classList.add('show'); clearTimeout(showStickerToast.timer); showStickerToast.timer=setTimeout(()=>toast.classList.remove('show'),1800);
}

function awardReward(gameId){
  if(instanceCompletedV43[gameId]) return;
  instanceCompletedV43[gameId]=true;
  stars += 1;
  document.getElementById('starCount').textContent=stars;
  const starDummy=document.getElementById('statStars'); if(starDummy) starDummy.textContent=stars;
  let meter=meterForWorld(currentWorld)+1;
  if(meter>=STICKER_THRESHOLD_V43){
    meter=0;
    const sticker=unlockSticker(currentWorld);
    if(sticker){ showStickerToast(sticker); sparkle('🧩'); }
    else { showProgressToast('Albumseite vollständig!','🏆'); }
  } else {
    showProgressToast(`${meter}/${STICKER_THRESHOLD_V43} bis zum nächsten Sticker`);
  }
  setMeterForWorld(currentWorld,meter);
  savePrefs(); updateStickerCounts();
}
const instanceCompletedV43={word:false,maze:false,mix:false,logic:false,memory:false,sudoku:false,dots:false,quick:false};
function resetInstanceV43(id){ instanceCompletedV43[id]=false; }

function updateStickerCounts(){
  const total=totalStickerCount();
  const stat=document.getElementById('statStickers'); if(stat) stat.textContent=`${total}/40`;
  const home=document.getElementById('homeAlbumCount'); if(home) home.textContent=`${total}/40`;
  const albumStatus=document.getElementById('albumStatus'); if(albumStatus) albumStatus.textContent=`${total}/40 · nächster ${meterForWorld(currentAlbumWorld)}/${STICKER_THRESHOLD_V43}`;
  const mini=document.getElementById('albumTotalMini'); if(mini) mini.textContent=`${total}/40`;
}

function renderAlbum(){
  normalizeStickers();
  const tabs=document.getElementById('albumTabs'), grid=document.getElementById('albumGrid');
  tabs.innerHTML='';
  Object.entries(worlds).forEach(([key,w])=>{
    const b=document.createElement('button'); b.className='album-tab'+(key===currentAlbumWorld?' on':'');
    b.innerHTML=`${w.icon} ${w.name}<small>${worldStickerCount(key)}/10 · ${meterForWorld(key)}/${STICKER_THRESHOLD_V43}</small>`;
    b.onclick=()=>{currentAlbumWorld=key; savePrefs(); renderAlbum();}; tabs.appendChild(b);
  });
  const entries=stickerCatalog[currentAlbumWorld], unlocked=new Set(stickers[currentAlbumWorld]||[]);
  document.getElementById('albumTitle').textContent=worlds[currentAlbumWorld].name;
  document.getElementById('albumSubtitle').textContent=`Nächster Sticker: ${meterForWorld(currentAlbumWorld)}/${STICKER_THRESHOLD_V43} Siege`;
  document.getElementById('albumProgress').textContent=`${unlocked.size}/10`;
  grid.innerHTML='';
  entries.forEach((st,i)=>{
    const div=document.createElement('div'), on=unlocked.has(i); div.className='sticker '+(on?'unlocked':'locked');
    if(on){ div.style.background=`linear-gradient(145deg,${st.colors[0]},${st.colors[1]})`; div.style.color='#fff'; div.innerHTML=`<div class="sticker-top"><span class="sticker-icon">${st.icon}</span><span class="sticker-num">${i+1}</span></div><div class="sticker-name">${st.name}</div>`; }
    else { div.innerHTML=`<div class="sticker-top"><span class="sticker-icon">🔒</span><span class="sticker-num">${i+1}</span></div><div class="sticker-name">Noch offen</div>`; }
    grid.appendChild(div);
  });
  updateStickerCounts();
}

function syncHome(){
  const ws=document.getElementById('worldSelect'); if(ws) ws.value=currentWorld;
  const rs=document.getElementById('roundSelect'); if(rs) rs.value=String(roundSize);
  document.getElementById('starCount').textContent=stars;
  document.querySelectorAll('.diff').forEach(b=>b.classList.toggle('on',+b.dataset.d===difficulty));
  renderWorlds(); renderGames(); applyTheme(); updateStickerCounts();
}
function renderWorlds(){
  const wrap=document.getElementById('worldGrid'); if(!wrap) return; wrap.innerHTML='';
  Object.entries(worlds).forEach(([key,w])=>{
    const b=document.createElement('button'); b.className='world-card w-'+key+(key===currentWorld?' active':'');
    b.innerHTML=`<span>${w.icon}</span><b>${w.name}</b><em>${w.big}</em>`;
    b.onclick=()=>{currentWorld=key; savePrefs(); syncHome();}; wrap.appendChild(b);
  });
}
function renderGames(){
  const grid=document.getElementById('gameGrid'); if(!grid) return; grid.innerHTML='';
  const items=[
    ['word','01','Wortsuche','ABC','Wörter'],['maze','02','Labyrinth','↝','Finger'],['mix','03','Wortsalat','AZ','Wörter'],['logic','04','Logikreihen','◆','Denken'],
    ['memory','05','Memory','◎','Merken'],['sudoku','06','Sudoku','⊞','Logik'],['dots','07','Punktebild','⋯','Zeichnen'],['quick','08','Quiz','?','Wissen']
  ];
  items.forEach(([id,num,title,sym,tag])=>{ const b=document.createElement('button'); b.className='game-card'; b.innerHTML=`<span class="num">${num}</span><span class="tag">${tag}</span><h4>${title}</h4><span class="sym">${sym}</span>`; b.onclick=()=>openGame(id); grid.appendChild(b); });
}

function openGame(id){
  resetInstanceV43(id); show(id);
  if(id==='word') buildWordGame(); else if(id==='maze') buildMaze(); else if(id==='mix') newScrambleRound(); else if(id==='logic') newLogic(); else if(id==='memory') buildMemory(); else if(id==='sudoku') buildSudoku(); else if(id==='dots') buildDots(); else if(id==='quick') buildQuick();
}

// WORD SEARCH: deliberately overlaps words and strongly favors diagonals
function buildWordGame(){
  resetInstanceV43('word');
  const raw=wordBank().map(x=>x.toUpperCase().replace(/[^A-ZÄÖÜ]/g,''));
  const count=difficulty===1?9:difficulty===2?11:13;
  let chosen=pickN(raw,count).sort((a,b)=>b.length-a.length);
  const maxLen=Math.max(...chosen.map(w=>w.length));
  const size=Math.max(difficulty===1?13:difficulty===2?15:17,maxLen+1);
  const diagonalDirs=[[1,1],[-1,-1],[1,-1],[-1,1]];
  const straightDirs=[[1,0],[-1,0],[0,1],[0,-1]];
  let best=null;
  for(let outer=0;outer<80;outer++){
    const grid=Array.from({length:size},()=>Array(size).fill(''));
    const placed=[];
    let diagonalCount=0, overlapCount=0, failed=false;
    for(let wi=0;wi<chosen.length;wi++){
      const word=chosen[wi]; let candidates=[];
      if(wi>0){
        for(let gy=0;gy<size;gy++) for(let gx=0;gx<size;gx++) if(grid[gy][gx]){
          for(let ci=0;ci<word.length;ci++) if(word[ci]===grid[gy][gx]){
            const dirs=shuffled([...diagonalDirs,...diagonalDirs,...straightDirs]);
            for(const [dx,dy] of dirs){
              const sx=gx-dx*ci, sy=gy-dy*ci, ex=sx+dx*(word.length-1), ey=sy+dy*(word.length-1);
              if(sx<0||sy<0||ex<0||ey<0||sx>=size||sy>=size||ex>=size||ey>=size) continue;
              let ok=true, overlaps=0;
              for(let i=0;i<word.length;i++){ const c=grid[sy+dy*i][sx+dx*i]; if(c&&c!==word[i]){ok=false;break;} if(c===word[i]) overlaps++; }
              if(ok&&overlaps>0) candidates.push({sx,sy,dx,dy,overlaps,score:overlaps*10+(Math.abs(dx)+Math.abs(dy)===2?4:0)+Math.random()});
            }
          }
        }
      }
      if(!candidates.length){
        const dirs=shuffled([...diagonalDirs,...diagonalDirs,...diagonalDirs,...straightDirs]);
        for(let t=0;t<500;t++){
          const [dx,dy]=dirs[t%dirs.length], sx=Math.floor(Math.random()*size), sy=Math.floor(Math.random()*size), ex=sx+dx*(word.length-1), ey=sy+dy*(word.length-1);
          if(ex<0||ey<0||ex>=size||ey>=size) continue;
          let ok=true, overlaps=0;
          for(let i=0;i<word.length;i++){const c=grid[sy+dy*i][sx+dx*i]; if(c&&c!==word[i]){ok=false;break;} if(c===word[i]) overlaps++;}
          if(ok){candidates.push({sx,sy,dx,dy,overlaps,score:overlaps*10+(Math.abs(dx)+Math.abs(dy)===2?4:0)+Math.random()}); if(candidates.length>20) break;}
        }
      }
      if(!candidates.length){failed=true;break;}
      candidates.sort((a,b)=>b.score-a.score); const c=candidates[Math.floor(Math.random()*Math.min(4,candidates.length))];
      const cells=[]; for(let i=0;i<word.length;i++){const x=c.sx+c.dx*i,y=c.sy+c.dy*i; grid[y][x]=word[i]; cells.push(`${x},${y}`);} placed.push({word,cells}); if(Math.abs(c.dx)+Math.abs(c.dy)===2) diagonalCount++; if(c.overlaps>0) overlapCount++;
    }
    if(!failed){ const score=overlapCount*3+diagonalCount; if(!best||score>best.score) best={grid,placed,score,overlapCount,diagonalCount}; if(overlapCount>=Math.ceil(chosen.length*.55)&&diagonalCount>=Math.ceil(chosen.length*.55)) break; }
  }
  const grid=best.grid, placed=best.placed, abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let y=0;y<size;y++) for(let x=0;x<size;x++) if(!grid[y][x]) grid[y][x]=abc[Math.floor(Math.random()*abc.length)];
  wg={size,words:placed.map(p=>p.word),grid,placed,found:new Set(),drag:null};
  const el=document.getElementById('wordGrid'); el.innerHTML=''; el.style.gridTemplateColumns=`repeat(${size},1fr)`;
  grid.forEach((row,y)=>row.forEach((ch,x)=>{const d=document.createElement('div');d.className='letter';d.dataset.x=x;d.dataset.y=y;d.textContent=ch;el.appendChild(d);}));
  document.getElementById('wordList').innerHTML=wg.words.map(w=>`<span class="word-chip" data-w="${w}">${w}</span>`).join('');
  document.getElementById('wordStatus').textContent=`0/${wg.words.length} · ${best.overlapCount} überlappen`;
  document.getElementById('wordMsg').classList.remove('show'); el.onpointerdown=startWordDrag;el.onpointermove=moveWordDrag;el.onpointerup=endWordDrag;el.onpointercancel=endWordDrag;
}

// Harder maze, path persistence remains
function buildMaze(){
  resetInstanceV43('maze');
  const cols=difficulty===1?13:difficulty===2?18:24, rows=difficulty===1?9:difficulty===2?12:15;
  maze={cols,rows,cells:makeMaze(cols,rows),path:[{x:0,y:0}],drawing:false,solved:false};
  document.getElementById('mazeMsg').classList.remove('show'); document.getElementById('mazeStatus').textContent=`${cols}×${rows} · Weg bleibt`; drawMaze();
}

// Word scramble is now a 5-word round
let scrambleRoundV43={items:[],idx:0,correct:0};
function newScrambleRound(){
  resetInstanceV43('mix');
  const bank=(difficulty===1?worlds[currentWorld].words1:[...worlds[currentWorld].scramble,...worlds[currentWorld].words2]).map(w=>w.toUpperCase().replace(/[^A-ZÄÖÜ]/g,''));
  scrambleRoundV43={items:pickN(bank,5),idx:0,correct:0}; showScrambleV43();
}
function showScrambleV43(){
  const msg=document.getElementById('mixMsg'); msg.className='message'; msg.textContent='';
  if(scrambleRoundV43.idx>=scrambleRoundV43.items.length){ document.getElementById('scrambleWord').textContent='FERTIG'; document.getElementById('scrambleInput').value=''; msg.textContent='5 Wörter gelöst!'; msg.classList.add('show'); awardReward('mix'); return; }
  scrambleAnswer=scrambleRoundV43.items[scrambleRoundV43.idx]; document.getElementById('scrambleWord').textContent=scrambleText(scrambleAnswer); const inp=document.getElementById('scrambleInput'); inp.value=''; inp.placeholder=`Wort ${scrambleRoundV43.idx+1}/5`; inp.focus();
}
function checkScramble(){
  const input=document.getElementById('scrambleInput').value.trim().toUpperCase().replace(/[^A-ZÄÖÜ]/g,''), msg=document.getElementById('mixMsg');
  if(input===scrambleAnswer){ scrambleRoundV43.correct++; scrambleRoundV43.idx++; msg.textContent='Richtig!'; msg.className='message show'; setTimeout(showScrambleV43,420); }
  else { msg.textContent='Noch nicht.'; msg.className='message show'; }
}

// Logic generator with multiple rule families and complete rounds
let logicRoundV43={items:[],idx:0,correct:0,answered:false};
function numberOptions(answer,spread=4){ const set=new Set([answer]); const deltas=[-spread,-2,-1,1,2,spread,spread+2,-spread-2]; for(const d of shuffled(deltas)){ if(set.size>=4) break; const v=answer+d; if(v>=0)set.add(v); } return shuffled([...set].map(String)); }
function qNum(seq,answer,spread=4){return {p:seq.join(' · ')+' · ?',a:String(answer),o:numberOptions(answer,spread)}}
function makeLogicV43(level){
  const types1=['step','double','rotate','count','letters'];
  const types2=['growdiff','alternate','interleave','squares','prime','x2minus','pair','rotate2'];
  const types3=['fibo','triangular','mixedops','letterjump','cubes','interleave2','nested','visualgroup'];
  const type=shuffled(level===1?types1:level===2?types2:types3)[0];
  if(type==='step'){const a=2+Math.floor(Math.random()*7),d=2+Math.floor(Math.random()*5);return qNum([a,a+d,a+2*d,a+3*d],a+4*d,d);}
  if(type==='double'){const a=1+Math.floor(Math.random()*4);return qNum([a,a*2,a*4,a*8],a*16,3);}
  if(type==='rotate'){return {p:'↑ · → · ↓ · ← · ?',a:'↑',o:shuffled(['↑','→','↓','←'])};}
  if(type==='count'){return {p:'● · ●● · ●●● · ?',a:'●●●●',o:shuffled(['●●','●●●','●●●●','●●●●●'])};}
  if(type==='letters'){const s=1+Math.floor(Math.random()*4), letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';const i=Math.floor(Math.random()*8);return {p:`${letters[i]} · ${letters[i+s]} · ${letters[i+2*s]} · ${letters[i+3*s]} · ?`,a:letters[i+4*s],o:shuffled([letters[i+4*s],letters[i+4*s-1],letters[i+4*s+1],letters[i+4*s+2]])};}
  if(type==='growdiff'){const a=2+Math.floor(Math.random()*5),d=1+Math.floor(Math.random()*3),inc=1+Math.floor(Math.random()*2);let seq=[a],cur=a,dd=d;for(let i=0;i<4;i++){cur+=dd;seq.push(cur);dd+=inc;}return qNum(seq,cur+dd,3);}
  if(type==='alternate'){const a=2+Math.floor(Math.random()*5),x=2+Math.floor(Math.random()*4),y=x+2+Math.floor(Math.random()*4),seq=[a];let cur=a;for(let i=0;i<5;i++){cur+=i%2===0?x:y;seq.push(cur);}const ans=cur+(5%2===0?x:y);return qNum(seq,ans,4);}
  if(type==='interleave'){const a=2+Math.floor(Math.random()*5),b=10+Math.floor(Math.random()*6),x=3+Math.floor(Math.random()*4),y=2+Math.floor(Math.random()*3);const seq=[a,b,a+x,b+y,a+2*x,b+2*y];return qNum(seq,a+3*x,4);}
  if(type==='squares'){const n=1+Math.floor(Math.random()*3),seq=[n*n,(n+1)**2,(n+2)**2,(n+3)**2];return qNum(seq,(n+4)**2,5);}
  if(type==='prime'){const primes=[2,3,5,7,11,13,17,19,23];const i=Math.floor(Math.random()*3);return qNum(primes.slice(i,i+5),primes[i+5],4);}
  if(type==='x2minus'){const a=2+Math.floor(Math.random()*3);let seq=[a],c=a;for(let i=0;i<4;i++){c=c*2-1;seq.push(c);}return qNum(seq,c*2-1,5);}
  if(type==='pair'){const k=2+Math.floor(Math.random()*4);return qNum([2,2*k,3,3*k,4,4*k],5,2);}
  if(type==='rotate2'){return {p:'↗ · ↘ · ↙ · ↖ · ↗ · ?',a:'↘',o:shuffled(['↗','↘','↙','↖'])};}
  if(type==='fibo'){const a=1+Math.floor(Math.random()*3),b=a+1+Math.floor(Math.random()*3);const seq=[a,b];while(seq.length<6)seq.push(seq.at(-1)+seq.at(-2));return qNum(seq.slice(0,5),seq[5],5);}
  if(type==='triangular'){const seq=[1,3,6,10,15];return qNum(seq,21,4);}
  if(type==='mixedops'){const a=2+Math.floor(Math.random()*3),k=2+Math.floor(Math.random()*3);let seq=[a],c=a;c*=2;seq.push(c);c+=k;seq.push(c);c*=2;seq.push(c);c+=k;seq.push(c);return qNum(seq,c*2,6);}
  if(type==='letterjump'){const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ',i=Math.floor(Math.random()*3);const ids=[i,i+2,i+5,i+9,i+14];return {p:ids.slice(0,4).map(x=>letters[x]).join(' · ')+' · ?',a:letters[ids[4]],o:shuffled([letters[ids[4]],letters[ids[4]-1],letters[ids[4]+1],letters[ids[4]+2]])};}
  if(type==='cubes'){const seq=[1,8,27,64];return qNum(seq,125,10);}
  if(type==='interleave2'){const seq=[2,20,5,17,8,14];return qNum(seq,11,3);}
  if(type==='nested'){const seq=[3,7,15,31];return qNum(seq,63,6);}
  return {p:'▲ · ●● · ▲▲▲ · ●●●● · ?',a:'▲▲▲▲▲',o:shuffled(['▲▲▲▲','●●●●●','▲▲▲▲▲','▲▲▲'])};
}
function newLogic(){
  resetInstanceV43('logic'); const n=difficulty===1?5:difficulty===2?6:7; logicRoundV43={items:Array.from({length:n},()=>makeLogicV43(difficulty)),idx:0,correct:0,answered:false}; showLogicV43();
}
function showLogicV43(){
  const msg=document.getElementById('logicMsg');msg.className='message';msg.textContent='';
  if(logicRoundV43.idx>=logicRoundV43.items.length){ const need=Math.ceil(logicRoundV43.items.length*.7); document.getElementById('logicPrompt').textContent=`${logicRoundV43.correct}/${logicRoundV43.items.length} richtig`; document.getElementById('logicOptions').innerHTML=''; document.getElementById('logicStatus').textContent='Runde beendet'; document.getElementById('logicScore').textContent=`${logicRoundV43.correct} richtig`; if(logicRoundV43.correct>=need){msg.textContent='Runde geschafft!';msg.classList.add('show');awardReward('logic');}else{msg.textContent=`Noch ${need-logicRoundV43.correct} mehr richtig nötig.`;msg.classList.add('show');} return; }
  const q=logicRoundV43.items[logicRoundV43.idx]; logicAnswer=q.a; document.getElementById('logicPrompt').textContent=q.p; document.getElementById('logicStatus').textContent=`${logicRoundV43.idx+1}/${logicRoundV43.items.length}`; document.getElementById('logicScore').textContent=`${logicRoundV43.correct} richtig`;
  const wrap=document.getElementById('logicOptions');wrap.innerHTML=''; shuffled(q.o).forEach(opt=>{const b=document.createElement('button');b.className='logic-opt';b.textContent=opt;b.onclick=()=>answerLogicV43(b,opt);wrap.appendChild(b);});
}
function answerLogicV43(btn,opt){ if(logicRoundV43.answered)return; logicRoundV43.answered=true; const wrap=document.getElementById('logicOptions'); [...wrap.children].forEach(x=>x.disabled=true); if(opt===logicAnswer){btn.classList.add('correct');logicRoundV43.correct++;}else{btn.classList.add('wrong');[...wrap.children].find(x=>x.textContent===logicAnswer)?.classList.add('correct');} document.getElementById('logicScore').textContent=`${logicRoundV43.correct} richtig`; setTimeout(()=>{logicRoundV43.idx++;logicRoundV43.answered=false;showLogicV43();},650);}

// MEMORY: larger randomized decks
function buildMemory(){
  resetInstanceV43('memory');
  const pairsCount=difficulty===1?8:difficulty===2?10:12; const symbols=pickN([...new Set(worlds[currentWorld].memory)],pairsCount); const cards=shuffled([...symbols,...symbols]).map((sym,i)=>({id:i,sym,open:false,done:false})); mem={cards,first:null,second:null,lock:false,pairs:0,total:pairsCount};
  const cols=difficulty===1?4:difficulty===2?5:6; const board=document.getElementById('memoryBoard');board.style.gridTemplateColumns=`repeat(${cols},1fr)`;board.innerHTML='';document.getElementById('memoryMsg').classList.remove('show');mem.cards.forEach((c,idx)=>{const b=document.createElement('button');b.className='mem-card';b.innerHTML=`<span class="mem-face mem-front"></span><span class="mem-face mem-back">${c.sym}</span>`;b.onclick=()=>flipMemory(idx);board.appendChild(b);});updateMemory();
}

// SUDOKU: 4x4 easy, 6x6 medium/hard
function buildSudoku(){
  resetInstanceV43('sudoku');
  const n=difficulty===1?4:6, boxR=difficulty===1?2:2, boxC=difficulty===1?2:3; const symbols=pickN([...new Set([...worlds[currentWorld].sudoku,...worlds[currentWorld].memory])],n);
  const pattern=(r,c)=>(boxC*(r%boxR)+Math.floor(r/boxR)+c)%n; const rows=shuffled([...Array(n).keys()]), cols=shuffled([...Array(n).keys()]);
  // preserve box structure by using grouped shuffles
  const rowGroups=shuffled([...Array(n/boxR).keys()]), colGroups=shuffled([...Array(n/boxC).keys()]);
  const rr=rowGroups.flatMap(g=>shuffled([...Array(boxR).keys()]).map(r=>g*boxR+r)); const cc=colGroups.flatMap(g=>shuffled([...Array(boxC).keys()]).map(c=>g*boxC+c));
  const syms=shuffled(symbols); const solution=rr.map(r=>cc.map(c=>syms[pattern(r,c)]));
  const blanks=difficulty===1?6:difficulty===2?16:22; const puzzle=solution.map(row=>row.map(v=>({value:v,fixed:true}))); pickN([...Array(n*n).keys()],blanks).forEach(i=>{puzzle[Math.floor(i/n)][i%n]={value:'',fixed:false};}); sudoku={n,boxR,boxC,solution,puzzle,symbols:syms,selected:syms[0]}; renderSudoku();
}
function renderSudoku(){
  const {n,boxR,boxC}=sudoku,board=document.getElementById('sudokuBoard'); board.style.gridTemplateColumns=`repeat(${n},1fr)`; board.innerHTML=''; document.getElementById('sudokuMsg').classList.remove('show');
  sudoku.puzzle.forEach((row,y)=>row.forEach((cell,x)=>{const d=document.createElement('div');d.className='sudoku-cell'+(cell.fixed?' fixed':' empty'); if((x+1)%boxC===0&&x<n-1)d.style.borderRight='4px solid var(--ink)'; if((y+1)%boxR===0&&y<n-1)d.style.borderBottom='4px solid var(--ink)'; if(cell.fixed)d.textContent=cell.value;else{const b=document.createElement('button');b.textContent=cell.value||'·';b.onclick=()=>placeSudoku(x,y);d.appendChild(b);}board.appendChild(d);}));
  const pick=document.getElementById('pickRow');pick.innerHTML='';sudoku.symbols.forEach(sym=>{const b=document.createElement('button');b.className='pick-btn'+(sudoku.selected===sym?' on':'');b.textContent=sym;b.onclick=()=>{sudoku.selected=sym;renderSudoku();};pick.appendChild(b);});document.getElementById('sudokuStatus').textContent=`${n}×${n}`;
}
function placeSudoku(x,y){sudoku.puzzle[y][x].value=sudoku.selected;renderSudoku(); if(sudoku.puzzle.some(r=>r.some(c=>!c.value)))return; const {n,boxR,boxC}=sudoku,need=new Set(sudoku.symbols); const validGroup=arr=>arr.length===n&&new Set(arr).size===n&&arr.every(v=>need.has(v)); for(let r=0;r<n;r++)if(!validGroup(sudoku.puzzle[r].map(c=>c.value)))return; for(let c=0;c<n;c++)if(!validGroup(sudoku.puzzle.map(r=>r[c].value)))return; for(let by=0;by<n;by+=boxR)for(let bx=0;bx<n;bx+=boxC){let arr=[];for(let y0=0;y0<boxR;y0++)for(let x0=0;x0<boxC;x0++)arr.push(sudoku.puzzle[by+y0][bx+x0].value);if(!validGroup(arr))return;}document.getElementById('sudokuMsg').classList.add('show');awardReward('sudoku');}

// COMPLEX DOT PICTURES: multiple strokes, smoothed paths, no overlapping point markers
function catmullStroke(anchors,closed=true,steps=16){
  const pts=anchors.map(([x,y])=>({x,y})); if(pts.length<3)return pts; const out=[]; const n=pts.length;
  const get=i=>closed?pts[(i+n)%n]:pts[Math.max(0,Math.min(n-1,i))];
  const segCount=closed?n:n-1;
  for(let i=0;i<segCount;i++){const p0=get(i-1),p1=get(i),p2=get(i+1),p3=get(i+2);for(let s=0;s<steps;s++){const t=s/steps,t2=t*t,t3=t2*t;out.push({x:.5*((2*p1.x)+(-p0.x+p2.x)*t+(2*p0.x-5*p1.x+4*p2.x-p3.x)*t2+(-p0.x+3*p1.x-3*p2.x+p3.x)*t3),y:.5*((2*p1.y)+(-p0.y+p2.y)*t+(2*p0.y-5*p1.y+4*p2.y-p3.y)*t2+(-p0.y+3*p1.y-3*p2.y+p3.y)*t3)});}} return out;
}
function polyStroke(anchors,closed=true,steps=10){const pts=closed?[...anchors,anchors[0]]:anchors;const out=[];for(let i=0;i<pts.length-1;i++){const[a,b]=[pts[i],pts[i+1]];for(let s=0;s<steps;s++){const t=s/steps;out.push({x:a[0]+(b[0]-a[0])*t,y:a[1]+(b[1]-a[1])*t});}}return out;}
function pathLength(points,closed=false){let total=0;for(let i=1;i<points.length;i++)total+=Math.hypot(points[i].x-points[i-1].x,points[i].y-points[i-1].y);if(closed&&points.length>1)total+=Math.hypot(points[0].x-points.at(-1).x,points[0].y-points.at(-1).y);return total;}
function sampleStroke(points,count){if(count<=1)return [points[0]];const seg=[];let total=0;for(let i=1;i<points.length;i++){const d=Math.hypot(points[i].x-points[i-1].x,points[i].y-points[i-1].y);seg.push({a:points[i-1],b:points[i],d});total+=d;}const out=[];for(let k=0;k<count;k++){const target=total*(k/(count-1));let acc=0;for(const s of seg){if(acc+s.d>=target){const t=s.d?((target-acc)/s.d):0;out.push({x:s.a.x+(s.b.x-s.a.x)*t,y:s.a.y+(s.b.y-s.a.y)*t});break;}acc+=s.d;}}return out;}
const ST=(a,closed=true,smooth=true)=>({a,closed,smooth});
const SH=(name,target,strokes)=>({name,target,strokes});
const dotShapesV43={
 jungle:[
  SH('Papagei',72,[ST([[25,70],[20,54],[24,36],[34,20],[48,16],[60,23],[69,35],[84,31],[92,36],[80,43],[72,49],[70,65],[62,78],[48,84],[34,80]]),ST([[39,36],[48,30],[58,34],[61,46],[54,58],[43,60],[36,50]],true),ST([[57,28],[59,28],[59,30],[57,30]],true,false),ST([[35,78],[28,92],[42,82]],false,false)]),
  SH('Tiger',76,[ST([[22,34],[28,18],[40,25],[50,17],[60,25],[72,18],[78,34],[84,48],[80,66],[68,80],[50,86],[32,80],[20,66],[16,48]]),ST([[36,55],[43,49],[50,52],[57,49],[64,55],[58,68],[50,72],[42,68]],true),ST([[30,37],[38,44]],false,false),ST([[70,37],[62,44]],false,false),ST([[45,34],[50,42],[55,34]],false,false)]),
  SH('Affe',70,[ST([[28,30],[20,42],[18,58],[26,72],[40,82],[60,82],[74,72],[82,58],[80,42],[72,30],[60,22],[40,22]]),ST([[32,52],[38,42],[50,38],[62,42],[68,52],[62,66],[50,72],[38,66]],true),ST([[18,44],[10,38],[8,50],[16,58]],true),ST([[82,44],[90,38],[92,50],[84,58]],true)]),
  SH('Krokodil',78,[ST([[10,55],[18,43],[30,39],[44,40],[58,35],[74,31],[90,36],[82,44],[92,50],[78,55],[66,58],[56,67],[42,72],[28,69],[18,64]]),ST([[54,46],[62,43],[70,45],[78,42]],false,false),ST([[74,34],[76,32],[78,34],[76,36]],true,false)]),
  SH('Schmetterling',74,[ST([[49,50],[38,35],[25,20],[12,24],[10,40],[22,50],[12,60],[16,78],[32,75],[44,60],[49,50],[56,35],[72,20],[88,24],[90,40],[78,50],[88,60],[84,78],[68,75],[56,60]],true),ST([[49,30],[49,72]],false,false),ST([[44,28],[40,18]],false,false),ST([[54,28],[58,18]],false,false)]),
  SH('Tukan',74,[ST([[22,62],[25,45],[34,31],[48,25],[60,30],[67,39],[84,34],[94,39],[86,48],[70,51],[64,63],[54,76],[38,80],[26,73]]),ST([[35,45],[44,37],[54,39],[58,50],[51,61],[39,62],[32,55]],true),ST([[59,34],[61,34],[61,36],[59,36]],true,false)]),
  SH('Chamäleon',80,[ST([[20,60],[26,43],[38,32],[54,30],[67,38],[72,50],[68,62],[58,72],[44,76],[30,71]]),ST([[31,70],[22,78],[16,72],[18,64],[26,64],[30,70],[26,78],[18,84],[12,80]],false),ST([[66,38],[70,34],[73,37],[70,40]],true,false),ST([[55,64],[65,70],[72,69]],false,false)]),
  SH('Tempelruine',78,[ST([[14,78],[20,66],[24,66],[24,42],[18,42],[50,16],[82,42],[76,42],[76,66],[82,66],[88,78]],false,false),ST([[30,66],[30,43]],false,false),ST([[42,66],[42,43]],false,false),ST([[58,66],[58,43]],false,false),ST([[70,66],[70,43]],false,false),ST([[38,78],[38,64],[62,64],[62,78]],false,false)]),
  SH('Frosch',72,[ST([[20,58],[18,42],[24,30],[34,24],[44,30],[50,36],[56,30],[66,24],[76,30],[82,42],[80,58],[70,70],[58,76],[42,76],[30,70]]),ST([[30,32],[34,28],[38,32],[34,36]],true),ST([[62,32],[66,28],[70,32],[66,36]],true),ST([[38,58],[50,64],[62,58]],false)]),
  SH('Dschungelblatt',68,[ST([[50,12],[64,18],[78,31],[87,47],[82,64],[70,78],[54,88],[38,82],[24,70],[15,54],[18,38],[30,24]],true),ST([[28,70],[38,60],[50,50],[61,39],[73,28]],false),ST([[42,58],[32,50]],false),ST([[56,44],[68,48]],false)])
 ],
 space:[
  SH('Rakete',72,[ST([[50,10],[61,22],[67,40],[66,58],[76,70],[66,74],[58,65],[50,90],[42,65],[34,74],[24,70],[34,58],[33,40],[39,22]],true),ST([[43,34],[50,28],[57,34],[57,44],[50,48],[43,44]],true),ST([[50,66],[50,84]],false)]),
  SH('Astronaut',80,[ST([[36,18],[50,12],[64,18],[72,32],[70,46],[78,58],[72,74],[62,82],[38,82],[28,74],[22,58],[30,46],[28,32]],true),ST([[36,24],[50,18],[64,24],[64,38],[56,46],[44,46],[36,38]],true),ST([[36,52],[64,52],[64,68],[36,68]],true,false),ST([[28,48],[16,58]],false),ST([[72,48],[84,58]],false)]),
  SH('Saturn',74,[ST([[50,22],[64,26],[76,38],[80,52],[74,66],[62,76],[46,79],[32,73],[22,60],[20,46],[28,32],[38,24]],true),ST([[12,58],[24,49],[42,43],[60,42],[78,46],[90,54],[80,61],[62,66],[42,66],[24,63],[12,58]],false)]),
  SH('UFO',70,[ST([[18,56],[28,45],[42,39],[58,39],[72,45],[82,56],[74,66],[58,70],[42,70],[26,65]],true),ST([[34,39],[38,28],[50,22],[62,28],[66,39]],false),ST([[30,58],[38,60],[50,61],[62,60],[70,58]],false)]),
  SH('Marsrover',82,[ST([[18,58],[28,48],[60,48],[70,56],[70,68],[24,68]],true,false),ST([[28,68],[24,78],[16,78],[12,70],[18,64]],true),ST([[60,68],[66,78],[76,78],[82,70],[74,62]],true),ST([[42,48],[42,30],[54,24],[64,28]],false),ST([[54,24],[58,14],[70,16],[64,28]],true)]),
  SH('Satellit',78,[ST([[40,38],[60,38],[66,46],[60,56],[40,56],[34,46]],true),ST([[34,42],[16,30],[10,38],[28,52]],true,false),ST([[66,42],[84,30],[90,38],[72,52]],true,false),ST([[50,38],[50,22],[58,15]],false),ST([[58,15],[70,12],[74,20],[62,25]],true)]),
  SH('Alien',72,[ST([[30,20],[22,32],[18,48],[22,64],[34,78],[50,84],[66,78],[78,64],[82,48],[78,32],[66,20],[50,14]],true),ST([[32,42],[39,35],[45,42],[40,50]],true),ST([[55,42],[61,35],[68,42],[60,50]],true),ST([[42,64],[50,68],[58,64]],false)]),
  SH('Mondkrater',76,[ST([[50,12],[66,16],[80,28],[87,44],[84,62],[72,76],[56,84],[38,81],[24,72],[16,56],[17,40],[28,24]],true),ST([[32,38],[38,33],[45,36],[44,44],[37,47],[31,43]],true),ST([[60,54],[68,50],[74,55],[72,64],[64,67],[58,62]],true)]),
  SH('Raumstation',82,[ST([[34,42],[66,42],[70,50],[66,58],[34,58],[30,50]],true),ST([[30,45],[12,30],[8,38],[26,54]],true,false),ST([[70,45],[88,30],[92,38],[74,54]],true,false),ST([[50,42],[50,22],[56,16],[62,22],[62,34]],false),ST([[44,58],[40,76],[48,82],[54,70],[60,82],[68,76],[62,58]],false)]),
  SH('Sternenschiff',78,[ST([[50,12],[58,34],[76,38],[66,51],[84,66],[62,64],[50,86],[38,64],[16,66],[34,51],[24,38],[42,34]],true),ST([[42,48],[50,42],[58,48],[56,58],[44,58]],true)])
 ],
 sea:[
  SH('Tropenfisch',72,[ST([[18,52],[28,36],[45,28],[64,30],[78,40],[86,52],[78,64],[62,72],[42,72],[28,64]],true),ST([[18,52],[8,38],[8,66]],false,false),ST([[48,34],[58,42],[55,56],[44,62]],true),ST([[70,43],[73,42],[73,45],[70,45]],true,false)]),
  SH('Delfin',74,[ST([[14,56],[26,42],[42,32],[58,30],[72,22],[82,24],[75,34],[88,42],[78,50],[66,53],[60,64],[48,74],[32,72],[20,64]],true),ST([[55,48],[68,58],[60,64]],false),ST([[72,34],[75,33],[76,35],[73,36]],true,false)]),
  SH('Schildkröte',80,[ST([[26,44],[34,30],[50,24],[66,30],[74,44],[72,60],[62,72],[46,76],[32,70],[24,58]],true),ST([[74,44],[86,40],[92,46],[84,52],[74,52]],true),ST([[32,32],[20,24],[16,34],[26,42]],true),ST([[32,66],[20,76],[28,82],[40,72]],true),ST([[66,66],[80,76],[72,82],[60,72]],true),ST([[38,38],[50,34],[62,38],[66,50],[58,62],[42,62],[34,50]],true)]),
  SH('Krake',82,[ST([[30,30],[40,20],[60,20],[70,30],[76,44],[72,56],[78,70],[68,78],[60,68],[54,82],[46,70],[38,82],[32,68],[22,78],[18,68],[28,56],[24,44]],true),ST([[38,38],[41,35],[44,38],[41,41]],true),ST([[56,38],[59,35],[62,38],[59,41]],true)]),
  SH('Krabbe',78,[ST([[24,46],[30,34],[42,28],[58,28],[70,34],[76,46],[72,60],[62,70],[38,70],[28,60]],true),ST([[28,40],[16,30],[8,36],[16,48]],false),ST([[72,40],[84,30],[92,36],[84,48]],false),ST([[30,62],[18,72]],false),ST([[70,62],[82,72]],false),ST([[40,40],[44,36],[48,40],[44,44]],true),ST([[52,40],[56,36],[60,40],[56,44]],true)]),
  SH('Seepferdchen',82,[ST([[54,16],[64,24],[66,36],[58,44],[48,48],[42,60],[46,74],[58,82],[70,78],[76,68],[72,58],[62,54],[52,58],[48,68],[40,76],[28,74],[22,62],[28,50],[40,42],[48,30]],true),ST([[58,27],[61,25],[63,28],[60,30]],true,false)]),
  SH('Muschel',70,[ST([[18,66],[20,50],[28,36],[40,26],[50,22],[60,26],[72,36],[80,50],[82,66],[70,72],[58,76],[42,76],[30,72]],true),ST([[30,66],[34,44],[42,28]],false),ST([[44,72],[46,42],[50,24]],false),ST([[58,72],[55,42],[50,24]],false),ST([[70,66],[64,44],[58,28]],false)]),
  SH('Leuchtturm',76,[ST([[34,82],[38,42],[62,42],[66,82]],false,false),ST([[34,42],[42,30],[58,30],[66,42]],true,false),ST([[42,30],[44,20],[56,20],[58,30]],true,false),ST([[30,82],[70,82]],false,false),ST([[42,52],[58,52]],false),ST([[40,64],[60,64]],false)]),
  SH('Segelboot',72,[ST([[20,68],[78,68],[70,80],[30,80]],true,false),ST([[48,68],[48,20]],false,false),ST([[48,22],[30,56],[48,56]],true,false),ST([[50,25],[72,58],[50,58]],true,false),ST([[18,88],[32,84],[48,88],[64,84],[82,88]],false)]),
  SH('Wal',76,[ST([[14,54],[26,40],[44,34],[62,36],[76,44],[84,54],[78,64],[64,70],[46,72],[30,68],[18,62]],true),ST([[84,54],[92,46],[94,58],[86,62]],true),ST([[50,70],[58,80],[48,78]],true),ST([[72,46],[75,44],[77,46],[75,48]],true,false),ST([[22,44],[18,30],[22,22]],false)] )
 ],
 greek:[
  SH('Tempel',82,[ST([[14,80],[20,68],[22,68],[22,42],[16,42],[50,16],[84,42],[78,42],[78,68],[82,68],[88,80]],false,false),ST([[30,68],[30,43]],false),ST([[40,68],[40,43]],false),ST([[50,68],[50,43]],false),ST([[60,68],[60,43]],false),ST([[70,68],[70,43]],false),ST([[14,80],[88,80]],false)]),
  SH('Amphore',76,[ST([[38,16],[62,16],[68,26],[64,38],[72,50],[72,68],[62,82],[38,82],[28,68],[28,50],[36,38],[32,26]],true),ST([[34,28],[22,34],[22,48],[32,54]],false),ST([[66,28],[78,34],[78,48],[68,54]],false),ST([[34,56],[50,50],[66,56]],false)]),
  SH('Eule',76,[ST([[28,26],[18,38],[18,58],[26,72],[40,82],[60,82],[74,72],[82,58],[82,38],[72,26],[60,18],[50,26],[40,18]],true),ST([[28,42],[36,34],[44,42],[36,50]],true),ST([[56,42],[64,34],[72,42],[64,50]],true),ST([[42,60],[50,66],[58,60]],false)]),
  SH('Minotaurus',80,[ST([[24,34],[14,22],[26,20],[36,30],[50,22],[64,30],[74,20],[86,22],[76,34],[82,50],[76,68],[62,80],[38,80],[24,68],[18,50]],true),ST([[36,54],[42,48],[50,52],[58,48],[64,54],[58,66],[42,66]],true),ST([[32,38],[40,44]],false),ST([[68,38],[60,44]],false)]),
  SH('Olivenzweig',78,[ST([[18,76],[28,66],[40,56],[52,46],[64,36],[78,24]],false),ST([[34,60],[24,50],[32,44],[42,52]],true),ST([[48,50],[40,38],[50,34],[58,44]],true),ST([[62,40],[56,28],[68,24],[72,34]],true),ST([[28,68],[20,62],[24,54],[34,60]],true)]),
  SH('Lyra',76,[ST([[34,18],[26,32],[24,52],[30,70],[42,82],[58,82],[70,70],[76,52],[74,32],[66,18],[60,30],[56,44],[50,52],[44,44],[40,30]],true),ST([[36,36],[64,36]],false),ST([[40,44],[60,44]],false),ST([[44,52],[56,52]],false)]),
  SH('Helm',76,[ST([[26,30],[38,18],[58,18],[72,28],[80,44],[78,60],[66,64],[60,80],[42,80],[42,64],[28,64],[18,52],[18,40]],true),ST([[42,64],[58,42],[66,64]],false),ST([[30,34],[62,34]],false)]),
  SH('Dreizack',72,[ST([[28,18],[28,34],[38,26],[50,16],[62,26],[72,18],[72,34],[62,42],[56,38],[54,74],[64,84],[50,80],[36,84],[46,74],[44,38],[38,42]],false,false)]),
  SH('Labyrinth',84,[ST([[14,18],[86,18],[86,30],[26,30],[26,74],[74,74],[74,42],[38,42],[38,62],[62,62],[62,52],[48,52],[48,56],[56,56]],false,false),ST([[14,82],[86,82]],false,false)]),
  SH('Kreta-Küste',78,[ST([[16,54],[22,40],[34,34],[42,24],[54,28],[64,20],[78,26],[84,40],[80,54],[86,66],[72,74],[62,84],[48,80],[38,86],[26,76],[18,68]],true),ST([[36,54],[46,48],[58,50],[66,58],[58,64],[46,62]],true),ST([[26,70],[34,66],[40,70]],false)] )
 ]
};
function buildDenseStrokeV43(st){return st.smooth===false?polyStroke(st.a,st.closed!==false,14):catmullStroke(st.a,st.closed!==false,18);}
function buildDots(){
  resetInstanceV43('dots');
  const set=dotShapesV43[currentWorld], idx=Math.floor(Math.random()*set.length), spec=set[idx];
  const dense=spec.strokes.map(buildDenseStrokeV43), lens=dense.map(p=>pathLength(p,false)), totalLen=lens.reduce((a,b)=>a+b,0);
  let remaining=spec.target, points=[];
  dense.forEach((stroke,si)=>{ let c=si===dense.length-1?remaining:Math.max(4,Math.round(spec.target*(lens[si]/totalLen))); const minLeft=(dense.length-si-1)*4; c=Math.min(c,remaining-minLeft); remaining-=c; const smp=sampleStroke(stroke,c); smp.forEach((p,j)=>points.push({x:p.x,y:p.y,n:points.length+1,stroke:si,breakBefore:si>0&&j===0})); });
  // Global spacing filter: point markers must never sit on top of each other.
  // We preserve at least 50 points and keep stroke boundaries for complex multi-line drawings.
  const original=points.map((p,i)=>({...p,order:i}));
  let spaced=[]; let usedGap=16;
  for(let gap=16;gap>=9;gap--){
    const candidate=[];
    for(const p of original){
      const sp=scaleDotPoint(p);
      if(candidate.every(q=>Math.hypot(sp.x-q.sx,sp.y-q.sy)>=gap)) candidate.push({...p,sx:sp.x,sy:sp.y});
    }
    if(candidate.length>=50){spaced=candidate;usedGap=gap;break;}
  }
  if(!spaced.length) spaced=original.slice(0,Math.max(50,Math.min(original.length,70))).map(p=>{const sp=scaleDotPoint(p);return {...p,sx:sp.x,sy:sp.y};});
  spaced=spaced.map((p,i,arr)=>({...p,n:i+1,breakBefore:i>0&&p.stroke!==arr[i-1].stroke}));
  const radius=Math.max(3.4,Math.min(5.2,usedGap/2-1.2));
  dotsState={points:spaced,next:1,shapeIndex:idx,name:spec.name,dotRadius:radius};
  document.getElementById('dotsStatus').textContent=`Bild ${idx+1}/10 · Punkt 1/${spaced.length}`; document.getElementById('dotsMsg').classList.remove('show'); drawDots();
}
function scaleDotPoint(p){const W=dotsCanvas.width,H=dotsCanvas.height,mx=82,my=62;return{x:mx+(p.x/100)*(W-mx*2),y:my+(p.y/100)*(H-my*2)};}
function drawDots(){
  dctx.clearRect(0,0,dotsCanvas.width,dotsCanvas.height);dctx.fillStyle='#fff';dctx.fillRect(0,0,dotsCanvas.width,dotsCanvas.height);dctx.strokeStyle='#4a7fa7';dctx.lineWidth=4;dctx.lineCap='round';dctx.lineJoin='round';
  for(let i=1;i<dotsState.next-1;i++){const cur=dotsState.points[i],prev=dotsState.points[i-1];if(cur.breakBefore)continue;const a=scaleDotPoint(prev),b=scaleDotPoint(cur);dctx.beginPath();dctx.moveTo(a.x,a.y);dctx.lineTo(b.x,b.y);dctx.stroke();}
  const r=dotsState.dotRadius||4; dotsState.points.forEach(p=>{const s=scaleDotPoint(p),done=p.n<dotsState.next;dctx.fillStyle=done?worlds[currentWorld].accent:'#f4f1e8';dctx.beginPath();dctx.arc(s.x,s.y,r,0,Math.PI*2);dctx.fill();dctx.strokeStyle=done?'rgba(255,255,255,.7)':'#c7c5bc';dctx.lineWidth=1;dctx.stroke();dctx.fillStyle=done?'#fff':'#223038';dctx.font=`900 ${Math.max(7,Math.min(9,r+3))}px system-ui`;dctx.textAlign='center';dctx.textBaseline='middle';dctx.fillText(p.n,s.x,s.y);});
}
// replace existing dot click behavior with a capture guard; old listener uses our state/drawing and remains valid
const oldDotsStatusUpdater=()=>{ if(dotsState.next<=dotsState.points.length)document.getElementById('dotsStatus').textContent=`Bild ${dotsState.shapeIndex+1}/10 · Punkt ${dotsState.next}/${dotsState.points.length}`; else document.getElementById('dotsStatus').textContent=dotsState.name; };
dotsCanvas.addEventListener('pointerdown',()=>setTimeout(oldDotsStatusUpdater,0));

// QUIZ: one challenging question at a time, pass threshold for reward
let quizRoundV43={items:[],idx:0,correct:0,answered:false};
function buildQuick(){
  resetInstanceV43('quick'); const pool=quizBankV43[currentWorld].filter(q=>q.d===difficulty); const n=Math.min(difficulty===1?5:difficulty===2?6:7,pool.length); quizRoundV43={items:pickN(pool,n),idx:0,correct:0,answered:false}; showQuizV43();
}
function showQuizV43(){
  const wrap=document.getElementById('quickGrid'),msg=document.getElementById('quizMsg');msg.className='message';msg.textContent='';
  if(quizRoundV43.idx>=quizRoundV43.items.length){const need=Math.ceil(quizRoundV43.items.length*.7);wrap.innerHTML=`<div class="quiz-stage"><div class="quiz-question">${quizRoundV43.correct}/${quizRoundV43.items.length} richtig</div><div class="quiz-options"><button class="quiz-option" onclick="buildQuick()">Neue Runde</button></div></div>`;document.getElementById('quizStatus').textContent='Runde beendet';document.getElementById('quizScore').textContent=`${quizRoundV43.correct} richtig`;if(quizRoundV43.correct>=need){msg.textContent='Quiz geschafft!';msg.classList.add('show');awardReward('quick');}else{msg.textContent=`Für den Sieg brauchst du ${need} richtige.`;msg.classList.add('show');}return;}
  const q=quizRoundV43.items[quizRoundV43.idx]; document.getElementById('quizStatus').textContent=`${quizRoundV43.idx+1}/${quizRoundV43.items.length}`;document.getElementById('quizScore').textContent=`${quizRoundV43.correct} richtig`;
  wrap.innerHTML='<div class="quiz-stage"><div class="quiz-question"></div><div class="quiz-options"></div></div>';wrap.querySelector('.quiz-question').textContent=q.q;const opts=wrap.querySelector('.quiz-options');shuffled(q.o.map((t,i)=>({t,ok:i===q.a}))).forEach(o=>{const b=document.createElement('button');b.className='quiz-option';b.textContent=o.t;b.onclick=()=>answerQuizV43(b,o.ok,q);opts.appendChild(b);});
}
function answerQuizV43(btn,ok,q){if(quizRoundV43.answered)return;quizRoundV43.answered=true;const opts=btn.parentElement;[...opts.children].forEach(x=>x.disabled=true);if(ok){btn.classList.add('good');quizRoundV43.correct++;}else{btn.classList.add('bad');const correctText=q.o[q.a];[...opts.children].find(x=>x.textContent===correctText)?.classList.add('good');}document.getElementById('quizScore').textContent=`${quizRoundV43.correct} richtig`;setTimeout(()=>{quizRoundV43.idx++;quizRoundV43.answered=false;showQuizV43();},850);}

// keyboard enter for word scramble
const scrambleInputV43=document.getElementById('scrambleInput'); if(scrambleInputV43) scrambleInputV43.addEventListener('keydown',e=>{if(e.key==='Enter')checkScramble();});



/* ========================= V4.3 FINAL refinements ========================= */

// Harder sticker progression: 4 wins AND 3 different games per sticker.
let stickerChallengeV43 = JSON.parse(localStorage.getItem('rw43_sticker_challenge') || '{}');
function challengeForWorldV43(key){
  let c=stickerChallengeV43[key];
  if(!c || typeof c!=='object') c={wins:0,games:[]};
  c.wins=Math.max(0,Math.min(99,+c.wins||0));
  c.games=[...new Set(Array.isArray(c.games)?c.games:[])];
  stickerChallengeV43[key]=c;
  return c;
}
function saveChallengeV43(){localStorage.setItem('rw43_sticker_challenge',JSON.stringify(stickerChallengeV43));}
function challengeTextV43(key){const c=challengeForWorldV43(key);return `${Math.min(c.wins,4)}/4 Siege · ${Math.min(c.games.length,3)}/3 Spiele`;}
function awardReward(gameId){
  if(instanceCompletedV43[gameId]) return;
  instanceCompletedV43[gameId]=true;
  stars+=1; document.getElementById('starCount').textContent=stars;
  const c=challengeForWorldV43(currentWorld); c.wins+=1; if(!c.games.includes(gameId)) c.games.push(gameId);
  let unlocked=null;
  if(c.wins>=4 && c.games.length>=3){
    unlocked=unlockSticker(currentWorld); c.wins=0; c.games=[];
  }
  saveChallengeV43(); savePrefs(); updateStickerCounts();
  if(unlocked){showStickerToast(unlocked);sparkle('🧩');}
  else if(worldStickerCount(currentWorld)>=10){showProgressToast('Albumseite vollständig!','🏆');}
  else showProgressToast(challengeTextV43(currentWorld));
}
function updateStickerCounts(){
  const total=totalStickerCount();
  const stat=document.getElementById('statStickers'); if(stat)stat.textContent=`${total}/40`;
  const home=document.getElementById('homeAlbumCount'); if(home)home.textContent=`${total}/40`;
  const albumStatus=document.getElementById('albumStatus'); if(albumStatus)albumStatus.textContent=`${total}/40 · ${challengeTextV43(currentAlbumWorld)}`;
  const mini=document.getElementById('albumTotalMini'); if(mini)mini.textContent=`${total}/40`;
}
function renderAlbum(){
  normalizeStickers(); const tabs=document.getElementById('albumTabs'),grid=document.getElementById('albumGrid'); tabs.innerHTML='';
  Object.entries(worlds).forEach(([key,w])=>{const b=document.createElement('button');b.className='album-tab'+(key===currentAlbumWorld?' on':'');b.innerHTML=`${w.icon} ${w.name}<small>${worldStickerCount(key)}/10 · ${challengeTextV43(key)}</small>`;b.onclick=()=>{currentAlbumWorld=key;savePrefs();renderAlbum();};tabs.appendChild(b);});
  const entries=stickerCatalog[currentAlbumWorld],unlocked=new Set(stickers[currentAlbumWorld]||[]);
  document.getElementById('albumTitle').textContent=worlds[currentAlbumWorld].name;
  document.getElementById('albumSubtitle').textContent=challengeTextV43(currentAlbumWorld);
  document.getElementById('albumProgress').textContent=`${unlocked.size}/10`;
  grid.innerHTML=''; entries.forEach((st,i)=>{const div=document.createElement('div'),on=unlocked.has(i);div.className='sticker '+(on?'unlocked':'locked');if(on){div.style.background=`linear-gradient(145deg,${st.colors[0]},${st.colors[1]})`;div.style.color='#fff';div.innerHTML=`<div class="sticker-top"><span class="sticker-icon">${st.icon}</span><span class="sticker-num">${i+1}</span></div><div class="sticker-name">${st.name}</div>`;}else div.innerHTML=`<div class="sticker-top"><span class="sticker-icon">🔒</span><span class="sticker-num">${i+1}</span></div><div class="sticker-name">Noch offen</div>`;grid.appendChild(div);});
  updateStickerCounts();
}

// Stronger word-search generation: crossings are actively optimized and diagonals preferred.
function buildWordGame(){
  resetInstanceV43('word');
  const raw=wordBank().map(x=>x.toUpperCase().replace(/[^A-ZÄÖÜ]/g,''));
  const count=difficulty===1?9:difficulty===2?11:13;
  const chosen=pickN(raw,count).sort((a,b)=>b.length-a.length);
  const maxLen=Math.max(...chosen.map(w=>w.length));
  const size=Math.max(difficulty===1?13:difficulty===2?15:17,maxLen+2);
  const diagonal=[[1,1],[-1,-1],[1,-1],[-1,1]],straight=[[1,0],[-1,0],[0,1],[0,-1]],all=[...diagonal,...straight];
  const overlapGoal=difficulty===1?.45:difficulty===2?.65:.78, diagGoal=difficulty===1?.4:difficulty===2?.58:.72;
  let best=null;
  for(let outer=0;outer<150;outer++){
    const grid=Array.from({length:size},()=>Array(size).fill('')),use=Array.from({length:size},()=>Array(size).fill(0)),placed=[];
    let diagWords=0,overlapWords=0,overlapLetters=0,failed=false;
    for(let wi=0;wi<chosen.length;wi++){
      const word=chosen[wi]; let candidates=[];
      if(wi===0){
        for(const [dx,dy] of diagonal){
          for(let t=0;t<50;t++){
            const sx=Math.floor(size*.18+Math.random()*size*.35),sy=Math.floor(size*.18+Math.random()*size*.35),ex=sx+dx*(word.length-1),ey=sy+dy*(word.length-1);
            if(ex>=0&&ey>=0&&ex<size&&ey<size)candidates.push({sx,sy,dx,dy,overlaps:0,score:5+Math.random()});
          }
        }
      }else{
        for(let gy=0;gy<size;gy++)for(let gx=0;gx<size;gx++)if(grid[gy][gx]){
          for(let ci=0;ci<word.length;ci++)if(word[ci]===grid[gy][gx]){
            for(const [dx,dy] of all){
              const sx=gx-dx*ci,sy=gy-dy*ci,ex=sx+dx*(word.length-1),ey=sy+dy*(word.length-1);
              if(sx<0||sy<0||ex<0||ey<0||sx>=size||sy>=size||ex>=size||ey>=size)continue;
              let ok=true,overlaps=0,crowded=0;
              for(let i=0;i<word.length;i++){const x=sx+dx*i,y=sy+dy*i,c=grid[y][x];if(c&&c!==word[i]){ok=false;break;}if(c===word[i]){overlaps++;if(use[y][x]>=2)crowded++;}}
              if(ok&&overlaps>0&&crowded===0){const centerPenalty=(Math.abs((sx+ex)/2-size/2)+Math.abs((sy+ey)/2-size/2))*.08;const diagBonus=Math.abs(dx)+Math.abs(dy)===2?(difficulty===3?12:8):0;candidates.push({sx,sy,dx,dy,overlaps,score:overlaps*18+diagBonus-centerPenalty+Math.random()*2});}
            }
          }
        }
      }
      if(!candidates.length){
        for(let t=0;t<900;t++){
          const dirs=shuffled([...diagonal,...diagonal,...straight]),[dx,dy]=dirs[t%dirs.length],sx=Math.floor(Math.random()*size),sy=Math.floor(Math.random()*size),ex=sx+dx*(word.length-1),ey=sy+dy*(word.length-1);
          if(ex<0||ey<0||ex>=size||ey>=size)continue;let ok=true,overlaps=0,crowded=0;
          for(let i=0;i<word.length;i++){const x=sx+dx*i,y=sy+dy*i,c=grid[y][x];if(c&&c!==word[i]){ok=false;break;}if(c===word[i]){overlaps++;if(use[y][x]>=2)crowded++;}}
          if(ok&&crowded===0){candidates.push({sx,sy,dx,dy,overlaps,score:overlaps*18+(Math.abs(dx)+Math.abs(dy)===2?(difficulty===3?12:8):0)+Math.random()});if(candidates.length>30)break;}
        }
      }
      if(!candidates.length){failed=true;break;}
      candidates.sort((a,b)=>b.score-a.score);const top=Math.min(difficulty===3?2:4,candidates.length),c=candidates[Math.floor(Math.random()*top)];
      const cells=[];for(let i=0;i<word.length;i++){const x=c.sx+c.dx*i,y=c.sy+c.dy*i;grid[y][x]=word[i];use[y][x]++;cells.push(`${x},${y}`);}placed.push({word,cells});if(Math.abs(c.dx)+Math.abs(c.dy)===2)diagWords++;if(c.overlaps>0){overlapWords++;overlapLetters+=c.overlaps;}
    }
    if(!failed){const score=overlapWords*12+overlapLetters*3+diagWords*5;const candidate={grid,placed,score,overlapWords,diagWords};if(!best||score>best.score)best=candidate;if(overlapWords>=Math.ceil(chosen.length*overlapGoal)&&diagWords>=Math.ceil(chosen.length*diagGoal))break;}
  }
  if(!best){return setTimeout(buildWordGame,0);}
  const abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ',grid=best.grid,placed=best.placed;
  for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(!grid[y][x])grid[y][x]=abc[Math.floor(Math.random()*abc.length)];
  wg={size,words:placed.map(p=>p.word),grid,placed,found:new Set(),drag:null};
  const el=document.getElementById('wordGrid');el.innerHTML='';el.style.gridTemplateColumns=`repeat(${size},1fr)`;grid.forEach((row,y)=>row.forEach((ch,x)=>{const d=document.createElement('div');d.className='letter';d.dataset.x=x;d.dataset.y=y;d.textContent=ch;el.appendChild(d);}));
  document.getElementById('wordList').innerHTML=wg.words.map(w=>`<span class="word-chip" data-w="${w}">${w}</span>`).join('');document.getElementById('wordStatus').textContent=`0/${wg.words.length}`;document.getElementById('wordMsg').classList.remove('show');el.onpointerdown=startWordDrag;el.onpointermove=moveWordDrag;el.onpointerup=endWordDrag;el.onpointercancel=endWordDrag;
}

// Logic: more varied rule families. Wrong answers never reveal the solution.
let logicSelectFinal=null,logicMistakeFinal=false;
function opt4Final(answer,values){const set=new Set([String(answer),...values.map(String)]);const n=Number(answer);let k=1;while(set.size<4&&Number.isFinite(n)){set.add(String(n+k));if(set.size<4&&n-k>=0)set.add(String(n-k));k++;}return shuffled([...set].slice(0,4));}
function makeLogicFinal(level){
  const easy=[
    ()=>{const a=2+Math.floor(Math.random()*5),d=2+Math.floor(Math.random()*5),ans=a+4*d;return {p:`${a} · ${a+d} · ${a+2*d} · ${a+3*d} · ?`,a:String(ans),o:opt4Final(ans,[ans-d,ans+d,ans+2])};},
    ()=>({p:'↑ · → · ↓ · ← · ?',a:'↑',o:['↑','→','↓','←']}),
    ()=>({p:'A · C · E · G · ?',a:'I',o:['H','I','J','K']}),
    ()=>({p:'● · ●● · ●●● · ?',a:'●●●●',o:['●●','●●●','●●●●','●●●●●']})
  ];
  const medium=[
    ()=>{const a=3+Math.floor(Math.random()*4),seq=[a],diff=2+Math.floor(Math.random()*3);let c=a,d=diff;for(let i=0;i<4;i++){c+=d;seq.push(c);d++;}const ans=c+d;return {p:seq.join(' · ')+' · ?',a:String(ans),o:opt4Final(ans,[ans-2,ans+2,ans+4])};},
    ()=>({p:'2 · 9 · 4 · 18 · 6 · 27 · ?',a:'8',o:['7','8','9','36']}),
    ()=>({p:'2 · 4 · 7 · 14 · 17 · 34 · ?',a:'37',o:['36','37','40','68']}),
    ()=>({p:'1 · 4 · 9 · 16 · 25 · ?',a:'36',o:['30','32','36','49']}),
    ()=>({p:'2→6 · 3→12 · 4→20 · 5→?',a:'30',o:['25','28','30','35']}),
    ()=>({p:'↗ · ↘ · ↙ · ↖ · ↗ · ?',a:'↘',o:['↗','↘','↙','↖']}),
    ()=>({p:'1 · 1 · 2 · 3 · 5 · 8 · ?',a:'13',o:['11','12','13','16']}),
    ()=>({p:'▲  ●  ■\n●  ■  ▲\n■  ▲  ?',a:'●',o:['▲','●','■','◆']})
  ];
  const hard=[
    ()=>({p:'2 · 3 · 6 · 11 · 18 · ?',a:'27',o:['25','26','27','29']}),
    ()=>({p:'3 · 6 · 18 · 72 · ?',a:'360',o:['144','216','288','360']}),
    ()=>({p:'4 · 7 · 13 · 25 · 49 · ?',a:'97',o:['96','97','98','99']}),
    ()=>({p:'1 · 4 · 10 · 22 · 46 · ?',a:'94',o:['90','92','94','96']}),
    ()=>({p:'2 · 30 · 6 · 25 · 18 · 20 · ?',a:'54',o:['45','50','54','60']}),
    ()=>({p:'3 · 4 · 8 · 9 · 18 · 19 · ?',a:'38',o:['36','37','38','40']}),
    ()=>({p:'2 · 5 · 10 · 17 · 26 · ?',a:'37',o:['35','36','37','39']}),
    ()=>({p:'100 · 96 · 88 · 76 · 60 · ?',a:'40',o:['36','40','42','44']}),
    ()=>({p:'A · C · F · J · O · ?',a:'U',o:['T','U','V','W']}),
    ()=>({p:'Z · W · S · N · H · ?',a:'A',o:['A','B','C','D']}),
    ()=>({p:'1 · 2 · 6 · 24 · ?',a:'120',o:['96','100','120','144']}),
    ()=>({p:'▲ · ●● · ■■■ · ▲▲▲▲ · ●●●●● · ?',a:'■■■■■■',o:['▲▲▲▲▲▲','●●●●●●','■■■■■■','■■■■■']}),
    ()=>({p:'3→8 · 4→15 · 5→24 · 6→?',a:'35',o:['30','32','35','36']}),
    ()=>({p:'2 · 5 · 11 · 23 · 47 · ?',a:'95',o:['93','94','95','96']}),
    ()=>({p:'↑  →  ↓\n→  ↓  ←\n↓  ←  ?',a:'↑',o:['↑','→','↓','←']}),
    ()=>({p:'1  2  3\n2  4  6\n3  6  ?',a:'9',o:['8','9','10','12']})
  ];
  const pool=level===1?easy:level===2?medium:hard;return pool[Math.floor(Math.random()*pool.length)]();
}
function newLogic(){resetInstanceV43('logic');const n=difficulty===1?6:difficulty===2?7:8;logicRoundV43={items:Array.from({length:n},()=>makeLogicFinal(difficulty)),idx:0,correct:0,answered:false};showLogicV43();}
function showLogicV43(){
  logicSelectFinal=null;logicMistakeFinal=false;const msg=document.getElementById('logicMsg');msg.className='message';msg.textContent='';
  if(logicRoundV43.idx>=logicRoundV43.items.length){const need=Math.ceil(logicRoundV43.items.length*.7);document.getElementById('logicPrompt').textContent=`${logicRoundV43.correct}/${logicRoundV43.items.length} im ersten Versuch`;document.getElementById('logicOptions').innerHTML='';document.getElementById('logicStatus').textContent='Runde beendet';document.getElementById('logicScore').textContent=`${logicRoundV43.correct} richtig`;if(logicRoundV43.correct>=need){msg.textContent='Runde geschafft!';msg.classList.add('show');awardReward('logic');}else{msg.textContent=`Für den Sieg brauchst du ${need} richtige im ersten Versuch.`;msg.classList.add('show');}return;}
  const q=logicRoundV43.items[logicRoundV43.idx];logicAnswer=q.a;document.getElementById('logicPrompt').textContent=q.p;document.getElementById('logicStatus').textContent=`${logicRoundV43.idx+1}/${logicRoundV43.items.length}`;document.getElementById('logicScore').textContent=`${logicRoundV43.correct} richtig`;
  const wrap=document.getElementById('logicOptions');wrap.innerHTML='';shuffled(q.o).forEach(opt=>{const b=document.createElement('button');b.className='logic-opt';b.textContent=opt;b.onclick=()=>{logicSelectFinal=opt;[...wrap.children].forEach(x=>x.classList.toggle('selected',x===b));};wrap.appendChild(b);});
}
function checkLogicV43(){
  const msg=document.getElementById('logicMsg');if(logicSelectFinal===null){msg.textContent='Wähle zuerst eine Antwort.';msg.className='message show';return;}
  const wrap=document.getElementById('logicOptions'),btn=[...wrap.children].find(x=>x.textContent===logicSelectFinal);
  if(logicSelectFinal===logicAnswer){btn?.classList.add('correct');if(!logicMistakeFinal)logicRoundV43.correct++;document.getElementById('logicScore').textContent=`${logicRoundV43.correct} richtig`;setTimeout(()=>{logicRoundV43.idx++;showLogicV43();},520);}
  else{logicMistakeFinal=true;btn?.classList.add('retry');btn?.classList.remove('selected');logicSelectFinal=null;msg.textContent='Noch nicht. Versuche eine andere Antwort.';msg.className='message show';}
}
function answerLogicV43(btn,opt){logicSelectFinal=opt;[...btn.parentElement.children].forEach(x=>x.classList.toggle('selected',x===btn));}

// Quiz: extra reasoning questions + select/check workflow without revealing the right answer.
quizBankV43.jungle.push(
  {d:2,q:'Ein Frosch frisst Insekten. Werden deutlich weniger Insekten gefunden, was ist zuerst wahrscheinlich?',o:['Der Frosch findet weniger Nahrung','Der Frosch wird sofort grösser','Es regnet nie mehr','Alle Bäume verlieren ihre Wurzeln'],a:0},
  {d:3,q:'Zwei gleich grosse Waldflächen sind getrennt. Warum kann eine bewachsene Verbindung zwischen ihnen helfen?',o:['Tiere können zwischen Lebensräumen wandern','Sie verhindert jede Krankheit','Sie stoppt den Regen','Sie macht alle Arten gleich'],a:0},
  {d:3,q:'Ein Baum wächst sehr schnell nach oben. Welcher Vorteil ist im dichten Regenwald am naheliegendsten?',o:['Mehr Licht erreichen','Weniger Wasser aufnehmen','Wurzeln vermeiden','Sich vor jedem Tier verstecken'],a:0},
  {d:3,q:'Wenn eine Frucht nur von einer Tierart verbreitet wird und diese verschwindet, was droht?',o:['Die Pflanze verbreitet ihre Samen schlechter','Die Frucht wird automatisch grösser','Der Baum braucht kein Licht mehr','Der Boden wird salzig'],a:0}
);
quizBankV43.space.push(
  {d:2,q:'Ein Satellit wird weiter von der Erde entfernt. Was muss für eine kreisförmige Bahn typischerweise mit seiner Bahngeschwindigkeit passieren?',o:['Sie wird geringer','Sie wird beliebig grösser','Sie bleibt immer exakt gleich','Sie wird null'],a:0},
  {d:3,q:'Ein Stern ist 100 Lichtjahre entfernt. Was sehen wir heute?',o:['Licht von vor etwa 100 Jahren','Den Stern exakt in diesem Moment','Licht von morgen','Nur sein Spiegelbild vom Mond'],a:0},
  {d:3,q:'Warum ist eine Rakete nach dem Start nicht sofort schwerelos?',o:['Sie muss erst in einen geeigneten freien Fall gelangen','Schwerelosigkeit beginnt nur nachts','Die Atmosphäre zieht sie nach oben','Nur der Mond macht schwerelos'],a:0},
  {d:3,q:'Ein Planet braucht doppelt so lange für eine Umdrehung um seine Achse. Was ändert sich direkt?',o:['Ein Tag dauert länger','Ein Jahr wird automatisch halb so lang','Seine Masse verdoppelt sich','Die Sonne wird kälter'],a:0}
);
quizBankV43.sea.push(
  {d:2,q:'Kälteres Meerwasser kann meist mehr Sauerstoff lösen. Welche Folge ist daher plausibel?',o:['Manche Arten finden in kühlerem Wasser bessere Sauerstoffbedingungen','Salz verschwindet','Gezeiten hören auf','Fische brauchen keine Kiemen'],a:0},
  {d:3,q:'Ein Küstengebiet verliert grosse Seegraswiesen. Welche Folge ist am plausibelsten?',o:['Weniger Kinderstube und Schutz für viele Meerestiere','Das Meer wird sofort süss','Alle Wellen verschwinden','Der Mond ändert seine Bahn'],a:0},
  {d:3,q:'Warum kann ein Ölfilm auf der Meeresoberfläche problematisch sein?',o:['Er kann Licht- und Gasaustausch beeinträchtigen','Er macht Wasser zu Eis','Er zieht den Mond an','Er entfernt das Salz'],a:0},
  {d:3,q:'Wenn kleine Beutefische stark abnehmen, was kann bei grossen Räubern passieren?',o:['Ihre Nahrungsgrundlage wird knapper','Sie produzieren mehr Sauerstoff','Sie werden automatisch Pflanzenfresser','Das Meer wird tiefer'],a:0}
);
quizBankV43.greek.push(
  {d:2,q:'Theseus braucht Ariadnes Faden vor allem, weil ...',o:['ein Labyrinth viele ähnliche Wege hat','der Minotaurus Angst vor Fäden hat','der Faden Türen öffnet','der Faden leuchtet'],a:0},
  {d:3,q:'Welche Aussage beschreibt einen Mythos am besten?',o:['Eine überlieferte Erzählung, die Welt, Götter oder Helden deutet','Ein exakt gemessenes Experiment','Eine moderne Wettervorhersage','Eine mathematische Tabelle'],a:0},
  {d:3,q:'Warum waren Häfen für viele griechische Stadtstaaten wichtig?',o:['Handel und Verbindung über das Meer','Weil es keine Strassen gab und niemand gehen konnte','Nur für Tempel','Um Berge abzubauen'],a:0},
  {d:3,q:'Athene wird mit Weisheit verbunden. Welches Symbol passt daher besonders gut?',o:['Eule','Dreizack','Blitz','Stier'],a:0}
);

let quizSelectFinal=null,quizMistakeFinal=false;
function buildQuick(){resetInstanceV43('quick');const pool=quizBankV43[currentWorld].filter(q=>q.d===difficulty);const n=Math.min(difficulty===1?6:difficulty===2?7:8,pool.length);quizRoundV43={items:pickN(pool,n),idx:0,correct:0,answered:false};showQuizV43();}
function showQuizV43(){
  quizSelectFinal=null;quizMistakeFinal=false;const wrap=document.getElementById('quickGrid'),msg=document.getElementById('quizMsg');msg.className='message';msg.textContent='';
  if(quizRoundV43.idx>=quizRoundV43.items.length){const need=Math.ceil(quizRoundV43.items.length*.7);wrap.innerHTML=`<div class="quiz-stage"><div class="quiz-question">${quizRoundV43.correct}/${quizRoundV43.items.length} im ersten Versuch</div></div>`;document.getElementById('quizStatus').textContent='Runde beendet';document.getElementById('quizScore').textContent=`${quizRoundV43.correct} richtig`;if(quizRoundV43.correct>=need){msg.textContent='Quiz geschafft!';msg.classList.add('show');awardReward('quick');}else{msg.textContent=`Für den Sieg brauchst du ${need} richtige im ersten Versuch.`;msg.classList.add('show');}return;}
  const q=quizRoundV43.items[quizRoundV43.idx];document.getElementById('quizStatus').textContent=`${quizRoundV43.idx+1}/${quizRoundV43.items.length}`;document.getElementById('quizScore').textContent=`${quizRoundV43.correct} richtig`;wrap.innerHTML='<div class="quiz-stage"><div class="quiz-question"></div><div class="quiz-options"></div></div>';wrap.querySelector('.quiz-question').textContent=q.q;const opts=wrap.querySelector('.quiz-options');shuffled(q.o.map((t,i)=>({t,ok:i===q.a}))).forEach(o=>{const b=document.createElement('button');b.className='quiz-option';b.textContent=o.t;b.dataset.ok=o.ok?'1':'0';b.onclick=()=>{quizSelectFinal=b;[...opts.children].forEach(x=>x.classList.toggle('selected',x===b));};opts.appendChild(b);});
}
function checkQuizV43(){
  const msg=document.getElementById('quizMsg');if(!quizSelectFinal){msg.textContent='Wähle zuerst eine Antwort.';msg.className='message show';return;}
  if(quizSelectFinal.dataset.ok==='1'){quizSelectFinal.classList.add('good');if(!quizMistakeFinal)quizRoundV43.correct++;document.getElementById('quizScore').textContent=`${quizRoundV43.correct} richtig`;setTimeout(()=>{quizRoundV43.idx++;showQuizV43();},560);}
  else{quizMistakeFinal=true;quizSelectFinal.classList.add('retry');quizSelectFinal.classList.remove('selected');quizSelectFinal=null;msg.textContent='Noch nicht. Überlege nochmals.';msg.className='message show';}
}
function answerQuizV43(btn,ok,q){quizSelectFinal=btn;[...btn.parentElement.children].forEach(x=>x.classList.toggle('selected',x===btn));}

// Sudoku: classic sizes 4x4 / 6x6 / 9x9, symbols or original numbers.
let sudokuModeV43=localStorage.getItem('rw43_sudoku_mode')||'symbols';
let sudokuActiveCellV43=null;
function sudokuDimensionsV43(){return difficulty===1?{n:4,boxR:2,boxC:2,blanks:6}:difficulty===2?{n:6,boxR:2,boxC:3,blanks:18}:{n:9,boxR:3,boxC:3,blanks:50};}
function sudokuPatternV43(r,c,n,boxR,boxC){return (boxC*(r%boxR)+Math.floor(r/boxR)+c)%n;}
function shuffledGroupsV43(n,box){return shuffled([...Array(n/box).keys()]).flatMap(g=>shuffled([...Array(box).keys()]).map(v=>g*box+v));}
function countSudokuSolutionsV43(grid,n,boxR,boxC,limit=2){
  let best=null,bestCand=null;
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(grid[r][c]===0){const used=new Set(grid[r]);for(let rr=0;rr<n;rr++)used.add(grid[rr][c]);const br=Math.floor(r/boxR)*boxR,bc=Math.floor(c/boxC)*boxC;for(let y=0;y<boxR;y++)for(let x=0;x<boxC;x++)used.add(grid[br+y][bc+x]);const cand=[];for(let v=1;v<=n;v++)if(!used.has(v))cand.push(v);if(cand.length===0)return 0;if(best===null||cand.length<bestCand.length){best=[r,c];bestCand=cand;if(cand.length===1)break;}}
  if(best===null)return 1;let count=0;const [r,c]=best;for(const v of bestCand){grid[r][c]=v;count+=countSudokuSolutionsV43(grid,n,boxR,boxC,limit-count);grid[r][c]=0;if(count>=limit)break;}return count;
}
function generateSudokuPuzzleV43(n,boxR,boxC,targetBlanks){
  const rows=shuffledGroupsV43(n,boxR),cols=shuffledGroupsV43(n,boxC),nums=shuffled([...Array(n).keys()].map(i=>i+1));
  const solution=rows.map(r=>cols.map(c=>nums[sudokuPatternV43(r,c,n,boxR,boxC)]));
  const puzzle=solution.map(r=>[...r]);let removed=0;
  for(const idx of shuffled([...Array(n*n).keys()])){if(removed>=targetBlanks)break;const r=Math.floor(idx/n),c=idx%n,keep=puzzle[r][c];puzzle[r][c]=0;const test=puzzle.map(row=>[...row]);if(countSudokuSolutionsV43(test,n,boxR,boxC,2)===1)removed++;else puzzle[r][c]=keep;}
  return {solution,puzzle,removed};
}
function sudokuSymbolSetV43(n){const all=[...new Set([...worlds[currentWorld].sudoku,...worlds[currentWorld].memory])];return all.slice(0,n);}
function sudokuDisplayV43(v){if(!v)return '·';return sudokuModeV43==='numbers'?String(v):sudoku.symbols[v-1];}
function buildSudoku(){
  resetInstanceV43('sudoku');const d=sudokuDimensionsV43(),generated=generateSudokuPuzzleV43(d.n,d.boxR,d.boxC,d.blanks);const entries=generated.puzzle.map(row=>[...row]),givens=generated.puzzle.map(row=>row.map(v=>v!==0));sudoku={n:d.n,boxR:d.boxR,boxC:d.boxC,solution:generated.solution,entries,givens,symbols:sudokuSymbolSetV43(d.n),selected:1};sudokuActiveCellV43=null;renderSudoku();
}
function setSudokuModeV43(mode){sudokuModeV43=mode;localStorage.setItem('rw43_sudoku_mode',mode);renderSudoku();}
function sudokuConflictsV43(){
  const bad=new Set(),{n,boxR,boxC,entries}=sudoku;const markGroup=cells=>{const seen=new Map();for(const [r,c] of cells){const v=entries[r][c];if(!v)continue;if(seen.has(v)){bad.add(`${r},${c}`);bad.add(seen.get(v));}else seen.set(v,`${r},${c}`);}};
  for(let r=0;r<n;r++)markGroup([...Array(n).keys()].map(c=>[r,c]));for(let c=0;c<n;c++)markGroup([...Array(n).keys()].map(r=>[r,c]));for(let br=0;br<n;br+=boxR)for(let bc=0;bc<n;bc+=boxC){const cells=[];for(let y=0;y<boxR;y++)for(let x=0;x<boxC;x++)cells.push([br+y,bc+x]);markGroup(cells);}return bad;
}
function renderSudoku(){
  const {n,boxR,boxC}=sudoku,board=document.getElementById('sudokuBoard');board.dataset.n=n;board.style.gridTemplateColumns=`repeat(${n},1fr)`;board.innerHTML='';document.getElementById('sudokuMsg').classList.remove('show');const conflicts=sudokuConflictsV43();
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){const fixed=sudoku.givens[y][x],v=sudoku.entries[y][x],d=document.createElement('div');d.className='sudoku-cell'+(fixed?' fixed':' empty')+(!fixed&&v?' user':'')+(conflicts.has(`${y},${x}`)?' conflict':'')+(sudokuActiveCellV43&&sudokuActiveCellV43.x===x&&sudokuActiveCellV43.y===y?' active-cell':'');if((x+1)%boxC===0&&x<n-1)d.style.borderRight='4px solid var(--ink)';if((y+1)%boxR===0&&y<n-1)d.style.borderBottom='4px solid var(--ink)';if(fixed)d.textContent=sudokuDisplayV43(v);else{const b=document.createElement('button');b.textContent=sudokuDisplayV43(v);b.onclick=()=>{sudokuActiveCellV43={x,y};if(sudoku.selected){sudoku.entries[y][x]=sudoku.selected;}renderSudoku();};d.appendChild(b);}board.appendChild(d);}
  const pick=document.getElementById('pickRow');pick.dataset.n=n;pick.innerHTML='';for(let v=1;v<=n;v++){const b=document.createElement('button');b.className='pick-btn'+(sudoku.selected===v?' on':'');b.textContent=sudokuDisplayV43(v);b.onclick=()=>{sudoku.selected=v;renderSudoku();};pick.appendChild(b);}
  document.getElementById('modeSymbols').classList.toggle('on',sudokuModeV43==='symbols');document.getElementById('modeNumbers').classList.toggle('on',sudokuModeV43==='numbers');document.getElementById('sudokuStatus').textContent=`${n}×${n} · ${sudokuModeV43==='numbers'?'Zahlen':'Symbole'}`;
}
function eraseSudokuV43(){if(!sudokuActiveCellV43)return;const {x,y}=sudokuActiveCellV43;if(!sudoku.givens[y][x])sudoku.entries[y][x]=0;renderSudoku();}
function checkSudokuV43(){
  const msg=document.getElementById('sudokuMsg'),conf=sudokuConflictsV43();if(conf.size){msg.textContent='Es gibt noch einen Konflikt.';msg.className='message show';return;}
  if(sudoku.entries.some(r=>r.some(v=>!v))){msg.textContent='Noch nicht fertig.';msg.className='message show';return;}
  const ok=sudoku.entries.every((r,y)=>r.every((v,x)=>v===sudoku.solution[y][x]));if(ok){msg.textContent='Perfekt! Sudoku gelöst.';msg.className='message show';awardReward('sudoku');}else{msg.textContent='Fast – irgendwo stimmt noch ein Feld nicht.';msg.className='message show';}
}
function placeSudoku(x,y){sudokuActiveCellV43={x,y};if(!sudoku.givens[y][x])sudoku.entries[y][x]=sudoku.selected;renderSudoku();}

// Dots: preserve complex multi-stroke motifs and enforce non-overlapping point markers.
function buildDots(){
  resetInstanceV43('dots');const set=dotShapesV43[currentWorld],idx=Math.floor(Math.random()*set.length),spec=set[idx];const dense=spec.strokes.map(buildDenseStrokeV43),lens=dense.map(p=>pathLength(p,false)),totalLen=lens.reduce((a,b)=>a+b,0);let remaining=spec.target,raw=[];
  dense.forEach((stroke,si)=>{let c=si===dense.length-1?remaining:Math.max(5,Math.round(spec.target*(lens[si]/totalLen)));const minLeft=(dense.length-si-1)*5;c=Math.min(c,remaining-minLeft);remaining-=c;sampleStroke(stroke,c).forEach((p,j)=>raw.push({x:p.x,y:p.y,stroke:si,breakBefore:si>0&&j===0}));});
  let spaced=[];for(let gap=16;gap>=11;gap--){const cand=[];for(const p of raw){const sp=scaleDotPoint(p);if(cand.every(q=>Math.hypot(sp.x-q.sx,sp.y-q.sy)>=gap))cand.push({...p,sx:sp.x,sy:sp.y});}if(cand.length>=50){spaced=cand;break;}}
  if(spaced.length<50){const cand=[];for(const p of raw){const sp=scaleDotPoint(p);if(cand.every(q=>Math.hypot(sp.x-q.sx,sp.y-q.sy)>=9))cand.push({...p,sx:sp.x,sy:sp.y});}spaced=cand.slice(0,Math.max(50,Math.min(cand.length,90)));}
  spaced=spaced.map((p,i,a)=>({...p,n:i+1,breakBefore:i>0&&p.stroke!==a[i-1].stroke}));dotsState={points:spaced,next:1,shapeIndex:idx,name:spec.name,dotRadius:4.2};document.getElementById('dotsStatus').textContent=`${spec.name} · 1/${spaced.length}`;document.getElementById('dotsMsg').classList.remove('show');drawDots();
}
function drawDots(){
  dctx.clearRect(0,0,dotsCanvas.width,dotsCanvas.height);dctx.fillStyle='#fff';dctx.fillRect(0,0,dotsCanvas.width,dotsCanvas.height);dctx.strokeStyle=worlds[currentWorld].accent;dctx.lineWidth=4;dctx.lineCap='round';dctx.lineJoin='round';for(let i=1;i<dotsState.next-1;i++){const cur=dotsState.points[i],prev=dotsState.points[i-1];if(cur.breakBefore)continue;const a=scaleDotPoint(prev),b=scaleDotPoint(cur);dctx.beginPath();dctx.moveTo(a.x,a.y);dctx.lineTo(b.x,b.y);dctx.stroke();}
  const r=dotsState.dotRadius||4.2;dotsState.points.forEach(p=>{const s=scaleDotPoint(p),done=p.n<dotsState.next;dctx.fillStyle=done?worlds[currentWorld].accent:'#f5f1e8';dctx.beginPath();dctx.arc(s.x,s.y,r,0,Math.PI*2);dctx.fill();dctx.strokeStyle=done?'rgba(255,255,255,.8)':'#aaa79d';dctx.lineWidth=.9;dctx.stroke();dctx.fillStyle=done?'#fff':'#26333a';dctx.font='900 7.5px system-ui';dctx.textAlign='center';dctx.textBaseline='middle';dctx.fillText(p.n,s.x,s.y);});
}

// Tablet QA/debug launch, harmless unless query parameters are supplied.
(function v43DebugLaunch(){
  const p=new URLSearchParams(location.search);if(!p.size)return;
  if(p.get('difficulty'))difficulty=Math.max(1,Math.min(3,+p.get('difficulty'))||2);
  if(p.get('world')&&worlds[p.get('world')])currentWorld=p.get('world');
  if(p.get('mode'))sudokuModeV43=p.get('mode')==='numbers'?'numbers':'symbols';
  const screen=p.get('screen');
  setTimeout(()=>{
    syncHome(); if(screen&&document.getElementById(screen))openGame(screen);
    setTimeout(()=>{if(p.get('qa')==='1'){document.body.dataset.qaViewport=`${innerWidth}x${innerHeight}`;document.body.dataset.qaScroll=`${document.documentElement.scrollWidth}x${document.documentElement.scrollHeight}`;document.body.dataset.qaBody=`${document.body.scrollWidth}x${document.body.scrollHeight}`;}},260);
  },0);
})();

syncHome(); showHome();
