const APP_VERSION='5.5';
function varColor(name,fallback){
  try{
    const value=getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value && (!window.CSS || CSS.supports('color',value)) ? value : fallback;
  }catch(error){return fallback;}
}
function canvasUnit(canvas){
  const width=canvas.getBoundingClientRect().width;
  return width>0 ? canvas.width/width : 1;
}
function canvasFailure(id,error){
  console.error('[Raetselwelt '+APP_VERSION+'] '+id,error);
  const stage=document.getElementById(id+'Stage');if(!stage)return;
  stage.querySelector('.render-error')?.remove();
  const box=document.createElement('div');box.className='render-error';box.setAttribute('role','alert');
  const text=document.createElement('p');text.textContent='Die Zeichenfl\u00e4che konnte nicht aufgebaut werden.';
  const button=document.createElement('button');button.textContent='Erneut versuchen';button.onclick=()=>openGame(id);
  const detail=document.createElement('code');detail.textContent='V'+APP_VERSION+' / '+(error?.message||String(error));
  box.append(text,button,detail);stage.appendChild(box);
}
function clearCanvasFailure(id){document.querySelector('#'+id+'Stage .render-error')?.remove();}
function pointerEventsFor(event){
  let list=[];try{list=event.getCoalescedEvents?.()||[];}catch(error){}
  return list.length?list:[event];
}

const DIFFS=[
 {id:1,name:'Leicht',desc:'für Junior · klare Regeln',cls:'easy'},
 {id:2,name:'Mittel',desc:'mehr Kombinationen',cls:'mid'},
 {id:3,name:'Knifflig',desc:'echtes Rätselbuch-Niveau',cls:'hard'},
 {id:4,name:'Pro',desc:'für Erwachsene',cls:'pro'}
];
const WORLDS={
 jungle:{name:'Dschungel',icon:'🌿',accent:'#4f9652',accent3:'#91cc59',symbols:['🦁','🐒','🦜','🌴','🐍','🦋','🐘','🐆','🐊'],memory:['🦁','🐒','🦜','🐍','🌴','🍌','🦋','🐘','🐆','🪲','🌺','🍍','🦓','🐊','🦧','🥭','🪵','🧭','🐸','🦎','🌿','🦚'],words:['AFFE','LÖWE','LIANE','PALME','PANDA','TIGER','MANGO','TUKAN','BANANE','BLATT','KÄFER','PAPAGEI','GIRAFFE','KROKODIL','PANTHER','DSCHUNGEL','WASSERFALL','SCHMETTERLING','ABENTEUER','FERNGLAS','KOMPASS','CHAMÄLEON','REGENWALD','SCHATZKARTE','KLETTERPFAD','URWALD','ENTDECKER','WILDKATZE','HÄNGEBRÜCKE','BAUMKRONE']},
 space:{name:'Weltraum',icon:'🚀',accent:'#4f62d8',accent3:'#8fa0ff',symbols:['🚀','🪐','🌙','⭐','☄️','🛰️','👽','🌍','🔭'],memory:['🚀','🪐','🌟','👽','🌙','☄️','🛰️','⭐','🛸','🔭','☀️','🌌','👾','🌠','🧑‍🚀','🌍','🌒','🛰','🌑','🌕','🪐','🚀'],words:['MOND','STERN','MARS','RAKETE','PLANET','KOMET','SONNE','ORBIT','ALIEN','SATURN','ASTRONAUT','GALAXIE','TELESKOP','METEORIT','SCHWERKRAFT','RAUMSTATION','MILCHSTRASSE','ASTEROID','RAUMSCHIFF','UMLAUFBAHN','SONNENSYSTEM','MONDLANDUNG','NEBELWOLKE','GRAVITATION','SATELLIT','STERNBILD','RAUMANZUG','PLANETENRING','SUPERNOVA','EXOPLANET']},
 sea:{name:'Meer',icon:'🌊',accent:'#1f95af',accent3:'#57c8df',symbols:['🐟','🐙','🦀','🐚','🐬','⚓','🪸','🐢','⭐'],memory:['🐟','🐬','🐙','🦀','🌊','⚓','🦑','🐚','⭐','🐡','🪸','⛵','🐢','🐠','🪼','🦞','🏖️','🧜','🐋','🦈','🌊','🐳'],words:['FISCH','MEER','WELLE','KREBS','MUSCHEL','DELFIN','ANKER','KORALLE','STRAND','TAUCHER','SEESTERN','SCHATZINSEL','SEEPFERDCHEN','LEUCHTTURM','OZEAN','UNTERWASSER','SCHIFF','KORALLENRIFF','TAUCHMASKE','PERLE','SANDSCHLOSS','MEERESSCHILDKRÖTE','HAFEN','GEZEITEN','STRANDBUCHT','SCHATZTRUHE','WELLENSCHAUM','SEGELBOOT','TIEFSEE','WALHAI']},
 greek:{name:'Griechenland',icon:'🏛️',accent:'#1996b1',accent3:'#59d1da',symbols:['🏛️','⚡','🫒','🌊','🦉','🏺','☀️','🐂','🛡️'],memory:['🏛️','⚡','🐂','🫒','🌊','☀️','🦉','🏺','🛡️','🌿','🎭','🧵','🗿','🏝️','⚔️','🎼','🥾','🗝️','🏺','👑','🐍','🪽'],words:['KRETA','ZEUS','MEER','OLIVE','TEMPEL','INSEL','SONNE','EULE','SAGE','LABYRINTH','MINOTAURUS','ATHENE','OLIVENBAUM','HERKULES','ODYSSEUS','AMPHORE','AKROPOLIS','MYTHOLOGIE','FELSENBUCHT','MARMORSÄULE','LORBEERKRANZ','ALPHABET','TEMPELRUINE','HELDENSAGE','OLIVENHAIN','POSEIDON','ARIADNE','KNOSSOS','ÄGÄIS','ORAKEL']},
 dino:{name:'Dinosaurier',icon:'🦖',accent:'#657d2e',accent3:'#a5bd55',symbols:['🦖','🦕','🥚','🌋','🦴','🌿','☄️','🐾','🪨'],memory:['🦖','🦕','🥚','🌋','🦴','🌿','☄️','🐾','🪨','🌴','🦎','🏞️','🦷','🥩','🔎','🧭','⛏️','🧪','🪺','🌱','🦴','🦖'],words:['DINO','RAPTOR','FOSSIL','KNOCHEN','VULKAN','JURA','KREIDE','SAURIER','TRICERATOPS','TYRANNOSAURUS','STEGOSAURUS','BRACHIOSAURUS','ANKYLOSAURUS','VELOCIRAPTOR','PALÄONTOLOGE','FUSSSPUREN','URZEIT','METEORIT','PANGÄA','FARNWALD','DINOSAURIER','FLEISCHFRESSER','PFLANZENFRESSER','FOSSILIENFUND','AUSGRABUNG','SCHÄDEL','URKONTINENT','DINONEST','EIERGELEGE','KREIDEZEIT']},
 pirate:{name:'Piraten',icon:'🏴‍☠️',accent:'#9a562d',accent3:'#d79a4e',symbols:['🏴‍☠️','⚓','🗺️','💰','⛵','🦜','🏝️','🧭','🗝️'],memory:['🏴‍☠️','⚓','🗺️','💰','⛵','🦜','🏝️','🧭','🗝️','🪙','🌊','🛶','🔭','📜','🪝','🧰','🦀','🏖️','💎','🛟','🚢','🐚'],words:['PIRAT','SCHIFF','ANKER','KARTE','SCHATZ','INSEL','KAPITÄN','PAPAGEI','KOMPASS','FERNROHR','SCHATZTRUHE','SEGELSCHIFF','GOLDMÜNZE','PLANKEN','HAFEN','KANONE','FLAGGE','STEUERRAD','GEHEIMKARTE','SCHIFFSDECK','PIRATENBUCHT','SCHATZINSEL','MANNSCHAFT','TAUWERK','KAPERFAHRT','FLASCHENPOST','MEERESKARTE','VERSTECK','KÜSTENNEBEL','ABENTEUER']},
 egypt:{name:'Ägypten',icon:'🏜️',accent:'#b07a2a',accent3:'#e0b95d',symbols:['🏜️','🐫','🐍','☀️','🏺','👑','🪲','🔺','🐈'],memory:['🏜️','🐫','🐍','☀️','🏺','👑','🪲','🔺','🐈','🌴','🛶','📜','🧱','⚱️','🌾','💎','🦅','🌙','🗿','🧭','🔑','🪶'],words:['NIL','PHARAO','PYRAMIDE','MUMIE','KAMEL','WÜSTE','OASE','TEMPEL','SPHINX','PAPYRUS','HIEROGLYPHEN','SARKOPHAG','TUTANCHAMUN','KLEOPATRA','SKARABÄUS','OBELISK','ANKH','NILDELTA','GRABKAMMER','WÜSTENSAND','KÖNIGSTAL','SONNENGOTT','STEINBLOCK','KARAWANE','PALMENOASE','ARCHÄOLOGIE','GÖTTERWELT','PHARAONEN','PAPYRUSROLLE','PYRAMIDENBAU']},
 castle:{name:'Ritterburg',icon:'🏰',accent:'#775888',accent3:'#b08bc0',symbols:['🏰','🛡️','⚔️','🐉','👑','🗝️','🏹','🐎','🔥'],memory:['🏰','🛡️','⚔️','🐉','👑','🗝️','🏹','🐎','🔥','🧙','📜','🕯️','🔔','🪶','🪙','🧱','🚩','🪓','🗡️','🪄','🏆','🐴'],words:['BURG','RITTER','DRACHE','SCHILD','SCHWERT','KRONE','TURM','KÖNIG','GRABEN','ZUGBRÜCKE','RITTERSAAL','BURGMAUER','TURNIER','RÜSTUNG','BOGEN','KATAPULT','WACHTURM','BURGFRÄULEIN','FACKEL','GEHEIMGANG','KERKER','BURGTOR','WAPPEN','PFERD','TAFELRUNDE','LANZE','BURGHOF','SCHATZKAMMER','WACHTPOSTEN','MITTELALTER']}
};
const WORLD_SCENES={jungle:['🌿','🦜','🐒'],space:['🪐','🚀','✨'],sea:['🌊','🐬','🐚'],greek:['🏛️','⚡','🫒'],dino:['🌋','🦖','🦴'],pirate:['🏝️','🏴‍☠️','💰'],egypt:['🏜️','🔺','🐫'],castle:['🏰','🐉','⚔️']};
const GAMES=[['word','Wortsuche','ABC','Kreuzungen'],['maze','Labyrinth','↝','Fingerpfad'],['mix','Wortsalat','AZ','Buchstaben'],['logic','Logik','◆','Muster & Matrizen'],['memory','Memory','◎','Merken'],['sudoku','Sudoku','⊞','9×9 + Notizen'],['dots','Punktebild','⋯','Finger ziehen'],['quiz','Challenge','⚡','Kurz & intuitiv']];
const GAME_ART={
  word:{hero:'🔎',a1:'A',a2:'B',a3:'C',a4:'✦'},
  maze:{hero:'🧩',a1:'↶',a2:'↷',a3:'┐',a4:'●'},
  mix:{hero:'🥗',a1:'A',a2:'Z',a3:'B',a4:'✦'},
  logic:{hero:'🧠',a1:'◆',a2:'△',a3:'◼',a4:'∑'},
  memory:{hero:'🎴',a1:'☀️',a2:'🌙',a3:'★',a4:'◎'},
  sudoku:{hero:'▦',a1:'1',a2:'5',a3:'9',a4:'✎'},
  dots:{hero:'🐱',a1:'1',a2:'47',a3:'93',a4:'•'},
  quiz:{hero:'🧭',a1:'✓',a2:'?',a3:'⚡',a4:'✦'}
};
let difficulty=+(localStorage.getItem('rw5_diff')||2), world=localStorage.getItem('rw5_world')||'jungle', stars=+(localStorage.getItem('rw5_stars')||0), wizardStep=1;
if(!WORLDS[world])world='jungle';
let stickerData=JSON.parse(localStorage.getItem('rw5_stickers')||'{}'), challengeData=JSON.parse(localStorage.getItem('rw5_challenge')||'{}');
let gameDiffs=JSON.parse(localStorage.getItem('rw54_game_diffs')||'{}');
function saveBase(){localStorage.setItem('rw5_diff',difficulty);localStorage.setItem('rw5_world',world);localStorage.setItem('rw5_stars',stars);localStorage.setItem('rw5_stickers',JSON.stringify(stickerData));localStorage.setItem('rw5_challenge',JSON.stringify(challengeData));localStorage.setItem('rw54_game_diffs',JSON.stringify(gameDiffs));}
function theme(){const w=WORLDS[world];document.documentElement.style.setProperty('--accent',w.accent);document.documentElement.style.setProperty('--accent3',w.accent3);document.documentElement.style.setProperty('--soft',w.accent+'18');}
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));}
function goWizard(step=1){show('wizard');wizardStep=Math.max(1,Math.min(2,step));renderWizard();}
function renderWizard(){theme();['c1','c2'].forEach((id,i)=>document.getElementById(id).classList.toggle('on',i+1===wizardStep));document.querySelectorAll('#wizard .step').forEach((s,i)=>s.classList.toggle('on',i+1===wizardStep));document.getElementById('stars').textContent=stars;document.getElementById('albumCount').textContent=`${totalStickers()}/80`;renderStep1();renderStep2();}
function renderStep1(){const el=document.getElementById('step1');el.innerHTML='';Object.entries(WORLDS).forEach(([k,w])=>{const s=WORLD_SCENES[k]||[w.icon,'✨','⭐'];const b=document.createElement('button');b.className='world3d';b.style.setProperty('--wa',w.accent);b.style.setProperty('--wb',w.accent3);b.innerHTML=`<div class="worldscene"><span class="s1">${s[0]}</span><span class="hero">${s[1]}</span><span class="s2">${s[2]}</span><span class="spark">✦</span></div><span class="world-stickers">${stickerCount(k)}/10</span><span class="world-name">${w.name}</span>`;b.onclick=()=>{world=k;saveBase();theme();goWizard(2)};el.appendChild(b)});}
function renderStep2(){const banner=document.getElementById('worldBanner'),grid=document.getElementById('gameGrid'),w=WORLDS[world];banner.style.background=`linear-gradient(145deg,${w.accent3},${w.accent})`;banner.innerHTML=`<span class="wi">${w.icon}</span><span class="wn">${w.name}</span><small>Spiel auswählen · Schwierigkeit kommt im Spiel</small>`;grid.innerHTML='';GAMES.forEach(([id,name,sym,sub])=>{const b=document.createElement('button');const art=GAME_ART[id]||{hero:sym,a1:'✦',a2:'',a3:'',a4:''};b.className='game '+id+(id==='quiz'?' challenge-game':'');b.innerHTML=`<div class="gameart"><span class="a1">${art.a1||''}</span><span class="a2">${art.a2||''}</span><span class="a3">${art.a3||''}</span><span class="a4">${art.a4||''}</span><span class="hero">${art.hero||sym}</span></div><b>${name}</b><small>${sub}</small>`;b.onclick=()=>openGame(id);grid.appendChild(b)});}
function difficultyName(){return DIFFS.find(d=>d.id===difficulty).name}
function activeScreen(){return document.querySelector(".screen.active")?.id||""}

function fitCanvas(canvas,stageId,aspect){
  const box=document.getElementById(stageId);
  if(!box||!box.closest('.screen')?.classList.contains('active'))return false;
  const rect=box.getBoundingClientRect();
  const aw=Math.floor(rect.width-4),ah=Math.floor(rect.height-4);
  if(aw<20||ah<20)return false;
  let w=aw,h=ah;
  if(aspect>0){h=w/aspect;if(h>ah){h=ah;w=h*aspect;}}
  w=Math.max(1,Math.floor(w));h=Math.max(1,Math.floor(h));
  const dpr=Math.min(3,Math.max(1,window.devicePixelRatio||1));
  canvas.style.width=w+'px';canvas.style.height=h+'px';
  canvas.style.left=Math.floor((rect.width-w)/2)+'px';canvas.style.top=Math.floor((rect.height-h)/2)+'px';
  const bw=Math.round(w*dpr),bh=Math.round(h*dpr);
  if(canvas.width!==bw)canvas.width=bw;
  if(canvas.height!==bh)canvas.height=bh;
  return true;
}
function fitMazeCanvas(){if(fitCanvas(mc,'mazeStage',0)&&maze)drawMaze();}
function fitDotsCanvas(){if(fitCanvas(dc,'dotsStage',0)&&dots){computeDotLabels();drawDots();}}
let layoutFrame=0;
function updateViewport(){
  const height=Math.floor(window.visualViewport?.height||window.innerHeight);
  if(height>0)document.documentElement.style.setProperty('--app-height',height+'px');
}
function scheduleCanvasLayout(){
  if(layoutFrame)return;
  layoutFrame=requestAnimationFrame(()=>{
    layoutFrame=0;updateViewport();
    const id=activeScreen();if(id!=='maze'&&id!=='dots')return;
    try{if(id==='maze')fitMazeCanvas();else fitDotsCanvas();}catch(error){canvasFailure(id,error);}
  });
}
function ensureDifficultyBar(id){const screen=document.getElementById(id),bar=screen?.querySelector('.topbar');if(!bar)return;let dbar=bar.querySelector('.diffbar');if(!dbar){dbar=document.createElement('div');dbar.className='diffbar';const grow=bar.querySelector('.grow');bar.insertBefore(dbar,grow||null);}dbar.innerHTML='';DIFFS.forEach(d=>{const b=document.createElement('button');b.className='diffpill'+(d.id===difficulty?' on':'');b.textContent=d.name;b.onclick=()=>setGameDifficulty(id,d.id);dbar.appendChild(b)});}
function gameFactory(id){return {word:buildWord,maze:buildMaze,mix:buildMix,logic:buildLogicRound,memory:buildMemory,sudoku:()=>newSudoku(false),dots:buildDots,quiz:buildQuizRound}[id]}
function setGameDifficulty(id,d){difficulty=d;gameDiffs[id]=d;saveBase();ensureDifficultyBar(id);const f=gameFactory(id);if(!f)return;if(id==='maze'||id==='dots'){clearCanvasFailure(id);updateViewport();try{f();scheduleCanvasLayout()}catch(error){canvasFailure(id,error)}}else f();}
function openGame(id){difficulty=+(gameDiffs[id]||difficulty||2);show(id);theme();ensureDifficultyBar(id);const factory=gameFactory(id);if(!factory)return;if(id==='maze'||id==='dots'){clearCanvasFailure(id);updateViewport();try{factory();scheduleCanvasLayout()}catch(error){canvasFailure(id,error)}}else factory();}
window.addEventListener('resize',scheduleCanvasLayout);
window.addEventListener('orientationchange',scheduleCanvasLayout);
document.addEventListener('fullscreenchange',scheduleCanvasLayout);
window.visualViewport?.addEventListener('resize',scheduleCanvasLayout);
function toggleFull(){if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()}
function showHelp(title,text){document.getElementById('helpTitle').textContent=title;document.getElementById('helpText').textContent=text;document.getElementById('help').classList.add('show')}function hideHelp(){document.getElementById('help').classList.remove('show')}
const HELP={word:'Ziehe vom ersten bis zum letzten Buchstaben. Wörter können waagrecht, senkrecht, diagonal und rückwärts liegen. Kreuzungen ändern die Farbe.',maze:'Setze beim grünen START an und finde das rote ZIEL. START kann links oben, mittig oder unten liegen. Du darfst den Finger loslassen und am gelben Endpunkt weiterfahren.',mix:'Ordne die Buchstaben zum gesuchten Begriff. Pro enthält längere Begriffe.',logic:'Wähle eine Lösung und tippe Prüfen. Pro mischt Zahlenfolgen, verschachtelte Reihen und Matrizen.',memory:'Finde gleiche Paare. Pro verwendet mehr und ähnlichere Motive.',sudoku:'Klassisches 9×9 mit 3×3-Blöcken. Im Notizmodus kannst du Kandidaten 1–9 klein eintragen. Undo und Löschen sind jederzeit möglich.',dots:'Finger auf Punkt 1 setzen und ziehen. Die App erkennt die Strecke zwischen Touchpunkten, auch wenn du schnell fährst. Bei schwereren Stufen gibt es keinen Hinweisring.',quiz:'Eine Runde mischt Schnellfragen, Richtig/Falsch und Was-passt-nicht. Antippen reicht – kein Prüfen-Button. Pro richtet sich auch an Erwachsene.'};
function helpGame(id){showHelp(GAMES.find(g=>g[0]===id)?.[1]||'Hilfe',HELP[id])}
function toast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1400)}
function shuffled(a){return [...a].sort(()=>Math.random()-.5)}function pick(a){return a[Math.floor(Math.random()*a.length)]}function pickN(a,n){return shuffled(a).slice(0,Math.min(n,a.length))}
function msg(id,t,ms=1200){const e=document.getElementById(id);e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),ms)}
/* rewards */
const STICKERS={
 jungle:[['🦜','Papagei'],['🐒','Kletteraffe'],['🌴','Palmenpfad'],['🦋','Falter'],['🐯','Tiger'],['🥭','Mango'],['🧭','Kompass'],['🐊','Krokodil'],['🌺','Blüte'],['🪲','Käfer']],
 space:[['🚀','Rakete'],['🪐','Saturn'],['🧑‍🚀','Astronaut'],['👽','Alien'],['☄️','Komet'],['🛰️','Satellit'],['🌌','Galaxie'],['🌙','Mond'],['⭐','Stern'],['🔭','Teleskop']],
 sea:[['🐬','Delfin'],['🐠','Fisch'],['🐙','Krake'],['🦀','Krabbe'],['🐚','Muschel'],['⭐','Seestern'],['⚓','Anker'],['🪸','Koralle'],['⛵','Segler'],['🐢','Schildkröte']],
 greek:[['🏛️','Tempel'],['⚡','Zeus'],['🫒','Olive'],['🐂','Minotaurus'],['🦉','Athene'],['🏺','Amphore'],['🌊','Kreta'],['☀️','Sonne'],['🛡️','Schild'],['🌿','Lorbeer']],
 dino:[['🦖','T-Rex'],['🦕','Langhals'],['🥚','Dino-Ei'],['🌋','Vulkan'],['🦴','Fossil'],['🐾','Dino-Spur'],['☄️','Meteorit'],['🌿','Urwald'],['🦷','Dino-Zahn'],['⛏️','Ausgrabung']],
 pirate:[['🏴‍☠️','Piratenflagge'],['⚓','Anker'],['🗺️','Schatzkarte'],['💰','Goldschatz'],['⛵','Segler'],['🦜','Papagei'],['🏝️','Schatzinsel'],['🧭','Kompass'],['🗝️','Schlüssel'],['🔭','Fernrohr']],
 egypt:[['🔺','Pyramide'],['🐫','Kamel'],['🪲','Skarabäus'],['🏺','Amphore'],['👑','Pharao'],['🐈','Tempelkatze'],['☀️','Sonnengott'],['📜','Papyrus'],['🏜️','Wüste'],['🛶','Nilboot']],
 castle:[['🏰','Burg'],['🛡️','Ritterschild'],['⚔️','Schwert'],['🐉','Drache'],['👑','Krone'],['🗝️','Burgtor-Schlüssel'],['🏹','Bogen'],['🐎','Ritterpferd'],['🔥','Fackel'],['📜','Wappenrolle']]
};
function normalizeRewards(){Object.keys(WORLDS).forEach(k=>{if(!Array.isArray(stickerData[k]))stickerData[k]=[];if(!challengeData[k])challengeData[k]={wins:0,types:[]}})}function stickerCount(k){normalizeRewards();return stickerData[k].length}function totalStickers(){normalizeRewards();return Object.values(stickerData).reduce((a,b)=>a+b.length,0)}
function reward(game){normalizeRewards();stars++;let c=challengeData[world];c.wins++;if(!c.types.includes(game))c.types.push(game);let unlocked=null;if(c.wins>=6&&c.types.length>=4&&stickerData[world].length<10){const missing=[...Array(10).keys()].filter(i=>!stickerData[world].includes(i));const i=pick(missing);stickerData[world].push(i);c.wins=0;c.types=[];unlocked=STICKERS[world][i]}saveBase();document.getElementById('stars').textContent=stars;toast(unlocked?`🧩 Neuer Sticker: ${unlocked[1]}`:'⭐ Geschafft');}
function showAlbum(){show('album');renderAlbum()}
let albumWorld='jungle';function renderAlbum(){normalizeRewards();const tabs=document.getElementById('albumTabs');tabs.innerHTML='';Object.entries(WORLDS).forEach(([k,w])=>{const b=document.createElement('button');b.className='atab'+(k===albumWorld?' on':'');b.textContent=`${w.icon} ${w.name} ${stickerCount(k)}/10`;b.onclick=()=>{albumWorld=k;renderAlbum()};tabs.appendChild(b)});const grid=document.getElementById('albumGrid');grid.innerHTML='';const unlocked=new Set(stickerData[albumWorld]);STICKERS[albumWorld].forEach((s,i)=>{const d=document.createElement('div');d.className='sticker '+(unlocked.has(i)?'on':'locked');if(unlocked.has(i)){d.style.background=`linear-gradient(145deg,${WORLDS[albumWorld].accent},${WORLDS[albumWorld].accent3})`;d.innerHTML=`<span class="ico">${s[0]}</span><b>${s[1]}</b><small>Sticker ${i+1}</small>`}else d.innerHTML=`<span class="ico">?</span><b>Unbekannt</b><small>Sticker ${i+1}</small>`;grid.appendChild(d)});const c=challengeData[albumWorld];document.getElementById('albumStatus').textContent=`${totalStickers()}/80 · nächster Sticker: ${c.wins}/6 Siege, ${c.types.length}/4 Spiele`}
/* WORD SEARCH */
let wg=null;function wordDims(){return difficulty===1?[12,10,8]:difficulty===2?[16,11,12]:difficulty===3?[18,13,16]:[21,14,20]}
function buildWord(){
  const [cols,rows,count]=wordDims(),bank=[...WORLDS[world].words].filter(w=>w.length<=cols),dirs=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];
  let bestAttempt=null;
  for(let attempt=0;attempt<55;attempt++){
    const words=pickN(bank,count).sort((a,b)=>b.length-a.length),grid=Array.from({length:rows},()=>Array(cols).fill('')),placed=[];let totalOverlap=0,failed=false;
    for(let wi=0;wi<words.length;wi++){
      const word=words[wi],cands=[];
      for(const [dx,dy] of dirs){
        for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
          const ex=x+dx*(word.length-1),ey=y+dy*(word.length-1);if(ex<0||ey<0||ex>=cols||ey>=rows)continue;
          let ok=true,over=0;const cells=[];
          for(let i=0;i<word.length;i++){const xx=x+dx*i,yy=y+dy*i,c=grid[yy][xx];if(c&&c!==word[i]){ok=false;break}if(c===word[i])over++;cells.push(`${xx},${yy}`)}
          if(!ok)continue;
          const diag=Math.abs(dx)+Math.abs(dy)===2;
          const desired=wi===0?0:difficulty===1?0:difficulty===2?1:difficulty===3?2:3;
          let score=over*26+(diag?(difficulty>=2?9:3):0)-Math.abs(over-desired)*2+Math.random()*2;
          if(wi>0&&difficulty>=2&&over===0)score-=difficulty===4?24:12;
          cands.push({x,y,dx,dy,cells,over,score});
        }
      }
      if(!cands.length){failed=true;break}
      cands.sort((a,b)=>b.score-a.score);const top=Math.min(difficulty===4?2:5,cands.length),c=cands[Math.floor(Math.random()*top)];
      for(let i=0;i<word.length;i++)grid[c.y+c.dy*i][c.x+c.dx*i]=word[i];placed.push({word,cells:c.cells});totalOverlap+=c.over;
    }
    if(failed)continue;
    const crossWords=placed.filter(p=>p.cells.some(k=>{let n=0;for(const q of placed)if(q!==p&&q.cells.includes(k))n++;return n>0})).length;
    const score=totalOverlap*20+crossWords*8;
    if(!bestAttempt||score>bestAttempt.score)bestAttempt={grid,placed,score,crossWords};
    const crossGoal=difficulty===1?Math.floor(count*.25):difficulty===2?Math.floor(count*.65):difficulty===3?Math.floor(count*.8):Math.floor(count*.9);
    if(crossWords>=crossGoal)break;
  }
  if(!bestAttempt){msg('wordMsg','Neue Wortsuche wird erzeugt …',700);setTimeout(buildWord,50);return}
  const abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';bestAttempt.grid.forEach(r=>r.forEach((v,i)=>{if(!v)r[i]=abc[Math.floor(Math.random()*abc.length)]}));
  wg={cols,rows,grid:bestAttempt.grid,placed:bestAttempt.placed,found:new Set(),drag:null,cover:{}};renderWord();
}
function renderWord(){const g=document.getElementById('wordGrid');g.innerHTML='';g.style.gridTemplateColumns=`repeat(${wg.cols},1fr)`;g.style.gridTemplateRows=`repeat(${wg.rows},1fr)`;const ratio=wg.cols/wg.rows;g.style.width=`min(100%, calc((100dvh - 135px) * ${ratio}))`;g.style.height='min(100%,calc(100dvh - 135px))';wg.grid.forEach((r,y)=>r.forEach((ch,x)=>{const d=document.createElement('div');d.className='letter';d.dataset.x=x;d.dataset.y=y;const n=wg.cover[`${x},${y}`]||0;if(n===1)d.classList.add('hit1');if(n===2)d.classList.add('hit2');if(n>=3)d.classList.add('hit3');d.textContent=ch;g.appendChild(d)}));document.getElementById('wordList').innerHTML=wg.placed.map(p=>`<div class="wordchip ${wg.found.has(p.word)?'done':''}">${p.word}</div>`).join('');document.getElementById('wordStatus').textContent=`${wg.found.size}/${wg.placed.length}`;g.onpointerdown=wordDown;g.onpointermove=wordMove;g.onpointerup=wordUp;g.onpointercancel=wordUp}
function wordCell(e){const el=document.elementFromPoint(e.clientX,e.clientY);return el?.classList.contains('letter')?el:null}function wordDown(e){const c=wordCell(e);if(!c)return;wg.drag={sx:+c.dataset.x,sy:+c.dataset.y,ex:+c.dataset.x,ey:+c.dataset.y};e.currentTarget.setPointerCapture?.(e.pointerId);previewWord()}function wordMove(e){if(!wg.drag)return;const c=wordCell(e);if(!c)return;wg.drag.ex=+c.dataset.x;wg.drag.ey=+c.dataset.y;previewWord()}function wordCells(){const d=wg.drag,dx=d.ex-d.sx,dy=d.ey-d.sy,ax=Math.abs(dx),ay=Math.abs(dy);if(!(dx===0||dy===0||ax===ay))return[];const n=Math.max(ax,ay),sx=Math.sign(dx),sy=Math.sign(dy);return Array.from({length:n+1},(_,i)=>`${d.sx+sx*i},${d.sy+sy*i}`)}function previewWord(){document.querySelectorAll('.letter.preview').forEach(x=>x.classList.remove('preview'));wordCells().forEach(k=>{const[x,y]=k.split(',');document.querySelector(`.letter[data-x="${x}"][data-y="${y}"]`)?.classList.add('preview')})}function wordUp(){if(!wg.drag)return;const c=wordCells().join('|');const m=wg.placed.find(p=>!wg.found.has(p.word)&&(p.cells.join('|')===c||[...p.cells].reverse().join('|')===c));if(m){wg.found.add(m.word);m.cells.forEach(k=>wg.cover[k]=(wg.cover[k]||0)+1);renderWord();if(wg.found.size===wg.placed.length){msg('wordMsg','Alles gefunden!',2200);reward('word')}}wg.drag=null;document.querySelectorAll('.letter.preview').forEach(x=>x.classList.remove('preview'))}
/* MAZE */
const mc=document.getElementById('mazeCanvas'),mctx=mc.getContext('2d');let maze=null;
function freshCells(cols,rows){return Array.from({length:rows},(_,y)=>Array.from({length:cols},(_,x)=>({x,y,w:[1,1,1,1],v:false})))}
const MDIRS=[[0,-1,0,2],[1,0,1,3],[0,1,2,0],[-1,0,3,1]];
function carveCells(a,b,wallA,wallB){a.w[wallA]=0;b.w[wallB]=0}
function makeMazeDFS(cols,rows,start){
  const cells=freshCells(cols,rows),stack=[cells[start.y][start.x]];stack[0].v=true;
  while(stack.length){const c=stack.at(-1),opts=MDIRS.filter(d=>{const nx=c.x+d[0],ny=c.y+d[1];return nx>=0&&ny>=0&&nx<cols&&ny<rows&&!cells[ny][nx].v});if(!opts.length){stack.pop();continue}const d=pick(opts),n=cells[c.y+d[1]][c.x+d[0]];carveCells(c,n,d[2],d[3]);n.v=true;stack.push(n)}return cells
}
function makeMazePrim(cols,rows,start){
  const cells=freshCells(cols,rows),front=[];
  const add=(c)=>{MDIRS.forEach(d=>{const nx=c.x+d[0],ny=c.y+d[1];if(nx>=0&&ny>=0&&nx<cols&&ny<rows&&!cells[ny][nx].v)front.push({x:c.x,y:c.y,d})})};
  cells[start.y][start.x].v=true;add(cells[start.y][start.x]);
  while(front.length){const ix=Math.floor(Math.random()*front.length),f=front.splice(ix,1)[0],c=cells[f.y][f.x],nx=f.x+f.d[0],ny=f.y+f.d[1],n=cells[ny][nx];if(n.v)continue;carveCells(c,n,f.d[2],f.d[3]);n.v=true;add(n)}return cells
}
function mazeDistance(cells,start,goal){
  const rows=cells.length,cols=cells[0].length,q=[[start.x,start.y,0]],seen=new Set([`${start.x},${start.y}`]);
  while(q.length){const [x,y,d]=q.shift();if(x===goal.x&&y===goal.y)return d;const c=cells[y][x];for(const dir of MDIRS){if(c.w[dir[2]])continue;const nx=x+dir[0],ny=y+dir[1],k=`${nx},${ny}`;if(nx<0||ny<0||nx>=cols||ny>=rows||seen.has(k))continue;seen.add(k);q.push([nx,ny,d+1])}}return 0
}
function mazeNeighbors(cells,p){const c=cells[p.y][p.x],out=[];for(const dir of MDIRS){if(c.w[dir[2]])continue;const x=p.x+dir[0],y=p.y+dir[1];if(y>=0&&x>=0&&y<cells.length&&x<cells[0].length)out.push({x,y})}return out}
function mazeShortestPath(cells,start,goal){
  const q=[[start.x,start.y]],seen=new Set([`${start.x},${start.y}`]),prev=new Map();while(q.length){const [x,y]=q.shift();if(x===goal.x&&y===goal.y)break;for(const n of mazeNeighbors(cells,{x,y})){const k=`${n.x},${n.y}`;if(seen.has(k))continue;seen.add(k);prev.set(k,`${x},${y}`);q.push([n.x,n.y])}}
  const path=[];let key=`${goal.x},${goal.y}`;if(!seen.has(key))return path;while(key){const [x,y]=key.split(',').map(Number);path.push({x,y});key=prev.get(key)||''}return path.reverse()
}
function mazePathStats(path,cols,rows){
  let turns=0,hReversals=0,vReversals=0,sideSwitches=0,verticalSwitches=0,lastH=0,lastV=0,prevDir=null,side=path[0]?.x<cols/2?0:1,halfY=path[0]?.y<rows/2?0:1;
  for(let i=1;i<path.length;i++){const dx=path[i].x-path[i-1].x,dy=path[i].y-path[i-1].y;if(prevDir&&(dx!==prevDir.dx||dy!==prevDir.dy))turns++;if(dx){if(lastH&&dx!==lastH)hReversals++;lastH=dx}if(dy){if(lastV&&dy!==lastV)vReversals++;lastV=dy}const ns=path[i].x<cols/2?0:1;if(ns!==side){sideSwitches++;side=ns}const nh=path[i].y<rows/2?0:1;if(nh!==halfY){verticalSwitches++;halfY=nh}prevDir={dx,dy}}
  return{len:path.length,turns,hReversals,vReversals,sideSwitches,verticalSwitches}
}
function mazeTrapStats(cells,path){
  const pathSet=new Set(path.map(p=>`${p.x},${p.y}`));let branches=0,deepBranches=0,depthTotal=0,maxDepth=0,totalSize=0;
  for(const p of path){for(const n of mazeNeighbors(cells,p)){const nk=`${n.x},${n.y}`;if(pathSet.has(nk))continue;branches++;const q=[[n,1]],seen=new Set([nk]);let localDepth=1,size=0;while(q.length){const [u,d]=q.shift();size++;localDepth=Math.max(localDepth,d);for(const v of mazeNeighbors(cells,u)){const k=`${v.x},${v.y}`;if(pathSet.has(k)||seen.has(k))continue;seen.add(k);q.push([v,d+1])}}depthTotal+=localDepth;totalSize+=size;maxDepth=Math.max(maxDepth,localDepth);if(localDepth>=4)deepBranches++}}
  return{branches,deepBranches,depthTotal,maxDepth,totalSize}
}
function countDeadEnds(cells){let n=0;cells.forEach(row=>row.forEach(c=>{if(c.w.filter(v=>v===0).length===1)n++}));return n}
function edgeRow(rows,band){const centers=[.18,.5,.82],base=centers[band%3]*(rows-1),jitter=Math.max(1,Math.floor(rows*.12));return Math.max(0,Math.min(rows-1,Math.round(base+(Math.random()*2-1)*jitter)))}
function randomBoundaryEndpoint(cols,rows,avoidSide=''){let sides=['left','right','top','bottom'].filter(s=>s!==avoidSide);const side=pick(sides);if(side==='left'||side==='right')return{x:side==='left'?0:cols-1,y:Math.floor(Math.random()*rows),side};return{x:Math.floor(Math.random()*cols),y:side==='top'?0:rows-1,side}}
function randomInnerEndpoint(cols,rows){return{x:Math.max(2,Math.min(cols-3,Math.floor(cols*(.18+Math.random()*.64)))),y:Math.max(2,Math.min(rows-3,Math.floor(rows*(.16+Math.random()*.68)))),side:'inside'}}
function chooseMazeEndpoints(cols,rows){
  if(difficulty<=2){const sb=Math.floor(Math.random()*3),gb=(sb+1+Math.floor(Math.random()*2))%3;return[{x:0,y:edgeRow(rows,sb),side:'left'},{x:cols-1,y:edgeRow(rows,gb),side:'right'}]}
  const r=Math.random();if(r<.36){const a=randomInnerEndpoint(cols,rows),b=randomBoundaryEndpoint(cols,rows);return[a,b]}if(r<.72){const a=randomBoundaryEndpoint(cols,rows),b=randomInnerEndpoint(cols,rows);return[a,b]}const a=randomBoundaryEndpoint(cols,rows),b=randomBoundaryEndpoint(cols,rows,a.side);return[a,b]
}
function openMazeEndpoint(cells,p){if(p.side==='left')cells[p.y][p.x].w[3]=0;else if(p.side==='right')cells[p.y][p.x].w[1]=0;else if(p.side==='top')cells[p.y][p.x].w[0]=0;else if(p.side==='bottom')cells[p.y][p.x].w[2]=0}
function buildMaze(){
  const dims=difficulty===1?[12,8]:difficulty===2?[17,11]:difficulty===3?[28,18]:[36,22];fitMazeCanvas();const cols=dims[0],rows=dims[1],tries=difficulty===4?90:difficulty===3?50:6;let best=null,bestQualified=null;
  for(let t=0;t<tries;t++){
    const [start,goal]=chooseMazeEndpoints(cols,rows);if(start.x===goal.x&&start.y===goal.y)continue;const gen=difficulty>=3?(Math.random()<.45?makeMazePrim:makeMazeDFS):makeMazeDFS,cells=gen(cols,rows,start);openMazeEndpoint(cells,start);openMazeEndpoint(cells,goal);
    const path=mazeShortestPath(cells,start,goal);if(path.length<2)continue;const stats=mazePathStats(path,cols,rows),traps=mazeTrapStats(cells,path),dead=countDeadEnds(cells),dist=path.length-1;
    let score=dist*(difficulty===4?2.3:difficulty===3?1.8:1)+stats.turns*(difficulty===4?3.2:2)+stats.hReversals*(difficulty===4?42:28)+stats.vReversals*(difficulty===4?16:10)+stats.sideSwitches*(difficulty===4?35:22)+traps.branches*(difficulty===4?36:24)+traps.deepBranches*(difficulty===4?45:30)+Math.min(traps.depthTotal,260)*(difficulty===4?2.2:1.5)+dead*.4;
    if(difficulty===3){if(traps.branches<8)score-=260;if(traps.deepBranches<4)score-=180;if(stats.hReversals<2)score-=140;if(stats.sideSwitches<2)score-=100}
    if(difficulty===4){if(traps.branches<13)score-=500;if(traps.deepBranches<7)score-=350;if(stats.hReversals<4)score-=260;if(stats.sideSwitches<3)score-=220;if(stats.turns<22)score-=180}
    const candidate={cells,start,goal,path,stats,traps,dead,score};if(!best||score>best.score)best=candidate;const qualified=difficulty===3?(traps.branches>=8&&traps.deepBranches>=4&&stats.hReversals>=2&&stats.sideSwitches>=2):difficulty===4?(traps.branches>=13&&traps.deepBranches>=7&&stats.hReversals>=4&&stats.sideSwitches>=3&&stats.turns>=22):true;if(qualified&&(!bestQualified||score>bestQualified.score))bestQualified=candidate;
  }
  best=bestQualified||best;
  if(!best){const start={x:0,y:Math.floor(rows/2),side:'left'},goal={x:cols-1,y:Math.floor(rows/2),side:'right'},cells=makeMazeDFS(cols,rows,start);openMazeEndpoint(cells,start);openMazeEndpoint(cells,goal);const path=mazeShortestPath(cells,start,goal);best={cells,start,goal,path,stats:mazePathStats(path,cols,rows),traps:mazeTrapStats(cells,path),dead:countDeadEnds(cells)}}
  maze={cols,rows,cells:best.cells,start:best.start,goal:best.goal,path:[{...best.start}],draw:false,solved:false,dead:best.dead,stats:best.stats,traps:best.traps};const levelName=difficulty===4?'Pro':difficulty===3?'Knifflig':difficulty===2?'Mittel':'Leicht';document.getElementById('mazeStatus').textContent=difficulty>=3?`${levelName} · ${best.traps.branches} falsche Abzweige · ${best.stats.hReversals} Rückwege`:'START → ZIEL';drawMaze();document.getElementById('mazeMsg').classList.remove('show')
}
function mazeGeom(){
  const u=canvasUnit(mc),padX=Math.min(76*u,mc.width*.14),padY=18*u;
  return {padX,padY,cw:(mc.width-2*padX)/maze.cols,ch:(mc.height-2*padY)/maze.rows};
}
function positionMazeLabels(){
  if(!maze)return;const {padX,padY,cw,ch}=mazeGeom(),rect=mc.getBoundingClientRect(),stage=document.getElementById('mazeStage').getBoundingClientRect(),sx=rect.width/mc.width,sy=rect.height/mc.height;
  const place=(id,p)=>{const el=document.getElementById(id),cx=rect.left-stage.left+(padX+(p.x+.5)*cw)*sx,cy=rect.top-stage.top+(padY+(p.y+.5)*ch)*sy;let x=cx,y=cy,tr='translate(-50%,-135%)';if(p.side==='left'){x=rect.left-stage.left+5;tr='translate(0,-50%)'}else if(p.side==='right'){x=rect.right-stage.left-5;tr='translate(-100%,-50%)'}else if(p.side==='top'){y=rect.top-stage.top+4;tr='translate(-50%,0)'}else if(p.side==='bottom'){y=rect.bottom-stage.top-4;tr='translate(-50%,-100%)'}else{y=Math.max(rect.top-stage.top+32,cy-9);x=Math.max(38,Math.min(stage.width-38,cx))}el.style.left=x+'px';el.style.top=y+'px';el.style.transform=tr;el.style.display='flex'};place('mazeStartLabel',maze.start);place('mazeGoalLabel',maze.goal)
}
function drawEndpointGuide(ctx,p,pt,col,u){if(p.side==='inside')return;ctx.strokeStyle=col;ctx.lineWidth=3*u;ctx.beginPath();if(p.side==='left'){ctx.moveTo(5*u,pt.y);ctx.lineTo(pt.x,pt.y)}else if(p.side==='right'){ctx.moveTo(pt.x,pt.y);ctx.lineTo(ctx.canvas.width-5*u,pt.y)}else if(p.side==='top'){ctx.moveTo(pt.x,5*u);ctx.lineTo(pt.x,pt.y)}else if(p.side==='bottom'){ctx.moveTo(pt.x,pt.y);ctx.lineTo(pt.x,ctx.canvas.height-5*u)}ctx.stroke()}
function drawMaze(){
  if(!maze?.cells?.length)return;
  const {padX,padY,cw,ch}=mazeGeom(),u=canvasUnit(mc);
  mctx.clearRect(0,0,mc.width,mc.height);mctx.fillStyle='#fff';mctx.fillRect(0,0,mc.width,mc.height);
  mctx.lineCap='round';mctx.lineJoin='round';
  mctx.strokeStyle='#23323a';mctx.lineWidth=Math.max(1.35*u,Math.min(cw,ch)*.065);
  // Wall grid. Start/goal cells have open exterior edges from the generator.
  mctx.beginPath();maze.cells.forEach((row,y)=>row.forEach((c,x)=>{
    const L=padX+x*cw,T=padY+y*ch,R=L+cw,B=T+ch;
    if(c.w[0]){mctx.moveTo(L,T);mctx.lineTo(R,T);}
    if(c.w[1]){mctx.moveTo(R,T);mctx.lineTo(R,B);}
    if(c.w[2]){mctx.moveTo(L,B);mctx.lineTo(R,B);}
    if(c.w[3]){mctx.moveTo(L,T);mctx.lineTo(L,B);}
  }));mctx.stroke();
  const center=p=>({x:padX+(p.x+.5)*cw,y:padY+(p.y+.5)*ch});
  const start=center(maze.start),goal=center(maze.goal),current=center(maze.path.at(-1));
  drawEndpointGuide(mctx,maze.start,start,'#258550',u);drawEndpointGuide(mctx,maze.goal,goal,'#c5413d',u);
  mctx.lineWidth=Math.max(4*u,Math.min(cw,ch)*.29);mctx.strokeStyle=varColor('--blue','#4b82b0');mctx.beginPath();
  maze.path.forEach((p,i)=>{const c=center(p);if(i)mctx.lineTo(c.x,c.y);else mctx.moveTo(c.x,c.y);});mctx.stroke();
  for(const [c,col] of [[start,'#258550'],[goal,'#d4433f'],[current,'#e9ad32']]){
    const rad=Math.max(4*u,Math.min(cw,ch)*.17);mctx.fillStyle=col;mctx.beginPath();mctx.arc(c.x,c.y,rad,0,Math.PI*2);mctx.fill();
  }
  positionMazeLabels();
}
function mazeCellFromPoint(q){
  if(!maze)return null;
  const {padX,padY,cw,ch}=mazeGeom(),x=Math.floor((q.x-padX)/cw),y=Math.floor((q.y-padY)/ch);
  return x<0||y<0||x>=maze.cols||y>=maze.rows?null:{x,y};
}
function mazeCell(e){return mazeCellFromPoint(pointerCanvasGeneric(e,mc));}
function canMaze(a,b){const dx=b.x-a.x,dy=b.y-a.y;if(Math.abs(dx)+Math.abs(dy)!==1)return false;const c=maze.cells[a.y][a.x];if(dx===1)return!c.w[1];if(dx===-1)return!c.w[3];if(dy===1)return!c.w[2];return!c.w[0];}
function mazeTryCell(p){
  if(!p||!maze||maze.solved)return false;
  const last=maze.path.at(-1);if(p.x===last.x&&p.y===last.y)return true;
  const prev=maze.path.at(-2);
  if(prev&&p.x===prev.x&&p.y===prev.y){maze.path.pop();return true;}
  // Never jump to an arbitrary earlier position when the finger crosses a route.
  if(maze.path.some(c=>c.x===p.x&&c.y===p.y)||!canMaze(last,p))return false;
  maze.path.push(p);
  if(p.x===maze.goal.x&&p.y===maze.goal.y){
    maze.solved=true;maze.draw=false;msg('mazeMsg','ZIEL erreicht!',2200);
    if(!maze.rewarded){maze.rewarded=true;reward('maze');}
  }
  return true;
}
function mazeDown(e){
  if(!maze||maze.solved||e.isPrimary===false)return;
  const p=mazeCell(e),last=maze.path.at(-1);
  if(!p||p.x!==last.x||p.y!==last.y)return;
  if(e.cancelable)e.preventDefault();
  maze.draw=true;maze.pointerId=e.pointerId;maze.lastPointer=pointerCanvasGeneric(e,mc);
  try{mc.setPointerCapture(e.pointerId);}catch(error){}
}
function mazeMove(e){
  if(!maze?.draw||maze.solved||e.pointerId!==maze.pointerId)return;
  if(e.cancelable)e.preventDefault();
  const {cw,ch}=mazeGeom(),step=Math.max(2,Math.min(cw,ch)*.22);
  for(const event of pointerEventsFor(e)){
    const p=pointerCanvasGeneric(event,mc),a=maze.lastPointer||p;
    const n=Math.max(1,Math.ceil(Math.hypot(p.x-a.x,p.y-a.y)/step));
    for(let i=1;i<=n&&!maze.solved;i++){
      const cell=mazeCellFromPoint({x:a.x+(p.x-a.x)*i/n,y:a.y+(p.y-a.y)*i/n});
      if(!mazeTryCell(cell))break;
    }
    maze.lastPointer=p;
  }
  drawMaze();
}
function endMazePointer(e){
  if(!maze||e.pointerId!==maze.pointerId)return;
  if(e.type==='pointerup'&&maze.draw)mazeMove(e);
  maze.draw=false;maze.lastPointer=null;maze.pointerId=null;
}
function undoMaze(){if(maze?.path.length>1){maze.path.pop();maze.solved=false;maze.draw=false;drawMaze();}}
mc.onpointerdown=mazeDown;mc.onpointermove=mazeMove;mc.onpointerup=endMazePointer;mc.onpointercancel=endMazePointer;mc.onlostpointercapture=endMazePointer;
/* MIX */
let mixAnswer='',mixReveal=0,mixFullShown=false;
function mixPattern(){if(!mixAnswer)return'';const chars=[...mixAnswer];return chars.map((c,i)=>i<mixReveal?c:'_').join(' · ')}
function renderMixHint(){const el=document.getElementById('mixHint');if(el)el.textContent=mixPattern()}
function buildMix(){const bank=WORLDS[world].words.filter(w=>difficulty===1?w.length<=8:difficulty===2?w.length>=7&&w.length<=12:difficulty===3?w.length>=9:w.length>=10);mixAnswer=pick(bank.length?bank:WORLDS[world].words);let a;do{a=shuffled(mixAnswer.split('')).join('')}while(a===mixAnswer);mixReveal=0;mixFullShown=false;document.getElementById('mixLetters').textContent=a;document.getElementById('mixInput').value='';renderMixHint();document.getElementById('mixInput').focus()}
function revealMixLetter(){if(!mixAnswer)return;mixReveal=Math.min([...mixAnswer].length,mixReveal+1);renderMixHint();if(mixReveal===[...mixAnswer].length)toast('Das ganze Wort ist sichtbar.')}
function revealMixSolution(){mixReveal=[...mixAnswer].length;mixFullShown=true;renderMixHint();toast('Lösung eingeblendet')}
function checkMix(){if(document.getElementById('mixInput').value.trim().toUpperCase()===mixAnswer){msg('mixMsg','Richtig!',1400);reward('mix');setTimeout(buildMix,800)}else msg('mixMsg','Noch nicht.',900)}
/* LOGIC */
let logicRound=[],logicIndex=0,logicSelected=null,logicCorrect=0;
function logicQ(q,a,alts=null){const answer=String(a);let opts;if(alts)opts=[answer,...alts.map(String)];else{const n=Number(a),cand=[n,n+1,n-1,n+2,n-2,n+Math.max(3,Math.round(Math.abs(n)*.2))];opts=[...new Set(cand.map(String))].slice(0,4);while(opts.length<4)opts.push(String(n+opts.length+4))}return{q,answer,opts:shuffled([...new Set(opts)]).slice(0,4)}}
function logicLetterQ(q,a){const c=a.charCodeAt(0),alts=[String.fromCharCode(c-1),String.fromCharCode(c+1),String.fromCharCode(c+2)];return logicQ(q,a,alts)}
function makeSequence(level){
  const pools={
    1:['step','double','alt','minus'],
    2:['growdiff','squares','interleave','alt','triangular','timesplus'],
    3:['second','fib','altmul','letters','cubes','interleave2','squareplus'],
    4:['primegap','factor','recursive','matrix','interleave3','powers','alternating','quadratic']
  },type=pick(pools[level]||pools[4]);
  if(type==='step'){const a=2+Math.floor(Math.random()*8),d=2+Math.floor(Math.random()*6),s=Array.from({length:6},(_,i)=>a+i*d);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='double'){const a=1+Math.floor(Math.random()*5),m=pick([2,3]),s=Array.from({length:6},(_,i)=>a*m**i);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='minus'){const d=2+Math.floor(Math.random()*5),a=35+Math.floor(Math.random()*30),s=Array.from({length:6},(_,i)=>a-i*d);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='alt'){const a=3+Math.floor(Math.random()*7),add=1+Math.floor(Math.random()*4),mul=2,s=[a];for(let i=0;i<5;i++)s.push(i%2===0?s.at(-1)+add:s.at(-1)*mul);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='growdiff'){const a=2+Math.floor(Math.random()*6),s=[a];let d=1+Math.floor(Math.random()*3);for(let i=0;i<5;i++){s.push(s.at(-1)+d);d+=1+Math.floor(i/2)}return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='squares'){const k=Math.floor(Math.random()*4),s=Array.from({length:6},(_,i)=>(i+1)**2+k);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='triangular'){const k=Math.floor(Math.random()*4),s=Array.from({length:6},(_,i)=>((i+1)*(i+2))/2+k);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='timesplus'){const a=2+Math.floor(Math.random()*4),add=1+Math.floor(Math.random()*3),s=[a];for(let i=0;i<5;i++)s.push(s.at(-1)*2+add);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='interleave'){const a=1+Math.floor(Math.random()*4),b=8+Math.floor(Math.random()*6),s=[a,b,a+2,b+4,a+4,b+8,a+6];return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  if(type==='second'){const a=2+Math.floor(Math.random()*4),s=[a];let d=2;for(let i=0;i<6;i++){s.push(s.at(-1)+d);d+=2}return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  if(type==='fib'){const a=1+Math.floor(Math.random()*3),b=a+1+Math.floor(Math.random()*3),s=[a,b];while(s.length<7)s.push(s.at(-1)+s.at(-2));return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  if(type==='altmul'){const a=2+Math.floor(Math.random()*3),add=1+Math.floor(Math.random()*2),s=[a];for(let i=0;i<6;i++)s.push(i%2===0?s.at(-1)+add:s.at(-1)*2);return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  if(type==='letters'){const starts=['A','B','C','D'],st=pick(starts).charCodeAt(0),jumps=[2,3,4,5,6],s=[st];jumps.forEach(j=>s.push(s.at(-1)+j));return logicLetterQ(s.slice(0,5).map(x=>String.fromCharCode(x)).join(' · ')+' · ?',String.fromCharCode(s[5]))}
  if(type==='cubes'){const k=Math.floor(Math.random()*3),s=Array.from({length:6},(_,i)=>(i+1)**3+k);return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='interleave2'){const a=2+Math.floor(Math.random()*4),b=20+Math.floor(Math.random()*10),s=[a,b,a+3,b-3,a+6,b-6,a+9];return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  if(type==='squareplus'){const k=2+Math.floor(Math.random()*5),s=Array.from({length:6},(_,i)=>(i+1)**2+k*(i+1));return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='primegap'){const base=pick([[5,7,11,13,17,19,23],[11,13,17,19,23,29,31],[17,19,23,29,31,37,41]]);return logicQ(base.slice(0,6).join(' · ')+' · ?',base[6])}
  if(type==='factor'){const m=pick([1,2,3]),s=[1*m,2*m,6*m,24*m,120*m,720*m];return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='recursive'){const a=2+Math.floor(Math.random()*4),s=[a];for(let i=0;i<5;i++)s.push(s.at(-1)*2+(i+1));return logicQ(s.slice(0,5).join(' · ')+' · ?',s[5])}
  if(type==='matrix'){const a=2+Math.floor(Math.random()*4),m=pick([2,3]);return logicQ(`Matrix: Welche Zahl fehlt?\n${a}  ${a*m}  ${a*m*m}\n${a+1}  ${(a+1)*m}  ${(a+1)*m*m}\n${a+2}  ${(a+2)*m}  ?`,(a+2)*m*m)}
  if(type==='interleave3'){const a=2+Math.floor(Math.random()*3),b=3+Math.floor(Math.random()*3),s=[a,b,a*2,b*3,a*4,b*9,a*8];return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  if(type==='powers'){const base=pick([2,3]),s=Array.from({length:7},(_,i)=>base**(i+1));return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  if(type==='alternating'){const a=8+Math.floor(Math.random()*5),s=[a,a+5,(a+5)-2,(a+3)+5,(a+8)-2,(a+6)+5,(a+11)-2];return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])}
  const k=1+Math.floor(Math.random()*3),s=Array.from({length:7},(_,i)=>(i+1)**2+(i+1)*k);return logicQ(s.slice(0,6).join(' · ')+' · ?',s[6])
}
function buildLogicRound(){const target=[0,7,8,10,12][difficulty],seen=new Set();logicRound=[];let tries=0;while(logicRound.length<target&&tries<100){tries++;const q=makeSequence(difficulty);if(!q||!q.q||!q.opts?.includes(String(q.answer))||seen.has(q.q))continue;seen.add(q.q);logicRound.push(q)}while(logicRound.length<target)logicRound.push(makeSequence(difficulty));logicIndex=0;logicCorrect=0;showLogic()}
function showLogic(){logicSelected=null;if(logicIndex>=logicRound.length){document.getElementById('logicQuestion').textContent=`Runde geschafft: ${logicCorrect} von ${logicRound.length} richtig`;document.getElementById('logicOptions').innerHTML='';document.getElementById('logicStatus').textContent='Runde beendet';if(logicCorrect>=Math.ceil(logicRound.length*.7))reward('logic');return}const q=logicRound[logicIndex];document.getElementById('logicQuestion').textContent=q.q;document.getElementById('logicStatus').textContent=`Aufgabe ${logicIndex+1} von ${logicRound.length}`;const o=document.getElementById('logicOptions');o.innerHTML='';shuffled(q.opts).forEach(v=>{const b=document.createElement('button');b.className='opt';b.textContent=v;b.onclick=()=>{logicSelected=v;[...o.children].forEach(x=>x.classList.toggle('selected',x===b))};o.appendChild(b)})}
function checkLogic(){if(logicSelected===null)return msg('logicMsg','Bitte Antwort wählen.',800);const q=logicRound[logicIndex];if(String(logicSelected)===String(q.answer)){logicCorrect++;msg('logicMsg','Richtig – nächste Aufgabe!',650);logicIndex++;setTimeout(showLogic,380)}else msg('logicMsg','Noch nicht. Regel nochmals prüfen.',1000)}
/* MEMORY */
const MEM_ICONS=['🙂','😎','🦊','🐼','🤖','🦖','🏴‍☠️','🧙‍♂️','🐯','🦄','🐙','🚀'];
let memoryPlayerCount=Math.max(1,Math.min(4,+(localStorage.getItem('rw55_mem_players')||1)));
let memoryIcons=JSON.parse(localStorage.getItem('rw55_mem_icons')||'["🙂","🦊","🐼","🤖"]');
while(memoryIcons.length<4)memoryIcons.push(MEM_ICONS[memoryIcons.length%MEM_ICONS.length]);
let mem=null;
function saveMemoryPrefs(){localStorage.setItem('rw55_mem_players',memoryPlayerCount);localStorage.setItem('rw55_mem_icons',JSON.stringify(memoryIcons))}
function setMemoryPlayers(n){memoryPlayerCount=Math.max(1,Math.min(4,n));saveMemoryPrefs();buildMemory()}
function cycleMemoryIcon(i){const cur=MEM_ICONS.indexOf(memoryIcons[i]);memoryIcons[i]=MEM_ICONS[(cur+1+MEM_ICONS.length)%MEM_ICONS.length];saveMemoryPrefs();if(mem?.players?.[i])mem.players[i].icon=memoryIcons[i];renderMemoryToolbar();updateMem()}
function renderMemoryToolbar(){
  const modes=document.getElementById('memModes'),players=document.getElementById('memPlayers');if(!modes||!players)return;
  modes.innerHTML='';[1,2,3,4].forEach(n=>{const b=document.createElement('button');b.className='mem-mode'+(n===memoryPlayerCount?' on':'');b.textContent=n===1?'Solo':`${n} Spieler`;b.onclick=()=>setMemoryPlayers(n);modes.appendChild(b)});
  players.innerHTML='';for(let i=0;i<memoryPlayerCount;i++){const p=mem?.players?.[i]||{icon:memoryIcons[i],score:0};const b=document.createElement('button');b.className='mem-player'+(mem&&i===mem.turn?' active':'');b.innerHTML=`<span>${p.icon}</span><b>${p.score}</b>`;b.title=`Spieler ${i+1}: Icon wechseln`;b.onclick=()=>cycleMemoryIcon(i);players.appendChild(b)}
}
function buildMemory(){
  const pairs=difficulty===1?8:difficulty===2?10:difficulty===3?12:15,symbols=pickN(WORLDS[world].memory,pairs),cards=shuffled([...symbols,...symbols]).map((s,i)=>({s,i,open:false,done:false}));
  const players=Array.from({length:memoryPlayerCount},(_,i)=>({icon:memoryIcons[i],score:0}));
  mem={cards,first:null,lock:false,pairs,total:pairs,players,turn:0,moves:0,finished:false};
  const b=document.getElementById('memoryBoard'),cols=pairs<=8?4:pairs<=10?5:pairs<=12?6:6,rows=Math.ceil(cards.length/cols);b.style.gridTemplateColumns=`repeat(${cols},1fr)`;b.style.gridTemplateRows=`repeat(${rows},1fr)`;b.innerHTML='';
  cards.forEach((c,i)=>{const x=document.createElement('button');x.className='mem';x.innerHTML=`<span class="face front"></span><span class="face backf">${c.s}</span>`;x.onclick=()=>flipMem(i);b.appendChild(x)});renderMemoryToolbar();updateMem()
}
function updateMem(){
  if(!mem)return;const found=mem.cards.filter(c=>c.done).length/2,status=document.getElementById('memoryStatus');
  if(memoryPlayerCount===1)status.textContent=`${found}/${mem.total} Paare`;
  else status.textContent=`${mem.players[mem.turn].icon} ist dran · ${found}/${mem.total}`;
  [...document.querySelectorAll('.mem')].forEach((e,i)=>e.classList.toggle('flip',mem.cards[i].open||mem.cards[i].done));renderMemoryToolbar()
}
function finishMemory(){
  mem.finished=true;const best=Math.max(...mem.players.map(p=>p.score)),winners=mem.players.map((p,i)=>({p,i})).filter(x=>x.p.score===best);
  document.querySelectorAll('.mem-player').forEach((el,i)=>el.classList.toggle('winner',winners.some(w=>w.i===i)));
  if(memoryPlayerCount===1)msg('memoryMsg','Alle Paare gefunden!',1900);else{const names=winners.map(w=>w.p.icon).join(' & ');msg('memoryMsg',`${names} gewinnt mit ${best} Paar${best===1?'':'en'}!`,2600)}
  reward('memory')
}
function flipMem(i){
  if(!mem||mem.finished||mem.lock||mem.cards[i].done||mem.first===i)return;mem.cards[i].open=true;updateMem();if(mem.first===null){mem.first=i;return}
  const a=mem.cards[mem.first],b=mem.cards[i];mem.lock=true;mem.moves++;
  if(a.s===b.s){a.done=b.done=true;mem.players[mem.turn].score++;mem.first=null;mem.lock=false;updateMem();if(mem.cards.every(c=>c.done))finishMemory()}
  else setTimeout(()=>{a.open=b.open=false;mem.first=null;mem.lock=false;if(memoryPlayerCount>1)mem.turn=(mem.turn+1)%memoryPlayerCount;updateMem()},650)
}
/* SUDOKU */
const BASE17='000000010400000000020000000000050407008000300001090000300400200050100000000806000';let sudoku=null,sDisplay=localStorage.getItem('rw5_sdisp')||'numbers',noteMode=false,sUndo=[];
function solveSudokuGrid(grid){const find=()=>{let best=null,bestC=null;for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(!grid[r][c]){const used=new Set(grid[r]);for(let rr=0;rr<9;rr++)used.add(grid[rr][c]);const br=Math.floor(r/3)*3,bc=Math.floor(c/3)*3;for(let y=0;y<3;y++)for(let x=0;x<3;x++)used.add(grid[br+y][bc+x]);const cand=[];for(let v=1;v<=9;v++)if(!used.has(v))cand.push(v);if(!cand.length)return[-1,-1,[]];if(!best||cand.length<bestC.length){best=[r,c];bestC=cand}}return best?[...best,bestC]:null};const f=find();if(!f)return true;if(f[0]<0)return false;const[r,c,cand]=f;for(const v of cand){grid[r][c]=v;if(solveSudokuGrid(grid))return true;grid[r][c]=0}return false}
function transformSudoku(base){const grid=Array.from({length:9},(_,r)=>base.slice(r*9,r*9+9).split('').map(Number)),sol=grid.map(r=>[...r]);solveSudokuGrid(sol);const digitMap=shuffled([1,2,3,4,5,6,7,8,9]);const rp=shuffled([0,1,2]).flatMap(b=>shuffled([0,1,2]).map(r=>b*3+r)),cp=shuffled([0,1,2]).flatMap(b=>shuffled([0,1,2]).map(c=>b*3+c));const tr=g=>rp.map(r=>cp.map(c=>g[r][c]?digitMap[g[r][c]-1]:0));return{puzzle:tr(grid),solution:tr(sol)}}
function newSudoku(force){const key=`rw5_sudoku_${world}_${difficulty}`,saved=!force&&JSON.parse(localStorage.getItem(key)||'null');if(saved){sudoku=saved;sudoku.notes=sudoku.notes.map(r=>r.map(a=>new Set(a)));sUndo=[];renderSudoku();return}const t=transformSudoku(BASE17),target=[0,45,36,28,17][difficulty],cells=shuffled([...Array(81).keys()].filter(i=>!t.puzzle[Math.floor(i/9)][i%9]));let clues=t.puzzle.flat().filter(Boolean).length;for(const i of cells){if(clues>=target)break;const r=Math.floor(i/9),c=i%9;t.puzzle[r][c]=t.solution[r][c];clues++}sudoku={entries:t.puzzle.map(r=>[...r]),givens:t.puzzle.map(r=>r.map(Boolean)),solution:t.solution,notes:Array.from({length:9},()=>Array.from({length:9},()=>new Set())),active:null};sUndo=[];saveSudoku();renderSudoku()}
function saveSudoku(){const key=`rw5_sudoku_${world}_${difficulty}`;const s={...sudoku,notes:sudoku.notes.map(r=>r.map(x=>[...x]))};localStorage.setItem(key,JSON.stringify(s))}function snapSudoku(){sUndo.push({entries:sudoku.entries.map(r=>[...r]),notes:sudoku.notes.map(r=>r.map(s=>new Set(s)))});if(sUndo.length>60)sUndo.shift()}function setSudokuDisplay(m){sDisplay=m;localStorage.setItem('rw5_sdisp',m);renderSudoku()}function toggleNotes(){noteMode=!noteMode;renderSudoku()}function sudokuSym(v){return sDisplay==='numbers'?String(v):WORLDS[world].symbols[v-1]}
function peersOf(r,c){const a=[];for(let i=0;i<9;i++){a.push([r,i],[i,c])}const br=Math.floor(r/3)*3,bc=Math.floor(c/3)*3;for(let y=0;y<3;y++)for(let x=0;x<3;x++)a.push([br+y,bc+x]);return a}
function sudokuConf(){const bad=new Set();const mark=cells=>{const seen={};cells.forEach(([r,c])=>{const v=sudoku.entries[r][c];if(!v)return;if(seen[v]){bad.add(`${r},${c}`);bad.add(seen[v])}else seen[v]=`${r},${c}`})};for(let r=0;r<9;r++)mark([...Array(9).keys()].map(c=>[r,c]));for(let c=0;c<9;c++)mark([...Array(9).keys()].map(r=>[r,c]));for(let br=0;br<9;br+=3)for(let bc=0;bc<9;bc+=3){const x=[];for(let y=0;y<3;y++)for(let c=0;c<3;c++)x.push([br+y,bc+c]);mark(x)}return bad}
function renderSudoku(){const b=document.getElementById('sudokuBoard');b.innerHTML='';const bad=sudokuConf(),a=sudoku.active;for(let r=0;r<9;r++)for(let c=0;c<9;c++){const d=document.createElement('div'),v=sudoku.entries[r][c],fixed=sudoku.givens[r][c];d.className='scell'+(fixed?' fixed':'')+(!fixed&&v?' user':'')+(a&&a.r===r&&a.c===c?' active':'')+(bad.has(`${r},${c}`)?' conflict':'');if(a&&!(a.r===r&&a.c===c)&&(r===a.r||c===a.c||Math.floor(r/3)===Math.floor(a.r/3)&&Math.floor(c/3)===Math.floor(a.c/3)))d.classList.add('peer');if(a&&sudoku.entries[a.r][a.c]&&v===sudoku.entries[a.r][a.c])d.classList.add('same');d.onclick=()=>{sudoku.active={r,c};renderSudoku()};if(v)d.textContent=sudokuSym(v);else if(sudoku.notes[r][c].size){const n=document.createElement('div');n.className='notes';for(let i=1;i<=9;i++){const s=document.createElement('span');s.textContent=sudoku.notes[r][c].has(i)?sudokuSym(i):'';n.appendChild(s)}d.appendChild(n)}b.appendChild(d)}const np=document.getElementById('numpad');np.innerHTML='';for(let i=1;i<=9;i++){const k=document.createElement('button');k.className='nkey';k.textContent=sudokuSym(i);k.onclick=()=>inputSudoku(i);np.appendChild(k)}document.getElementById('noteBtn').classList.toggle('on',noteMode);document.getElementById('modeNum').classList.toggle('on',sDisplay==='numbers');document.getElementById('modeSym').classList.toggle('on',sDisplay==='symbols');document.getElementById('sudokuStatus').textContent=`${difficultyName()} · ${noteMode?'Notizen':'Zahl'}`}
function inputSudoku(v){if(!sudoku.active)return msg('sudokuMsg','Zuerst Feld wählen.',800);const{r,c}=sudoku.active;if(sudoku.givens[r][c])return;snapSudoku();if(noteMode){if(sudoku.entries[r][c])sudoku.entries[r][c]=0;const s=sudoku.notes[r][c];s.has(v)?s.delete(v):s.add(v)}else{sudoku.entries[r][c]=v;sudoku.notes[r][c].clear();peersOf(r,c).forEach(([rr,cc])=>sudoku.notes[rr][cc].delete(v))}saveSudoku();renderSudoku()}
function eraseSudoku(){if(!sudoku.active)return;const{r,c}=sudoku.active;if(sudoku.givens[r][c])return;snapSudoku();sudoku.entries[r][c]=0;sudoku.notes[r][c].clear();saveSudoku();renderSudoku()}function undoSudoku(){const s=sUndo.pop();if(!s)return;sudoku.entries=s.entries;sudoku.notes=s.notes;saveSudoku();renderSudoku()}function checkSudoku(){if(sudokuConf().size)return msg('sudokuMsg','Konflikt vorhanden.',1200);if(sudoku.entries.some(r=>r.some(v=>!v)))return msg('sudokuMsg','Noch nicht fertig.',900);for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(sudoku.entries[r][c]!==sudoku.solution[r][c])return msg('sudokuMsg','Noch nicht korrekt.',1000);msg('sudokuMsg','Sudoku gelöst!',1800);reward('sudoku')}
/* DOTS */
const dc=document.getElementById('dotsCanvas'),dctx=dc.getContext('2d');let dots=null;function resampleStroke(points,count){
  const lens=[];let sum=0;
  for(let i=0;i<points.length-1;i++){const d=Math.hypot(points[i+1][0]-points[i][0],points[i+1][1]-points[i][1]);lens.push(d);sum+=d}
  const arr=[];
  for(let j=0;j<count;j++){
    const target=sum*(count===1?0:j/(count-1));let acc=0,cand=null;
    for(let i=0;i<lens.length;i++){if(acc+lens[i]>=target){const t=lens[i]?((target-acc)/lens[i]):0,a=points[i],b=points[i+1];cand={x:a[0]+(b[0]-a[0])*t,y:a[1]+(b[1]-a[1])*t};break}acc+=lens[i]}
    if(cand)arr.push(cand)
  }
  return arr
}
function pathSample(strokes,total){
  const pts=[],strokeSamples=strokes.map(st=>resampleStroke(st.p,Math.max(4,Math.round(total*st.weight))));
  const curs=strokeSamples.map(()=>0); let cycle=0;
  const chunk=difficulty===1?4:difficulty===2?3:difficulty===3?2:2;
  while(curs.some((n,i)=>n<strokeSamples[i].length)){
    const order=strokeSamples.map((_,i)=>i).sort((a,b)=>((a+cycle)%strokeSamples.length)-((b+cycle)%strokeSamples.length));
    for(const si of order){
      for(let take=0; take<chunk && curs[si]<strokeSamples[si].length; take++){
        const p=strokeSamples[si][curs[si]++];
        if(pts.every(q=>Math.hypot(q.x-p.x,q.y-p.y)>1.7)) pts.push({...p,stroke:si});
      }
    }
    cycle++;
  }
  const last={};pts.forEach((p,i)=>{p.prevGlobal=last[p.stroke]??null;last[p.stroke]=i;});
  return pts.slice(0,total);
}
const DOT_COMPLEX=[
  [ // cat face
    {weight:.42,p:[[7,58],[12,46],[18,30],[24,14],[31,28],[42,20],[50,18],[58,20],[69,28],[76,14],[82,30],[88,46],[93,58],[88,70],[79,82],[67,88],[55,90],[45,90],[33,88],[21,82],[12,70],[7,58]]},
    {weight:.08,p:[[43,48],[46,45],[49,47],[46,50],[43,48]]},
    {weight:.08,p:[[57,48],[60,45],[63,47],[60,50],[57,48]]},
    {weight:.10,p:[[50,56],[46,61],[50,65],[54,61],[50,56],[50,70]]},
    {weight:.16,p:[[24,58],[35,57],[46,59],[24,64],[36,63],[46,65]]},
    {weight:.16,p:[[54,59],[65,57],[76,58],[54,65],[64,63],[76,64]]}
  ],
  [ // rocket
    {weight:.40,p:[[50,7],[60,18],[66,32],[68,48],[63,62],[56,74],[50,90],[44,74],[37,62],[32,48],[34,32],[40,18],[50,7]]},
    {weight:.12,p:[[40,60],[24,72],[38,66],[44,56]]},
    {weight:.12,p:[[60,60],[76,72],[62,66],[56,56]]},
    {weight:.10,p:[[50,34],[56,40],[50,47],[44,40],[50,34]]},
    {weight:.13,p:[[46,75],[42,84],[38,92],[50,86],[62,92],[58,84],[54,75]]},
    {weight:.13,p:[[28,24],[20,18],[16,28],[24,34],[28,24],[72,24],[80,18],[84,28],[76,34],[72,24]]}
  ],
  [ // turtle
    {weight:.42,p:[[18,60],[22,44],[36,28],[54,24],[70,30],[82,45],[84,60],[80,74],[68,84],[50,88],[34,84],[22,74],[18,60]]},
    {weight:.10,p:[[16,56],[7,50],[10,60],[16,64],[16,56]]},
    {weight:.10,p:[[84,56],[93,50],[90,60],[84,64],[84,56]]},
    {weight:.08,p:[[32,82],[28,92],[38,88],[32,82]]},
    {weight:.08,p:[[66,82],[62,92],[72,88],[66,82]]},
    {weight:.22,p:[[34,44],[50,34],[66,44],[58,60],[42,60],[34,44],[50,52],[58,68],[42,68],[50,52]]}
  ],
  [ // owl
    {weight:.42,p:[[22,74],[20,54],[28,34],[42,18],[58,18],[72,34],[80,54],[78,74],[66,88],[50,92],[34,88],[22,74]]},
    {weight:.10,p:[[36,44],[42,38],[48,44],[42,50],[36,44]]},
    {weight:.10,p:[[52,44],[58,38],[64,44],[58,50],[52,44]]},
    {weight:.08,p:[[50,48],[46,56],[54,56],[50,48]]},
    {weight:.14,p:[[24,62],[12,54],[22,70],[24,62],[76,62],[88,54],[78,70],[76,62]]},
    {weight:.16,p:[[40,80],[36,90],[44,84],[50,90],[56,84],[64,90],[60,80]]}
  ],
  [ // amphora
    {weight:.46,p:[[32,12],[24,20],[22,30],[28,40],[34,46],[34,72],[28,84],[32,92],[68,92],[72,84],[66,72],[66,46],[72,40],[78,30],[76,20],[68,12],[32,12]]},
    {weight:.12,p:[[34,24],[24,24],[18,34],[24,44],[34,44]]},
    {weight:.12,p:[[66,24],[76,24],[82,34],[76,44],[66,44]]},
    {weight:.14,p:[[38,52],[62,52],[56,60],[44,60],[38,52]]},
    {weight:.16,p:[[42,68],[58,68],[54,78],[46,78],[42,68],[50,86],[58,78]]}
  ],
  [ // dolphin
    {weight:.50,p:[[10,58],[20,48],[34,40],[48,32],[62,24],[76,22],[88,28],[79,40],[66,48],[60,56],[66,66],[62,76],[48,72],[36,64],[26,60],[20,68],[14,70],[20,58],[10,58]]},
    {weight:.14,p:[[52,40],[57,44],[53,48],[48,44],[52,40]]},
    {weight:.18,p:[[66,48],[78,58],[88,54],[80,46],[66,48]]},
    {weight:.18,p:[[24,60],[18,74],[12,82],[24,76],[34,66]]}
  ],
  [ // lighthouse
    {weight:.38,p:[[42,92],[40,78],[36,58],[38,30],[50,12],[62,30],[64,58],[60,78],[58,92],[42,92]]},
    {weight:.12,p:[[38,30],[62,30],[56,22],[44,22],[38,30]]},
    {weight:.10,p:[[44,48],[56,48],[56,56],[44,56],[44,48]]},
    {weight:.10,p:[[44,66],[56,66],[56,74],[44,74],[44,66]]},
    {weight:.15,p:[[18,34],[32,40],[18,48],[10,56]]},
    {weight:.15,p:[[82,34],[68,40],[82,48],[90,56]]}
  ],
  [ // snake spiral
    {weight:.68,p:[[12,70],[18,54],[30,40],[46,34],[62,34],[76,40],[84,52],[82,64],[72,72],[58,76],[44,76],[34,72],[28,64],[30,56],[40,50],[54,50],[64,54],[66,60],[60,64],[50,66],[42,64],[40,58],[46,56],[54,58],[56,62],[52,64],[48,64],[72,70],[84,74],[90,82]]},
    {weight:.10,p:[[86,78],[92,74],[96,78],[92,82],[86,78]]},
    {weight:.10,p:[[77,47],[82,50],[78,54],[73,51],[77,47]]},
    {weight:.12,p:[[24,42],[16,32],[10,22],[14,16],[24,22]]}
  ],
  [ // greek helmet
    {weight:.48,p:[[22,76],[22,46],[34,24],[54,16],[74,24],[82,42],[78,60],[66,74],[52,82],[38,82],[22,76]]},
    {weight:.14,p:[[54,16],[54,6],[60,10],[54,16],[48,10],[54,6]]},
    {weight:.10,p:[[34,44],[44,40],[52,42],[44,48],[34,44]]},
    {weight:.14,p:[[56,46],[74,48],[78,56],[66,60],[56,58],[56,46]]},
    {weight:.14,p:[[34,74],[28,88],[40,84],[48,88],[56,82],[64,86],[70,78]]}
  ],
  [ // parrot on branch
    {weight:.42,p:[[28,86],[20,72],[18,56],[24,40],[34,28],[46,22],[58,26],[66,38],[68,52],[64,66],[54,76],[42,82],[28,86]]},
    {weight:.10,p:[[58,26],[72,20],[82,28],[70,34],[58,26]]},
    {weight:.08,p:[[38,44],[42,40],[46,44],[42,48],[38,44]]},
    {weight:.12,p:[[46,54],[56,50],[50,60],[42,62],[46,54]]},
    {weight:.12,p:[[20,72],[12,86],[30,92],[20,72]]},
    {weight:.16,p:[[8,88],[26,88],[46,90],[64,90],[84,88]]}
  ]
];
function motif(seed){return DOT_COMPLEX[seed%DOT_COMPLEX.length]}
const DOT_NAMES={
 jungle:['Papagei','Tiger','Frosch','Kompass','Panda','Tukan','Blüte','Tempelpfad','Schlange','Expedition'],
 space:['Rakete','Sternjäger','Mondrover','Satellit','Alien','Komet','Galaxie','Raumhelm','UFO','Marsbasis'],
 sea:['Delfin','Seepferd','Fischschwarm','Anker','Krake','Segler','Seestern','Schildkröte','Leuchtturm','Korallenriff'],
 greek:['Tempel','Amphore','Eule','Sonne','Minotaurus','Lyra','Dreizack','Lorbeer','Helm','Knossos'],
 dino:['T-Rex','Triceratops','Pteranodon','Dino-Ei','Stegosaurus','Raptor','Fossil','Vulkan','Saurierkopf','Langhals'],
 pirate:['Piratenschiff','Totenkopf','Schatzkarte','Papagei','Anker','Kanone','Schatztruhe','Piratenhut','Schatzinsel','Kompass'],
 egypt:['Pyramide','Sphinx','Skarabäus','Pharao','Ankh','Kamel','Tempel','Horus','Obelisk','Mumie'],
 castle:['Burg','Ritterhelm','Drache','Schild','Schwert','Katapult','Krone','Burgturm','Zugbrücke','Ritter']
};

function buildDots(){
  clearCanvasFailure('dots');fitCanvas(dc,'dotsStage',0);
  const idx=Math.floor(Math.random()*DOT_COMPLEX.length),counts=[0,52,70,92,118];
  const pts=pathSample(motif(idx),counts[difficulty]||70);
  if(!pts.length||pts.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y)))throw new Error('DOT_DATA_INVALID');
  const names=DOT_NAMES[world]||DOT_NAMES.jungle,name=names[idx]||('Punktebild '+(idx+1));
  dots={pts,next:0,name,world,level:difficulty,draw:false,lastPointer:null,pointerId:null,labels:[],rewarded:false};
  document.getElementById('dotsMsg').classList.remove('show');computeDotLabels();drawDots();
}
function dotScale(p){
  const u=canvasUnit(dc),mx=28*u,my=28*u;
  return{x:mx+p.x/100*(dc.width-2*mx),y:my+p.y/100*(dc.height-2*my)};
}
function computeDotLabels(){
  if(!dots?.pts?.length)return;
  const u=canvasUnit(dc),W=dc.width/u,H=dc.height/u,font=dots.pts.length>88?16:18;
  const points=dots.pts.map(p=>{const q=dotScale(p);return {x:q.x/u,y:q.y/u};});
  const boxes=[];dctx.font='800 '+font*u+'px system-ui';
  dots.font=font;dots.labels=[];
  // Label metrics are CSS pixels, independent of pixel density on the tablet.
  for(let i=0;i<points.length;i++){
    const p=points[i],w=dctx.measureText(String(i+1)).width/u+4,h=font+3;
    let best=null,bestScore=Infinity;
    for(const radius of [15,21,28,36,46,58]){
      for(let k=0;k<16;k++){
        const angle=-Math.PI/2+k*Math.PI/8,cx=p.x+Math.cos(angle)*radius,cy=p.y+Math.sin(angle)*radius;
        const box={x:cx-w/2,y:cy-h/2,w,h};
        if(box.x<3||box.y<3||box.x+w>W-3||box.y+h>H-3)continue;
        let overlap=0;
        for(const b of boxes){const ox=Math.min(box.x+w,b.x+b.w)-Math.max(box.x,b.x)+2,oy=Math.min(box.y+h,b.y+b.h)-Math.max(box.y,b.y)+2;if(ox>0&&oy>0)overlap+=ox*oy;}
        let dotHits=0;for(const q of points)if(q.x>box.x-5&&q.x<box.x+w+5&&q.y>box.y-5&&q.y<box.y+h+5)dotHits++;
        const score=overlap*200+dotHits*900+radius+(k===0?0:2);
        if(score<bestScore){bestScore=score;best={dx:cx-p.x,dy:cy-p.y,box,leader:radius>28};}
      }
      if(bestScore<100)break;
    }
    if(!best)best={dx:0,dy:-16,box:{x:p.x-w/2,y:p.y-24,w,h},leader:false};
    boxes.push(best.box);dots.labels.push(best);
  }
}
function drawDots(){
  if(!dots?.pts?.length)return;
  const u=canvasUnit(dc),accent=varColor('--accent','#2f8a66');
  dctx.clearRect(0,0,dc.width,dc.height);dctx.fillStyle='#fff';dctx.fillRect(0,0,dc.width,dc.height);
  dctx.lineCap='round';dctx.lineJoin='round';dctx.lineWidth=2.5*u;dctx.strokeStyle=varColor('--blue','#4b82b0');dctx.beginPath();
  for(let i=0;i<dots.next;i++){
    const b=dots.pts[i];if(b.prevGlobal===null||b.prevGlobal>=dots.next)continue;
    const a=dots.pts[b.prevGlobal];if(!a)continue;
    const A=dotScale(a),B=dotScale(b);dctx.moveTo(A.x,A.y);dctx.lineTo(B.x,B.y);
  }dctx.stroke();
  for(let i=0;i<dots.pts.length;i++){
    const p=dotScale(dots.pts[i]),done=i<dots.next,L=dots.labels[i]||{dx:0,dy:-16};
    const lx=p.x+L.dx*u,ly=p.y+L.dy*u;
    if(L.leader&&!done){dctx.strokeStyle='#b9c0c4';dctx.lineWidth=.6*u;dctx.beginPath();dctx.moveTo(p.x,p.y);dctx.lineTo(lx,ly);dctx.stroke();}
    dctx.fillStyle=done?accent:'#14232b';dctx.beginPath();dctx.arc(p.x,p.y,3.5*u,0,Math.PI*2);dctx.fill();
    dctx.font='800 '+dots.font*u+'px system-ui';dctx.textAlign='center';dctx.textBaseline='middle';
    dctx.strokeStyle='#fff';dctx.lineWidth=3*u;dctx.strokeText(String(i+1),lx,ly);
    dctx.fillStyle=done?accent:'#14232b';dctx.fillText(String(i+1),lx,ly);
    if(i===dots.next&&dots.level<=2){dctx.strokeStyle='#dfaa2e';dctx.lineWidth=2*u;dctx.beginPath();dctx.arc(p.x,p.y,10*u,0,Math.PI*2);dctx.stroke();}
  }
  document.getElementById('dotsStatus').textContent=dots.next>=dots.pts.length?'Bild fertig':('Punkt '+(dots.next+1)+' / '+dots.pts.length);
}
function pointerCanvasGeneric(e,canvas){
  const r=canvas.getBoundingClientRect();
  return {x:(e.clientX-r.left)*canvas.width/Math.max(1,r.width),y:(e.clientY-r.top)*canvas.height/Math.max(1,r.height)};
}
function pointerCanvas(e){return pointerCanvasGeneric(e,dc);}
function distSeg(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,len=dx*dx+dy*dy,t=len?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/len)):0;return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy);}
function acceptDot(){
  if(!dots||dots.next>=dots.pts.length)return;
  dots.next++;
  if(dots.next===dots.pts.length){
    dots.draw=false;msg('dotsMsg','Bild fertig!',2000);
    if(!dots.rewarded){dots.rewarded=true;reward('dots');}
  }
}
function hitNextAlong(a,b,single=false){
  if(!dots||dots.next>=dots.pts.length)return;
  const u=canvasUnit(dc),radius=17*u,dx=b.x-a.x,dy=b.y-a.y,len2=dx*dx+dy*dy;
  if(single){const p=dotScale(dots.pts[dots.next]);if(Math.hypot(p.x-b.x,p.y-b.y)<=radius)acceptDot();return;}
  if(len2<.25*u*u)return;
  let consumed=-.0001;
  // Process only targets met in forward order along this sampled movement.
  while(dots.next<dots.pts.length){
    const p=dotScale(dots.pts[dots.next]),raw=((p.x-a.x)*dx+(p.y-a.y)*dy)/len2,t=Math.max(0,Math.min(1,raw));
    if(t<consumed||distSeg(p,a,b)>radius)break;
    acceptDot();consumed=t+.0001;
  }
}
function dotsDown(e){
  if(!dots||dots.next>=dots.pts.length||e.isPrimary===false)return;
  if(e.cancelable)e.preventDefault();
  const p=pointerCanvas(e),next=dotScale(dots.pts[dots.next]),u=canvasUnit(dc);
  if(dots.next===0&&Math.hypot(p.x-next.x,p.y-next.y)>20*u)return;
  dots.draw=true;dots.pointerId=e.pointerId;dots.lastPointer=p;
  try{dc.setPointerCapture(e.pointerId);}catch(error){}
  hitNextAlong(p,p,true);drawDots();
}
function dotsMove(e){
  if(!dots?.draw||e.pointerId!==dots.pointerId)return;
  if(e.cancelable)e.preventDefault();
  for(const event of pointerEventsFor(e)){
    const p=pointerCanvas(event);hitNextAlong(dots.lastPointer||p,p);dots.lastPointer=p;
    if(!dots.draw)break;
  }drawDots();
}
function endDotsPointer(e){
  if(!dots||e.pointerId!==dots.pointerId)return;
  if(e.type==='pointerup'&&dots.draw)dotsMove(e);
  dots.draw=false;dots.lastPointer=null;dots.pointerId=null;
}
dc.onpointerdown=dotsDown;dc.onpointermove=dotsMove;dc.onpointerup=endDotsPointer;dc.onpointercancel=endDotsPointer;dc.onlostpointercapture=endDotsPointer;
/* QUIZ */
const QB={jungle:[
[1,'Welches Tier lebt typischerweise im Regenwald?',['Tukan','Eisbär','Pinguin','Rentier'],0],[1,'Was ist eine Liane?',['Kletterpflanze','Vogelart','Fluss','Pilz'],0],[2,'Warum sind Regenwälder besonders artenreich?',['Viele unterschiedliche Lebensräume auf engem Raum','Weil es dort nie regnet','Weil nur eine Pflanzenart wächst','Weil es keine Fressfeinde gibt'],0],[2,'Welche Anpassung hilft vielen Baumkronenpflanzen?',['Grosse Blätter zur Lichtaufnahme','Dicke Eisschicht','Salzdrüsen','Winterschlaf'],0],[3,'Was passiert wahrscheinlich, wenn grosse Waldflächen fragmentiert werden?',['Populationen werden stärker voneinander getrennt','Alle Arten vermehren sich schneller','Der Boden wird automatisch nährstoffreicher','Es entstehen mehr Flüsse'],0],[3,'Warum ist der Boden vieler tropischer Regenwälder trotz üppiger Vegetation relativ nährstoffarm?',['Nährstoffe zirkulieren schnell in Biomasse','Es gibt keine Mikroorganismen','Regen enthält Säure','Bäume verbrauchen keinen Stickstoff'],0],[4,'Welche Aussage beschreibt einen Kaskadeneffekt im Ökosystem am besten?',['Änderung einer Art wirkt über mehrere Nahrungsebenen','Mehr Regen erzeugt immer mehr Arten','Ein Tier wechselt seine Farbe','Ein Baum wächst schneller'],0],[4,'Warum kann der Verlust grosser Samenverbreiter die Baumarten-Zusammensetzung verändern?',['Bestimmte Samen werden seltener weit transportiert','Samen werden dadurch grösser','Bäume bilden keine Blätter mehr','Alle Pflanzen werden Windbestäuber'],0]],
space:[
[1,'Welcher Himmelskörper umkreist die Erde?',['Mond','Sonne','Mars','Venus'],0],[1,'Womit beobachtet man ferne Sterne?',['Teleskop','Mikroskop','Kompass','Barometer'],0],[2,'Warum schweben Astronauten in der Raumstation?',['Sie befinden sich im dauernden freien Fall','Es gibt dort gar keine Erdanziehung','Die Station ist mit Helium gefüllt','Die Raumanzüge ziehen nach oben'],0],[2,'Was ist ein Lichtjahr?',['Eine Entfernung','Eine Zeitspanne von 365 Tagen','Eine Temperatur','Eine Masse'],0],[3,'Warum sehen wir Sterne in die Vergangenheit?',['Ihr Licht braucht Zeit bis zu uns','Sterne bewegen sich rückwärts','Die Erde speichert Bilder','Zeit läuft im All langsamer'],0],[3,'Was bestimmt hauptsächlich die Farbe eines Sterns?',['Oberflächentemperatur','Entfernung zur Erde','Anzahl der Planeten','Rotationsrichtung'],0],[4,'Ein Exoplanet transitieren vor seinem Stern. Was wird direkt gemessen?',['Eine kleine periodische Helligkeitsabnahme','Die Oberfläche des Planeten','Seine genaue Masse ohne Zusatzdaten','Sein Magnetfeld'],0],[4,'Warum kann ein weisser Zwerg nicht beliebig massereich sein?',['Elektronenentartungsdruck hat eine Grenzmasse','Er verliert jede Gravitation','Er besteht nur aus Licht','Seine Temperatur wird exakt null'],0]],
sea:[
[1,'Welches Tier ist ein Säugetier?',['Delfin','Krake','Seestern','Thunfisch'],0],[1,'Was verursacht Ebbe und Flut hauptsächlich?',['Mond und Sonne','Wind allein','Wassertemperatur','Schiffe'],0],[2,'Warum sind Korallenriffe empfindlich gegenüber Erwärmung?',['Korallen können ihre Algenpartner verlieren','Korallen schmelzen wie Eis','Salz verschwindet','Wellen stoppen'],0],[2,'Was ist Plankton?',['Im Wasser treibende Kleinstorganismen','Nur junge Fische','Meeresboden','Eine Algenart'],0],[3,'Was bedeutet Überfischung ökologisch?',['Entnahme schneller als Bestände sich erholen','Nur grosse Fische werden gefangen','Fische wachsen zu schnell','Das Meer wird salziger'],0],[3,'Warum können Seegraswiesen Kohlenstoff langfristig speichern?',['Organisches Material wird im Sediment gebunden','Seegras produziert keinen Sauerstoff','Sie enthalten Kalkberge','Sie verhindern Gezeiten'],0],[4,'Was kann beim Zusammenbruch eines Spitzenprädators passieren?',['Beutepopulationen verändern das ganze Nahrungsnetz','Das Wasser verliert Salz','Alle Arten werden grösser','Wellen werden schwächer'],0],[4,'Warum verschärft Ozeanversauerung Probleme für kalkbildende Organismen?',['Karbonat-Ionen werden knapper','Das Wasser friert schneller','Sauerstoff wird zu Stickstoff','Meerwasser wird süss'],0]],
greek:[
[1,'Auf welcher Insel liegt Knossos?',['Kreta','Rhodos','Korfu','Kos'],0],[1,'Wer gilt in der Mythologie als Göttervater?',['Zeus','Hermes','Theseus','Orpheus'],0],[2,'Wozu diente Ariadnes Faden?',['Weg aus dem Labyrinth finden','Minotaurus fesseln','Segel reparieren','Feuer entzünden'],0],[2,'Was war die Polis?',['Stadtstaat','Tempelsäule','Schiffstyp','Münze'],0],[3,'Warum waren Häfen für griechische Poleis wichtig?',['Handel und Verbindung über das Meer','Nur für religiöse Rituale','Weil Landwirtschaft verboten war','Um Berge abzutragen'],0],[3,'Was unterscheidet Mythos und historische Quelle grundsätzlich?',['Mythos deutet Welt erzählerisch, Quelle wird quellenkritisch geprüft','Mythen sind immer exakt datiert','Historische Quellen enthalten nie Erzählungen','Es gibt keinen Unterschied'],0],[4,'Welche Folge hatte die stark gegliederte Geografie Griechenlands für die Antike?',['Viele politisch eigenständige Poleis','Ein frühes einheitliches Zentralreich','Kein Seehandel','Keine Landwirtschaft'],0],[4,'Warum ist die lineare B-Schrift für die Forschung bedeutsam?',['Sie belegt eine frühe Form des Griechischen','Sie ist das erste lateinische Alphabet','Sie beschreibt römische Gesetze','Sie wurde erst im Mittelalter erfunden'],0]]};
QB.jungle.push(
[2,'Was ist eine Epiphyt?',['Eine Pflanze, die auf einer anderen wächst ohne sie zu parasitieren','Ein nachtaktiver Käfer','Eine Bodenart','Ein Flussarm'],0],[2,'Warum haben viele Regenwaldblätter Tropfspitzen?',['Wasser kann schneller ablaufen','Sie speichern Salz','Sie fangen mehr Schnee','Sie schützen vor Frost'],0],
[3,'Was beschreibt den Waldrandeffekt?',['Bedingungen ändern sich am Übergang von Wald zu offener Fläche','Bäume wachsen nur am Rand','Tiere verlassen jeden Waldrand','Niederschlag stoppt am Rand'],0],[3,'Warum kann starke Entwaldung regional den Niederschlag beeinflussen?',['Weniger Verdunstung und Feuchtigkeitsrückführung','Mehr Bäume erzeugen Wolken aus Staub','Flüsse verdampfen vollständig','Nur Vögel transportieren Wasser'],0],
[4,'Warum kann genetische Isolation kleiner Waldpopulationen problematisch sein?',['Inzucht und Verlust genetischer Vielfalt werden wahrscheinlicher','Alle Individuen werden automatisch grösser','Mutationen hören auf','Fortpflanzung wird schneller'],0],[4,'Was ist eine plausible Folge, wenn ein wichtiger Bestäuber verschwindet?',['Fortpflanzung bestimmter Pflanzen nimmt ab','Alle Samen werden leichter','Bäume brauchen kein Licht mehr','Boden wird salziger'],0],[4,'Was meint Resilienz eines Ökosystems?',['Fähigkeit, Störungen zu verkraften und Funktionen wiederherzustellen','Anzahl der grössten Tiere','Jährliche Regenmenge','Alter des ältesten Baums'],0],[4,'Warum können invasive Arten auf Insel-ähnlich isolierten Waldfragmenten besonders problematisch sein?',['Einheimische Arten haben oft weniger Ausweichräume und Konkurrenzreserven','Invasive Arten können dort nicht wachsen','Fragmentierung verhindert jede Ausbreitung','Nur Pflanzen sind betroffen'],0]);
QB.space.push(
[2,'Warum gibt es Mondphasen?',['Wir sehen unterschiedlich beleuchtete Teile des Mondes','Der Erdschatten bedeckt den Mond jeden Monat vollständig','Der Mond ändert seine Form','Wolken schneiden Teile ab'],0],[2,'Was zeigt ein Spektrum eines Sterns?',['Informationen über Zusammensetzung und Temperatur','Nur seine Entfernung','Nur sein Alter','Die Zahl seiner Planeten direkt'],0],
[3,'Was bedeutet Rotverschiebung bei fernen Galaxien meist?',['Ihre Spektrallinien sind zu längeren Wellenlängen verschoben','Sie werden kälter als null Kelvin','Sie drehen sich nur nach links','Sie verlieren alle Sterne'],0],[3,'Warum kann ein massereicher Stern kürzer leben als ein leichter?',['Er verbraucht seinen Brennstoff viel schneller','Er besitzt weniger Gravitation','Er fusioniert kein Wasserstoff','Er ist immer kälter'],0],
[4,'Wozu dient ein Lagrange-Punkt praktisch?',['Raumsonden können dort relativ zur Erde und Sonne günstig positioniert werden','Raketen verlieren dort ihre Masse','Zeit steht dort still','Planeten entstehen nur dort'],0],[4,'Warum liefert die Transitmethode primär den Planetenradius relativ zum Stern?',['Die verdeckte Sternfläche bestimmt die Helligkeitsabnahme','Die Umlaufzeit ist gleich dem Radius','Die Farbe des Planeten wird direkt gemessen','Gravitation ist ausgeschaltet'],0],[4,'Was verrät die Radialgeschwindigkeitsmethode über einen Exoplaneten?',['Eine Untergrenze seiner Masse über die Bewegung des Sterns','Seine Oberfläche im Detail','Seine Atmosphäre ohne Spektrum','Seine genaue Albedo allein'],0],[4,'Warum ist ein Neutronenstern extrem dicht?',['Materie wurde nach dem Kollaps stark komprimiert, Elektronen und Protonen bilden weitgehend Neutronen','Er besteht aus gefrorenem Licht','Er hat keine Gravitation','Sein Volumen ist grösser als das eines roten Riesen'],0]);
QB.sea.push(
[2,'Was ist Auftrieb im Ozean (Upwelling)?',['Tiefes nährstoffreiches Wasser steigt zur Oberfläche','Wellen werden höher','Salz sinkt vollständig ab','Korallen wandern'],0],[2,'Was ist eine Thermokline?',['Schicht mit starkem Temperaturgradienten','Zone ohne Salz','Grenze zwischen Ebbe und Flut','Meeresboden aus Eis'],0],
[3,'Warum können Nährstoffeinträge zu Sauerstoffmangel führen?',['Algenblüten und deren Abbau verbrauchen viel Sauerstoff','Nährstoffe verdrängen Wasser','Fische produzieren Stickstoff','Wellen stoppen'],0],[3,'Warum sind Mangroven wichtige Kinderstuben vieler Fische?',['Strukturreiche flache Bereiche bieten Schutz und Nahrung','Sie machen Meerwasser süss','Sie verhindern jede Strömung','Nur dort gibt es Sauerstoff'],0],
[4,'Was beschreibt marine snow?',['Absinkende organische Partikel aus oberen Wasserschichten','Schnee aus Salz','Eisregen über dem Meer','Plankton nur in Polargebieten'],0],[4,'Warum kann Erwärmung die Sauerstoffversorgung des Meeres verschlechtern?',['Warmes Wasser löst weniger Sauerstoff und stärkere Schichtung hemmt Durchmischung','Sauerstoff wird schwerer als Wasser','Salz zerfällt','Wellen verbrauchen Sauerstoff chemisch'],0],[4,'Welche Rolle spielt die biologische Kohlenstoffpumpe?',['Organischer Kohlenstoff wird durch Produktion und Absinken in die Tiefe transportiert','Sie pumpt Meerwasser an Land','Sie erzeugt Gezeiten','Sie entfernt Salz aus dem Ozean'],0],[4,'Warum können trophische Kaskaden Seegraswiesen beeinflussen?',['Änderungen bei Räubern verändern Pflanzenfresserdruck auf Vegetation','Seegras reagiert nur auf Mondlicht','Räuber düngen ausschliesslich den Boden','Nur Temperatur ist relevant'],0]);
QB.greek.push(
[2,'Welche Kultur ist besonders mit Knossos verbunden?',['Minoische Kultur','Römische Republik','Etrusker','Wikinger'],0],[2,'Was kennzeichnet dorische Säulen klassisch?',['Schlichteres Kapitell als bei ionischen Säulen','Spiralförmige Voluten','Immer goldene Oberfläche','Keine Basis oder Säule'],0],
[3,'Was ist Linear B?',['Eine bronzezeitliche Silbenschrift für frühes Griechisch','Ein römisches Zahlensystem','Eine moderne Schriftart','Ein minoisches Musikinstrument'],0],[3,'Was war die Agora in vielen Poleis?',['Zentraler Markt- und Versammlungsraum','Militärschiff','Bergheiligtum ausschliesslich','Bewässerungskanal'],0],
[4,'Warum ist die Entzifferung von Linear B historisch wichtig?',['Sie zeigte, dass mykenische Verwaltung eine frühe Form des Griechischen verwendete','Sie bewies lateinische Herkunft der Griechen','Sie datierte alle Mythen exakt','Sie erklärte die Architektur der Akropolis vollständig'],0],[4,'Was war ein Ostrakismos im klassischen Athen?',['Verfahren, eine Person zeitweise aus der Polis zu verbannen','Wahl eines Priesters auf Lebenszeit','Steuer auf Olivenöl','Militärisches Bündnis mit Sparta'],0],[4,'Was unterscheidet ionische von dorischen Kapitellen besonders auffällig?',['Ionische Kapitelle besitzen Voluten','Dorische Kapitelle besitzen Flügel','Ionische Säulen sind immer aus Holz','Dorische Säulen haben Hieroglyphen'],0],[4,'Warum war die Ägäis für bronzezeitliche Kulturen zentral?',['Sie verband Inseln und Küsten durch Seehandel und Austausch','Sie trennte alle Siedlungen vollständig','Dort war Seefahrt unmöglich','Sie lieferte ausschliesslich Süßwasser'],0]);


QB.dino=[
[1,'Welcher Dinosaurier hatte drei Hörner?',['Triceratops','Stegosaurus','Brachiosaurus','Compsognathus'],0],[1,'Was ist ein Fossil?',['Erhaltener Rest oder Abdruck früheren Lebens','Ein lebender Dinosaurier','Ein Vulkanstein','Ein moderner Knochen'],0],[1,'Welcher Dinosaurier war ein grosser Fleischfresser?',['Tyrannosaurus rex','Brachiosaurus','Triceratops','Stegosaurus'],0],
[2,'Warum finden Forschende Dinosaurier oft als versteinerte Knochen?',['Mineralien ersetzten über lange Zeit Teile des ursprünglichen Materials','Knochen werden sofort zu Metall','Dinosaurier bestanden aus Stein','Vulkane formten sie künstlich'],0],[2,'Wozu dienten die Platten eines Stegosaurus wahrscheinlich unter anderem?',['Signalwirkung und möglicherweise Wärmeregulation','Zum Fliegen','Als Kiemen','Zum Graben von Tunneln'],0],[2,'In welcher Zeit lebten die letzten Nicht-Vogel-Dinosaurier?',['Kreidezeit','Eiszeit','Steinzeit','Bronzezeit'],0],
[3,'Warum sind Vögel für die Dinosaurierforschung besonders wichtig?',['Sie stammen von theropoden Dinosauriern ab','Sie lebten vor Dinosauriern','Sie besitzen keine Knochen','Sie sind Reptilien ohne Verwandtschaft'],0],[3,'Was kann eine Reihe fossiler Fussabdrücke besonders gut zeigen?',['Bewegungsrichtung und teilweise Geschwindigkeit','Exaktes Körpergewicht ohne Annahmen','Farbe der Haut','Alter auf den Tag genau'],0],[3,'Warum ist die Körperhaltung des T-Rex heute anders rekonstruiert als in alten Bildern?',['Neue Fossilien und biomechanische Erkenntnisse zeigen eine horizontalere Haltung','Seine Knochen wurden länger','Die Erdanziehung war anders','Er hatte Flügel wie ein Adler'],0],
[4,'Welche Beobachtung spricht am stärksten für ein Massenaussterben am Ende der Kreidezeit?',['Ein globaler abrupter Wechsel im Fossilbestand zusammen mit einer Iridium-Anomalie','Ein einzelner grosser Knochenfund','Nur Dinosaurierfährten in Europa','Mehr Pflanzenpollen in einem See'],0],[4,'Warum lässt sich aus einem einzelnen Zahn die Ernährung eines Dinosauriers nur begrenzt sicher ableiten?',['Zahnform liefert Hinweise, muss aber mit weiteren anatomischen und ökologischen Daten kombiniert werden','Zähne enthalten keine Information','Alle Dinosaurier hatten gleiche Zähne','Fossile Zähne sind immer künstlich'],0],[4,'Was bedeutet phylogenetische Analyse in der Paläontologie?',['Verwandtschaft anhand geteilter abgeleiteter Merkmale rekonstruieren','Nur das Alter eines Fossils messen','Gestein nach Farbe sortieren','Dinosaurier nach Grösse ordnen'],0]
];
QB.pirate=[
[1,'Womit fand man auf See die Himmelsrichtung?',['Kompass','Sanduhr','Anker','Kanone'],0],[1,'Was ist eine Schatzkarte?',['Eine Karte mit Hinweisen zu einem Versteck','Ein Segel','Ein Kochbuch','Eine Flagge'],0],[1,'Wozu dient ein Anker?',['Ein Schiff am Ort halten','Segel aufblasen','Kanonen laden','Sterne zählen'],0],
[2,'Warum waren Handelsschiffe für Piraten interessant?',['Sie transportierten wertvolle Waren','Sie waren immer schneller','Sie hatten keine Besatzung','Sie fuhren nur nachts'],0],[2,'Was ist eine Kaperfahrt historisch?',['Angriff auf feindliche Schiffe mit staatlicher Erlaubnis','Fahrt ohne Segel','Suche nach Walen','Reise über einen Fluss'],0],[2,'Warum war ein Fernrohr an Bord nützlich?',['Schiffe und Küsten früh erkennen','Tiefe unter dem Kiel messen','Wind erzeugen','Proviant konservieren'],0],
[3,'Warum war sauberes Trinkwasser auf langen Segelreisen ein Problem?',['Es konnte in Fässern verderben oder verunreinigt werden','Meerwasser war immer trinkbar','Regen war verboten','Schiffe hatten kein Holz'],0],[3,'Was unterscheidet einen Freibeuter historisch von einem gewöhnlichen Piraten?',['Ein Freibeuter konnte einen staatlichen Kaperbrief besitzen','Er durfte nie Waffen tragen','Er segelte nur auf Flüssen','Er war immer Händler'],0],[3,'Warum waren Karibikinseln strategisch wichtig?',['Sie lagen an wichtigen Handelsrouten und boten Häfen und Verstecke','Es gab dort keine Schiffe','Sie waren alle unbewohnt','Dort gab es keinen Wind'],0],
[4,'Welche Quelle wäre für die Erforschung historischer Piraterie besonders belastbar?',['Zeitgenössische Gerichts- und Schiffsakten im Vergleich mit anderen Quellen','Ein moderner Abenteuerfilm allein','Eine erfundene Schatzkarte','Nur eine mündliche Legende'],0],[4,'Warum ist das klassische Bild des Piraten mit Schatztruhe historisch nur bedingt typisch?',['Beute bestand oft aus Handelswaren und wurde eher verkauft oder verteilt','Piraten kannten kein Gold','Es gab keine Inseln','Schiffe transportierten nie Waren'],0],[4,'Was war ein wesentlicher Zweck von Artikeln oder Regeln auf manchen Piratenschiffen?',['Beute, Pflichten und Entschädigungen innerhalb der Mannschaft festlegen','Navigation durch Sterne ersetzen','Alle Waffen verbieten','Nur den Speiseplan bestimmen'],0]
];
QB.egypt=[
[1,'An welchem Fluss entstand das alte Ägypten?',['Nil','Rhein','Amazonas','Donau'],0],[1,'Wie nennt man die Bildzeichen der alten Ägypter?',['Hieroglyphen','Runen','Keilschriftzeichen','Morsezeichen'],0],[1,'Was ist eine Pyramide?',['Ein monumentales Bauwerk mit quadratischer Grundfläche und spitz zulaufenden Seiten','Ein Schiff','Ein Bewässerungskanal','Ein Musikinstrument'],0],
[2,'Warum war die jährliche Nilflut historisch wichtig?',['Sie brachte Wasser und fruchtbaren Schlamm auf die Felder','Sie trocknete alle Felder aus','Sie brachte Schnee','Sie stoppte jede Landwirtschaft'],0],[2,'Woraus wurde Papyrus hergestellt?',['Aus einer Pflanze am Nil','Aus Metall','Aus Schafwolle','Aus Sandstein'],0],[2,'Wozu diente ein Sarkophag?',['Als steinerner oder verzierter Sarg','Als Bewässerungsrad','Als Tempeltor','Als Messgerät'],0],
[3,'Warum ist der Rosetta-Stein für die Forschung so wichtig?',['Derselbe Text steht in mehreren Schriften und half bei der Entzifferung der Hieroglyphen','Er ist der grösste Pyramidenstein','Er enthält eine Schatzkarte','Er zeigt den Nilverlauf'],0],[3,'Was war eine zentrale Funktion von Schreibern?',['Verwaltung, Aufzeichnungen und Texte verfassen','Pyramiden allein bauen','Nur Schiffe steuern','Kamele züchten'],0],[3,'Warum war die Lage Oberägyptens südlich von Unterägypten?',['Die Bezeichnungen folgen der Fliessrichtung bzw. Höhenlage des Nils','Karten waren umgedreht','Die Sonne ging im Süden auf','Ägypten lag am Südpol'],0],
[4,'Warum liefert eine Mumie Informationen über das Leben einer Person?',['Gewebe, Zähne und Knochen können Hinweise auf Alter, Krankheiten, Ernährung und Einbalsamierung geben','Sie zeigt automatisch alle Erinnerungen','Sie enthält immer einen vollständigen Lebenslauf','Nur Kleidung kann untersucht werden'],0],[4,'Was war die Hauptfunktion des Nilsystems für die staatliche Organisation?',['Landwirtschaft, Transport und Versorgung verbanden Siedlungen entlang eines schmalen Korridors','Es verhinderte jede Kommunikation','Es machte Strassen überflüssig in ganz Afrika','Es lieferte ausschliesslich Salz'],0],[4,'Warum ist die Datierung von Pyramiden nicht nur auf schriftliche Königslisten angewiesen?',['Archäologische Schichten, Inschriften, Radiokarbondaten und Baukontext ergänzen sich','Königslisten sind immer vollständig','Pyramiden tragen moderne Jahreszahlen','Man zählt nur die Steinblöcke'],0]
];
QB.castle=[
[1,'Wozu diente eine Zugbrücke?',['Zugang über einen Graben öffnen oder sperren','Wasser erhitzen','Pferde füttern','Pfeile herstellen'],0],[1,'Was trug ein Ritter zum Schutz?',['Rüstung','Taucheranzug','Raumanzug','Kimono'],0],[1,'Wo stand ein Wachturm?',['An oder bei einer Befestigung zur Beobachtung','Unter einem See','In einem Segel','In einem Bergwerk'],0],
[2,'Warum waren Burgen oft auf Anhöhen gebaut?',['Bessere Sicht und schwierigere Angriffe','Dort war es immer wärmer','Nur dort gab es Holz','Pferde konnten nicht bergab laufen'],0],[2,'Was war ein Bergfried?',['Ein besonders starker Haupt- oder Wehrturm','Eine mittelalterliche Küche','Ein Flussboot','Ein Marktplatz'],0],[2,'Wozu diente ein Burggraben?',['Er erschwerte den direkten Angriff auf die Mauern','Er versorgte Kanonen mit Feuer','Er war ausschliesslich ein Schwimmbad','Er machte Mauern unnötig'],0],
[3,'Warum verloren klassische Burgen mit dem Aufkommen schwerer Feuerwaffen an militärischer Bedeutung?',['Hohe Mauern waren gegen starke Artillerie verwundbarer','Schwerter wurden verboten','Pferde verschwanden','Stein wurde zu weich'],0],[3,'Was war Lehnswesen vereinfacht gesagt?',['Ein Geflecht persönlicher Bindungen und Rechte rund um Land, Dienst und Herrschaft','Ein Turnierspiel','Eine Baumethode','Ein Münzsystem'],0],[3,'Warum war eine Ringmauer wichtig?',['Sie bildete eine geschlossene Verteidigungslinie um den Kernbereich','Sie diente nur als Dekoration','Sie speicherte Getreide','Sie war ein Stall'],0],
[4,'Warum unterscheiden Historiker zwischen idealisiertem Ritterbild und historischem Rittertum?',['Literatur und spätere Romantik formten Vorstellungen, die nicht alle sozialen und militärischen Realitäten abbilden','Ritter gab es nie','Alle Quellen sind erfunden','Ritter lebten nur in einem Land'],0],[4,'Welche bauliche Veränderung kann auf Anpassung an Feuerwaffen hindeuten?',['Niedrigere, dickere Befestigungen und geeignete Geschützstellungen','Immer höhere dünne Holzwände','Mehr Glasfenster an der Aussenmauer','Entfernung aller Gräben'],0],[4,'Warum sind Burgen archäologisch oft mehrfach überformt?',['Sie wurden über Jahrhunderte erweitert, umgebaut, beschädigt und anders genutzt','Stein verändert sich jede Nacht','Alle Burgen wurden gleichzeitig gebaut','Man durfte keine Gebäude reparieren'],0]
];

let quizRound=[],quizIndex=0,quizCorrect=0,quizLocked=false;
function challengeFact(q){return{type:'Schnellwahl',badge:'⚡',prompt:q[1],hint:'Tippe direkt auf die richtige Antwort.',options:shuffled(q[2].map((x,i)=>({label:x,ok:i===q[3]})))}}
function challengeTF(q){const useCorrect=Math.random()<.5,idx=useCorrect?q[3]:pick(q[2].map((_,i)=>i).filter(i=>i!==q[3]));return{type:'Richtig oder falsch?',badge:useCorrect?'✓':'?',prompt:q[1],hint:`Behauptete Antwort: ${q[2][idx]}`,options:[{label:'✓ Stimmt',ok:useCorrect},{label:'✗ Stimmt nicht',ok:!useCorrect}]}}
function challengeOdd(){const mine=pickN(WORLDS[world].memory,3),others=Object.keys(WORLDS).filter(k=>k!==world),otherWorld=pick(others),odd=pick(WORLDS[otherWorld].memory.filter(x=>!mine.includes(x)));return{type:'Was passt nicht?',badge:'👀',prompt:`Welches Symbol passt nicht zu ${WORLDS[world].name}?`,hint:'Nur eines gehört in eine andere Welt.',icon:true,options:shuffled([...mine.map(x=>({label:x,ok:false})),{label:odd,ok:true}])}}
function challengeBelongs(){const good=pick(WORLDS[world].words),others=shuffled(Object.keys(WORLDS).filter(k=>k!==world)).slice(0,3),bad=others.map(k=>pick(WORLDS[k].words));return{type:'Welcher Begriff gehört dazu?',badge:'🧭',prompt:`Was gehört zu ${WORLDS[world].name}?`,hint:'Schnell entscheiden.',options:shuffled([{label:good,ok:true},...bad.map(x=>({label:x,ok:false}))])}}
function buildQuizRound(){let pool=QB[world].filter(q=>q[0]===difficulty);if(pool.length<8)pool=QB[world].filter(q=>q[0]>=Math.max(1,difficulty-1));if(!pool.length)pool=QB[world];const facts=pickN(pool,8);quizRound=[];for(let i=0;i<8;i++){const mode=i%4;if(mode===0)quizRound.push(challengeFact(facts[i%facts.length]));else if(mode===1)quizRound.push(challengeTF(facts[i%facts.length]));else if(mode===2)quizRound.push(challengeOdd());else quizRound.push(challengeBelongs())}quizRound=shuffled(quizRound);quizIndex=0;quizCorrect=0;showQuiz()}
function renderChallengeDots(){const el=document.getElementById('challengeDots');el.innerHTML='';quizRound.forEach((_,i)=>{const d=document.createElement('i');if(i<quizIndex)d.className='done';else if(i===quizIndex)d.className='now';el.appendChild(d)})}
function showQuiz(){quizLocked=false;document.getElementById('challengeScore').textContent=`${quizCorrect} ✓`;if(quizIndex>=quizRound.length){document.getElementById('challengeType').textContent='Runde geschafft';document.getElementById('challengeBadge').textContent=quizCorrect>=6?'🏆':'⭐';document.getElementById('quizQuestion').textContent=`${quizCorrect} von ${quizRound.length} richtig`;document.getElementById('quizHint').textContent=quizCorrect>=6?'Starke Runde!':'Noch eine Runde?';document.getElementById('quizOptions').innerHTML=`<button class="challenge-opt" onclick="buildQuizRound()">Neue Challenge starten</button>`;document.getElementById('quizStatus').textContent='Fertig';renderChallengeDots();if(quizCorrect>=Math.ceil(quizRound.length*.7))reward('quiz');return}const q=quizRound[quizIndex];document.getElementById('challengeType').textContent=q.type;document.getElementById('challengeBadge').textContent=q.badge;document.getElementById('quizQuestion').textContent=q.prompt;document.getElementById('quizHint').textContent=q.hint||'';document.getElementById('quizStatus').textContent=`${quizIndex+1}/${quizRound.length}`;renderChallengeDots();const o=document.getElementById('quizOptions');o.innerHTML='';q.options.forEach(v=>{const b=document.createElement('button');b.className='challenge-opt'+(q.icon?' icon':'');b.textContent=v.label;b.onclick=()=>answerChallenge(b,v.ok);o.appendChild(b)})}
function answerChallenge(btn,ok){if(quizLocked)return;quizLocked=true;if(ok){quizCorrect++;btn.classList.add('good');msg('quizMsg','Richtig!',550)}else{btn.classList.add('bad');msg('quizMsg','Knapp daneben.',650)}document.getElementById('challengeScore').textContent=`${quizCorrect} ✓`;setTimeout(()=>{quizIndex++;showQuiz()},650)}

/* TIMER */
let timerChoice=15,timerTick=null,timerEnd=+(localStorage.getItem('rw54_timer_end')||0),timerPin=localStorage.getItem('rw54_timer_pin')||'',timerExploding=false;
function openTimer(){const m=document.getElementById('timerModal');m.classList.add('show');document.getElementById('timerPinToggle').checked=!!timerPin;document.getElementById('timerPinInput').value=timerPin;togglePinField();document.querySelectorAll('#timerPresets button').forEach(b=>b.classList.toggle('on',+b.dataset.min===timerChoice));}
function closeTimer(){document.getElementById('timerModal').classList.remove('show')}
document.querySelectorAll('#timerPresets button').forEach(b=>b.onclick=()=>{timerChoice=+b.dataset.min;document.getElementById('timerCustom').value='';document.querySelectorAll('#timerPresets button').forEach(x=>x.classList.toggle('on',x===b))});
function togglePinField(){document.getElementById('timerPinInput').classList.toggle('show',document.getElementById('timerPinToggle').checked)}
function startTimerFromModal(){const custom=+document.getElementById('timerCustom').value,mins=custom>0?Math.min(180,custom):timerChoice;const usePin=document.getElementById('timerPinToggle').checked,pin=document.getElementById('timerPinInput').value.trim();if(usePin&&!/^\d{4,6}$/.test(pin)){toast('PIN: 4–6 Ziffern');return}timerPin=usePin?pin:'';timerEnd=Date.now()+mins*60000;localStorage.setItem('rw54_timer_end',timerEnd);localStorage.setItem('rw54_timer_pin',timerPin);localStorage.removeItem('rw54_timeup');closeTimer();tickTimer();toast(`⏱ ${mins} Minuten gestartet`)}
function stopTimer(){if(timerEnd&&timerPin){const p=prompt('Eltern-PIN zum Stoppen:');if(p!==timerPin){toast('PIN stimmt nicht');return}}timerEnd=0;localStorage.removeItem('rw54_timer_end');document.getElementById('timerText').textContent='Timer';document.getElementById('timerBtn').classList.remove('running');closeTimer()}
function tickTimer(){if(timerTick)clearTimeout(timerTick);const btn=document.getElementById('timerBtn'),txt=document.getElementById('timerText');if(!timerEnd){txt.textContent='Timer';btn.classList.remove('running');return}const left=timerEnd-Date.now();if(left<=0){timerEnd=0;localStorage.removeItem('rw54_timer_end');txt.textContent='0:00';btn.classList.add('running');triggerTimeup();return}const sec=Math.ceil(left/1000),m=Math.floor(sec/60),s=sec%60;txt.textContent=`${m}:${String(s).padStart(2,'0')}`;btn.classList.add('running');timerTick=setTimeout(tickTimer,250)}
function triggerTimeup(){if(timerExploding)return;timerExploding=true;localStorage.setItem('rw54_timeup','1');const ov=document.getElementById('timeup'),count=document.getElementById('boomCountdown'),boom=document.getElementById('boomFx'),smoke=ov.querySelector('.smoke');ov.classList.add('show');ov.classList.remove('final');document.querySelector('.app')?.classList.add('shake');let n=3;count.textContent=n;const id=setInterval(()=>{n--;if(n>0){count.textContent=n;return}clearInterval(id);count.textContent='';boom.classList.add('fire');smoke.classList.add('on');setTimeout(()=>{ov.classList.add('final');document.querySelector('.app')?.classList.remove('shake');timerExploding=false},900)},700)}
function showTimeupFinal(){const ov=document.getElementById('timeup');ov.classList.add('show','final');document.getElementById('boomCountdown').textContent='';timerExploding=false}
function unlockTimeup(){if(timerPin){const p=prompt('Eltern-PIN:');if(p!==timerPin){toast('PIN stimmt nicht');return}}localStorage.removeItem('rw54_timeup');const ov=document.getElementById('timeup');ov.classList.remove('show','final');document.getElementById('boomFx').classList.remove('fire');ov.querySelector('.smoke').classList.remove('on');document.getElementById('timerText').textContent='Timer';document.getElementById('timerBtn').classList.remove('running');}
function initTimer(){if(localStorage.getItem('rw54_timeup')==='1')showTimeupFinal();else if(timerEnd){if(timerEnd<=Date.now())triggerTimeup();else tickTimer()}}

/* The canvas size has no layout influence: the observer cannot grow it recursively. */
if('ResizeObserver' in window){
  const canvasObserver=new ResizeObserver(scheduleCanvasLayout);
  for(const id of ['mazeStage','dotsStage'])canvasObserver.observe(document.getElementById(id));
}
updateViewport();
/* init */
normalizeRewards();renderWizard();theme();initTimer();
if('serviceWorker' in navigator && location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(reg=>reg.update().catch(()=>{})).catch(()=>{});