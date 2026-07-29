(function(){
"use strict";

/* =========================================================
   STORAGE
========================================================= */
const LS = {
  VAULT:"ism_vault_v1",
  MASTERED:"ism_mastered_v1",
  STATS:"ism_stats_v2"
};
function loadJSON(key, fallback){
  try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch(e){ return fallback; }
}
function saveJSON(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

let vault = loadJSON(LS.VAULT, {});       // { word: {strikes:0, difficulty, added: ts} }
let mastered = loadJSON(LS.MASTERED, []); // unique words ever spelled correctly
let stats = loadJSON(LS.STATS, { sessions:0, attempted:0, correct:0, streak:0, lastPracticeDate:null });

function persistAll(){
  saveJSON(LS.VAULT, vault);
  saveJSON(LS.MASTERED, mastered);
  saveJSON(LS.STATS, stats);
}

// difficulty is now always explicit and consistent for every word entering the vault,
// whether captured automatically from a miss or added manually by the user.
function addToVault(word, difficulty){
  const key = word.toLowerCase();
  const diff = ["easy","medium","hard"].includes(difficulty) ? difficulty : "medium";
  if(!vault[key]) vault[key] = { strikes:0, difficulty: diff, added: Date.now() };
  else { vault[key].strikes = 0; vault[key].difficulty = diff; } // missed again -> reset progress, keep tag fresh
  persistAll();
}
function markMastered(word){
  const key = word.toLowerCase();
  if(!mastered.includes(key)) mastered.push(key);
  persistAll();
}
function todayStr(){ return new Date().toISOString().slice(0,10); }
function updateStreak(){
  const today = todayStr();
  if(stats.lastPracticeDate === today) return;
  const yesterday = new Date(Date.now()-86400000).toISOString().slice(0,10);
  stats.streak = (stats.lastPracticeDate === yesterday) ? (stats.streak||0)+1 : 1;
  stats.lastPracticeDate = today;
  persistAll();
}

/* =========================================================
   DIFF ENGINE (LCS-based letter diff)
========================================================= */
function lcsTable(a,b){
  const n=a.length, m=b.length;
  const dp = Array.from({length:n+1}, ()=>new Array(m+1).fill(0));
  for(let i=1;i<=n;i++){
    for(let j=1;j<=m;j++){
      if(a[i-1]===b[j-1]) dp[i][j] = dp[i-1][j-1]+1;
      else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp;
}
function diffWords(correctRaw, typedRaw){
  const correct = correctRaw.toLowerCase();
  const typed = (typedRaw||"").toLowerCase();
  const isExact = correct === typed;

  const dp = lcsTable(correct, typed);
  let i = correct.length, j = typed.length;
  const correctMarks = new Array(correct.length).fill("missing");
  const typedMarks = new Array(typed.length).fill("extra");

  while(i>0 && j>0){
    if(correct[i-1]===typed[j-1]){
      correctMarks[i-1] = "match";
      typedMarks[j-1] = "match";
      i--; j--;
    } else if(dp[i-1][j] >= dp[i][j-1]){
      i--;
    } else {
      j--;
    }
  }

  const correctChars = correct.split("").map((ch,idx)=>({ ch: correctRaw[idx], status: correctMarks[idx] }));
  const typedChars = typed.split("").map((ch,idx)=>({ ch: (typedRaw||"")[idx], status: typedMarks[idx] }));

  const matches = correctMarks.filter(s=>s==="match").length;
  const accuracy = correct.length ? matches/correct.length : 0;

  return { correctChars, typedChars, accuracy, isExact };
}

/* =========================================================
   SPEECH
========================================================= */
const synth = window.speechSynthesis;
function speak(word, onstart, onend){
  if(!synth){ if(onend) onend(); return; }
  try{ synth.cancel(); }catch(e){}
  const u = new SpeechSynthesisUtterance(word);
  u.rate = 0.82;
  u.pitch = 1;
  u.lang = "en-GB";
  u.onstart = onstart || null;
  u.onend = onend || null;
  u.onerror = onend || null;
  synth.speak(u);
}
function stopSpeak(){ try{ synth && synth.cancel(); }catch(e){} }

/* =========================================================
   CELEBRATION
========================================================= */
function celebrate(){
  const colors = ['#6C5CE7','#2ECC81','#FFA630','#FF6E5C','#2FD6C3'];
  const frag = document.createDocumentFragment();
  const pieces = [];
  for(let i=0;i<32;i++){
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const size = 6+Math.random()*6;
    p.style.left = Math.random()*100+'vw';
    p.style.width = size+'px';
    p.style.height = (size*0.45)+'px';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    const duration = (1.7+Math.random()*1.3).toFixed(2);
    const delay = (Math.random()*0.35).toFixed(2);
    p.style.animation = `confetti-fall ${duration}s ease-in ${delay}s forwards`;
    frag.appendChild(p);
    pieces.push(p);
  }
  document.body.appendChild(frag);
  setTimeout(()=> pieces.forEach(p=>p.remove()), 3500);
}

/* =========================================================
   BAND PREDICTION
========================================================= */
function predictBand(accuracyPct){
  if(accuracyPct >= 95) return "8.5+";
  if(accuracyPct >= 88) return "8.0";
  if(accuracyPct >= 78) return "7.5";
  if(accuracyPct >= 66) return "7.0";
  if(accuracyPct >= 52) return "6.5";
  if(accuracyPct >= 38) return "6.0";
  return "5.5 or below";
}

/* =========================================================
   ICONS
========================================================= */
const ICO = {
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  vault: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12h2M6 8v8M10 5v14M14 8v8M18 5v14M22 12h-2"/></svg>`,
  empty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c1 1 2 2.5 2 4.5A5.5 5.5 0 0 1 6 14.5C6 9 12 7 12 2Z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
};

/* =========================================================
   STATE MACHINE
========================================================= */
const state = {
  screen: "home",
  setup: { count: 10, difficulty: "mixed", mode: "practice", timer: 10 },
  session: null,
  manualDiff: "medium"
};

function pickWords(count, difficulty){
  let pool = difficulty==="mixed" ? DB.slice() : DB.filter(w=>w.difficulty===difficulty);
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  return pool.slice(0, Math.min(count, pool.length));
}

function startSession(){
  const { count, difficulty, mode, timer } = state.setup;
  const words = pickWords(count, difficulty);
  if(words.length===0){ alert("No words available for that difficulty."); return; }
  updateStreak();
  state.session = {
    words, idx:0, results:[], mode, timer, timeLeft: timer, isVaultDrill:false,
    revealed:false, timerHandle:null, typed:""
  };
  stats.sessions++;
  state.screen = "session";
  render(true);
  loadCurrentWord(true);
}

function startVaultDrill(){
  const entries = Object.entries(vault);
  if(entries.length===0) return;
  for(let i=entries.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [entries[i],entries[j]]=[entries[j],entries[i]]; }
  const words = entries.map(([w,meta])=>({ id:"v_"+w, word:w, difficulty: meta.difficulty||"medium" }));
  updateStreak();
  state.session = {
    words, idx:0, results:[], mode:"practice", timer:0, timeLeft:0, isVaultDrill:true,
    revealed:false, timerHandle:null, typed:""
  };
  state.screen = "session";
  render(true);
  loadCurrentWord(true);
}

function currentWordObj(){ return state.session.words[state.session.idx]; }

function loadCurrentWord(autoplay){
  const s = state.session;
  s.revealed = false;
  s.typed = "";
  clearTimer();
  render();
  const input = document.getElementById("spell-input");
  if(input){ input.value=""; input.focus(); }
  if(autoplay!==false){ setTimeout(()=>playCurrent(), 350); }
  if(s.mode==="exam" && !s.isVaultDrill){ startTimer(); }
}

function playCurrent(){
  const w = currentWordObj();
  const btn = document.getElementById("play-btn");
  const wf = document.getElementById("waveform");
  if(btn) btn.classList.add("speaking");
  if(wf) wf.classList.add("active");
  speak(w.word, null, ()=>{
    if(btn) btn.classList.remove("speaking");
    if(wf) wf.classList.remove("active");
  });
}

function startTimer(){
  const s = state.session;
  s.timeLeft = s.timer;
  updateTimerBar();
  s.timerHandle = setInterval(()=>{
    s.timeLeft -= 0.1;
    if(s.timeLeft <= 0){
      s.timeLeft = 0; updateTimerBar(); clearTimer();
      submitAnswer(true);
      return;
    }
    updateTimerBar();
  }, 100);
}
function clearTimer(){
  const s = state.session;
  if(s && s.timerHandle){ clearInterval(s.timerHandle); s.timerHandle=null; }
}
function updateTimerBar(){
  const s = state.session;
  const bar = document.getElementById("timer-bar");
  if(bar){ bar.style.width = Math.max(0,(s.timeLeft/s.timer*100)) + "%"; }
}

function submitAnswer(auto){
  const s = state.session;
  if(s.revealed) return;
  clearTimer();
  const input = document.getElementById("spell-input");
  const typed = input ? input.value : (s.typed||"");
  const w = currentWordObj();
  const diff = diffWords(w.word, typed);

  stats.attempted++;
  let vaultJustCleared = false;
  if(diff.isExact){
    stats.correct++;
    markMastered(w.word);
    if(s.isVaultDrill){
      const v = vault[w.word.toLowerCase()];
      if(v){
        v.strikes++;
        if(v.strikes>=3){
          delete vault[w.word.toLowerCase()];
          if(Object.keys(vault).length===0) vaultJustCleared = true;
        }
      }
    }
  } else {
    if(s.isVaultDrill){
      const v = vault[w.word.toLowerCase()];
      if(v) v.strikes = 0;
    } else {
      addToVault(w.word, w.difficulty);
    }
  }
  persistAll();

  s.results.push({ word:w.word, typed, correct: diff.isExact, difficulty:w.difficulty });
  s.typed = typed;
  s.revealed = true;

  if(vaultJustCleared) celebrate();

  if(s.mode==="practice" || s.isVaultDrill){
    render();
  } else {
    nextWord();
  }
}

function nextWord(){
  const s = state.session;
  clearTimer();
  if(s.idx < s.words.length-1){
    s.idx++;
    loadCurrentWord(true);
  } else {
    stopSpeak();
    const correctCount = s.results.filter(r=>r.correct).length;
    const pct = s.results.length ? Math.round((correctCount/s.results.length)*100) : 0;
    state.screen = "results";
    render(true);
    if(pct>=85) setTimeout(celebrate, 250);
  }
}

function skipWord(){
  const s = state.session;
  clearTimer();
  const w = currentWordObj();
  stats.attempted++;
  s.results.push({ word:w.word, typed:"", correct:false, difficulty:w.difficulty, skipped:true });
  if(!s.isVaultDrill) addToVault(w.word, w.difficulty);
  else { const v = vault[w.word.toLowerCase()]; if(v) v.strikes = 0; }
  persistAll();
  nextWord();
}

function retryMissed(){
  const s = state.session;
  const missed = s.results.filter(r=>!r.correct).map(r=>r.word);
  if(missed.length===0) return;
  const words = missed.map((w,i)=>({ id:"retry_"+i, word:w, difficulty: (DB.find(d=>d.word===w)||{}).difficulty || "medium" }));
  state.session = { words, idx:0, results:[], mode:"practice", timer:0, timeLeft:0, isVaultDrill:false, revealed:false, timerHandle:null, typed:"" };
  state.screen = "session";
  render(true);
  loadCurrentWord(true);
}

function goHome(){
  clearTimer(); stopSpeak();
  state.screen="home"; state.session=null; render(true);
}
function goVault(){
  clearTimer(); stopSpeak();
  state.screen="vault"; render(true);
}

/* =========================================================
   RENDER HELPERS
========================================================= */
function escapeHtml(s){ return (s||"").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

function renderLetterRow(chars, kind){
  return `<div class="letter-row">` + chars.map(c=>{
    let cls = "letter-box ";
    if(kind==="correct"){
      cls += c.status==="match" ? "match" : "missing";
    } else {
      cls += c.status==="match" ? "match" : "extra";
    }
    return `<div class="${cls}">${escapeHtml(c.ch)}</div>`;
  }).join("") + `</div>`;
}

function globalProgressPct(){
  return Math.round((mastered.length / DB.length) * 100);
}

/* =========================================================
   SCREEN: HOME
========================================================= */
function screenHome(){
  const pct = globalProgressPct();
  const circumference = 2*Math.PI*30;
  const dash = circumference * (pct/100);
  const s = state.setup;
  const vaultCount = Object.keys(vault).length;

  return `
  <div class="screen">
    <div class="hero">
      <div class="card hero-main">
        <div class="eyebrow">Audio dictation drill</div>
        <h1>Stop losing bands to spelling.</h1>
        <p class="lede">Listen once. Type it fast. See exactly which letters betrayed you &mdash; every double consonant, every silent trap &mdash; and drill it until it sticks.</p>
        <div class="hero-stat-row">
          <div class="hero-stat"><div class="icon-wrap">${ICO.book}</div><div><b>${DB.length}</b><span>Trap words</span></div></div>
          <div class="hero-stat"><div class="icon-wrap">${ICO.target}</div><div><b>${stats.attempted}</b><span>Attempted</span></div></div>
          <div class="hero-stat streak"><div class="icon-wrap">${ICO.flame}</div><div><b>${stats.streak||0}</b><span>Day streak</span></div></div>
        </div>
      </div>
      <div class="card progress-card">
        <h3>Database mastery</h3>
        <div class="ring-wrap">
          <svg class="ring" width="72" height="72" viewBox="0 0 76 76">
            <circle cx="38" cy="38" r="30" fill="none" stroke="rgba(33,31,53,0.09)" stroke-width="8"/>
            <circle cx="38" cy="38" r="30" fill="none" stroke="url(#gradring)" stroke-width="8" stroke-linecap="round"
              stroke-dasharray="${circumference}" stroke-dashoffset="${circumference-dash}" transform="rotate(-90 38 38)"/>
            <defs><linearGradient id="gradring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#8A7CF8"/><stop offset="100%" stop-color="#17B8A6"/>
            </linearGradient></defs>
          </svg>
          <div>
            <div class="ring-num">${pct}%</div>
            <div class="ring-label">${mastered.length} / ${DB.length} mastered</div>
          </div>
        </div>
        <p class="small muted">Every unique word you spell correctly counts toward full database mastery.</p>
      </div>
    </div>

    <div class="card setup-card">
      <h2 style="font-size:1.15rem;">Configure your session</h2>
      <p class="muted small" style="margin-top:4px; margin-bottom:22px;">Pick how many words, how hard, and how you want to train.</p>

      <div class="field-group">
        <span class="field-label">Word count</span>
        <div class="pill-row">
          ${[5,10,15,20,30].map(n=>`<button class="pill ${s.count===n?'active':''}" data-count="${n}">${n} words</button>`).join("")}
        </div>
      </div>

      <div class="field-group">
        <span class="field-label">Difficulty</span>
        <div class="pill-row">
          ${[["mixed","Mixed"],["easy","Easy"],["medium","Medium"],["hard","Hard"]].map(([k,label])=>
            `<button class="pill ${s.difficulty===k?'active':''}" data-diff="${k}"><span class="dot ${k}"></span>${label}</button>`
          ).join("")}
        </div>
      </div>

      <div class="field-group">
        <span class="field-label">Mode</span>
        <div class="mode-cards">
          <div class="mode-card ${s.mode==='practice'?'active':''}" data-mode="practice">
            <div class="mc-title">📘 Practice</div>
            <div class="mc-desc">Untimed. Instant letter-by-letter feedback after every word. Best for learning new traps.</div>
          </div>
          <div class="mode-card ${s.mode==='exam'?'active':''}" data-mode="exam">
            <div class="mc-title">⏱ Mock Exam</div>
            <div class="mc-desc">Strict per-word timer. No feedback until the end. Simulates real listening-test pressure.</div>
          </div>
        </div>
        <div class="timer-row ${s.mode==='exam'?'':'hidden'}">
          ${[5,10,15].map(t=>`<button class="pill ${s.timer===t?'active':''}" data-timer="${t}">${t}s per word</button>`).join("")}
        </div>
      </div>

      <div class="cta-row">
        <button class="btn-primary" id="start-btn">Start session ${ICO.arrow}</button>
        <button class="btn-secondary" id="vault-btn">${ICO.vault} Open vault ${vaultCount?`<span class="badge" style="background:var(--error); color:#fff; border-radius:99px; padding:1px 7px; font-size:0.7rem; margin-left:2px;">${vaultCount}</span>`:""}</button>
      </div>
    </div>

    <footer>
      Open-source &middot; runs entirely in your browser &middot; nothing you type ever leaves this device.<br/>
      Press <span class="kbd">Enter</span> to submit a word during a session.
    </footer>
  </div>`;
}

/* =========================================================
   SCREEN: SESSION
========================================================= */
function screenSession(){
  const s = state.session;
  const w = currentWordObj();
  const total = s.words.length;
  const progressPct = Math.round((s.idx/total)*100);

  let feedbackHtml = "";
  if(s.revealed && (s.mode==="practice" || s.isVaultDrill)){
    const last = s.results[s.results.length-1];
    const diff = diffWords(w.word, last.typed);
    feedbackHtml = `
      <div class="feedback-panel">
        <div class="fb-verdict ${diff.isExact?'correct':'incorrect'}">
          ${diff.isExact ? ICO.check : ICO.x}
          ${diff.isExact ? "Correct spelling" : "Not quite &mdash; here's exactly where"}
        </div>
        
        <div class="fb-row-label">Combined word</div>
        <div style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; margin-bottom: 16px; color: var(--ink); letter-spacing: 0.04em;">${escapeHtml(w.word)}</div>

        <div class="fb-row-label">Letter by letter</div>
        ${renderLetterRow(diff.correctChars,"correct")}
        
        ${!diff.isExact && diff.typedChars.length ? `
          <div class="fb-row-label">What you typed</div>
          ${renderLetterRow(diff.typedChars,"typed")}
        ` : ``}
        
        <p class="small" style="margin-top:12px; color:#8A8264;">
          ${diff.isExact ? "Locked in. On to the next one." : "Dashed boxes = letters you missed. Struck-through = wrong letter typed in that spot."}
        </p>
      </div>
    `;
  }

  return `
  <div class="screen">
    <div class="session-head">
      <div class="prog-track"><div class="prog-fill" style="width:${progressPct}%"></div></div>
      <div class="session-meta">
        <span>${s.idx+1} / ${total}</span>
        <span class="mode-tag ${s.mode==='exam' && !s.isVaultDrill ? 'exam':'practice'}">${s.isVaultDrill ? "Vault drill" : (s.mode==='exam' ? "Mock exam":"Practice")}</span>
      </div>
    </div>

    <div class="card stage-card">
      <div class="diff-cat ${w.difficulty}">${w.difficulty}</div>

      <button class="play-btn" id="play-btn" title="Play word">${ICO.play}</button>
      <div class="waveform" id="waveform">${Array.from({length:7}).map(()=>`<span></span>`).join("")}</div>
      <p class="small muted" style="margin-bottom:18px;">Tap the speaker to hear the word again</p>

      ${!s.revealed ? `
        <div class="spell-line">
          <input id="spell-input" class="spell-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="type what you hear">
          <div class="spell-hint">Press Enter to submit</div>
        </div>
        ${s.mode==='exam' && !s.isVaultDrill ? `<div class="timer-bar-wrap"><div class="timer-bar" id="timer-bar"></div></div>` : ``}
        <div class="stage-actions">
          <button class="btn-primary" id="submit-btn">Submit ${ICO.arrow}</button>
          <button class="btn-secondary" id="skip-btn">Skip word <span class="kbd" style="margin-left:6px; background:var(--surface-3); border:none;">Shift+Enter</span></button>
        </div>
      ` : `
        ${feedbackHtml}
        <div class="stage-actions">
          <button class="btn-primary" id="next-btn">${s.idx < total-1 ? "Next word" : "See results"} ${ICO.arrow} <span class="kbd" style="background:rgba(255,255,255,0.2); border:none; color:#fff; margin-left:6px;">Shift+Enter</span></button>
        </div>
      `}
    </div>

    <div style="text-align:center; margin-top:16px;">
      <button class="link-btn" id="quit-btn">${ICO.home} End session early</button>
    </div>
  </div>`;
}

/* =========================================================
   SCREEN: RESULTS
========================================================= */
function screenResults(){
  const s = state.session;
  const total = s.results.length;
  const correctCount = s.results.filter(r=>r.correct).length;
  const pct = total ? Math.round((correctCount/total)*100) : 0;
  const band = predictBand(pct);
  const missed = s.results.filter(r=>!r.correct);

  return `
  <div class="screen">
    <div class="card result-hero">
      <div class="eyebrow" style="justify-content:center;">${s.isVaultDrill ? "Vault drill complete" : (s.mode==='exam' ? "Mock exam report" : "Practice session complete")}</div>
      <h1 style="font-size:1.45rem;">${correctCount} of ${total} spelled correctly</h1>
      <div class="band-badge">
        <div class="big">${band}</div>
        <div class="lbl">Predicted spelling band</div>
      </div>
      <div class="result-stats">
        <div class="result-stat"><b>${pct}%</b><span>Accuracy</span></div>
        <div class="result-stat"><b>${missed.length}</b><span>Sent to vault</span></div>
        <div class="result-stat"><b>${globalProgressPct()}%</b><span>Database mastery</span></div>
      </div>
    </div>

    <div class="card" style="margin-top:16px;">
      <h3 style="font-size:1rem; margin-bottom:14px;">Word by word</h3>
      <div class="scrollable-wrapper">
        <div class="word-review">
          ${s.results.map(r=>`
            <div class="word-review-item">
              <div class="wr-left">
                <div class="wr-status ${r.correct?'ok':'bad'}">${r.correct?ICO.check:ICO.x}</div>
                <div style="min-width:0;">
                  <div class="wr-word">${escapeHtml(r.word)}</div>
                  ${!r.correct ? `<div class="wr-typed">you typed: ${r.typed ? escapeHtml(r.typed) : "&mdash; skipped &mdash;"}</div>` : ``}
                </div>
              </div>
              <div class="diff-cat ${r.difficulty}" style="margin:0;">${r.difficulty}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="cta-row" style="justify-content:center; margin-top:24px;">
      ${missed.length ? `<button class="btn-primary" id="retry-btn">Drill missed words ${ICO.arrow}</button>` : ``}
      <button class="btn-secondary" id="vault-btn-2">${ICO.vault} Open vault</button>
      <button class="btn-ghost" id="home-btn">Back to setup</button>
    </div>
  </div>`;
}

/* =========================================================
   SCREEN: VAULT
========================================================= */
function screenVault(){
  const entries = Object.entries(vault).sort((a,b)=> b[1].added - a[1].added);
  return `
  <div class="screen">
    <div class="vault-header">
      <div>
        <button class="link-btn" id="back-home" style="padding-left:0; margin-bottom:8px;">${ICO.home} Back</button>
        <h1 style="font-size:1.4rem;">Mistake Vault</h1>
        <p class="muted small">Words you've misspelled, waiting for 3 correct spellings in a row.</p>
      </div>
      ${entries.length ? `<button class="btn-primary" id="drill-btn">Drill vault (${entries.length}) ${ICO.arrow}</button>` : ``}
    </div>

    <div class="card">
      ${entries.length === 0 ? `
        <div class="empty-state">
          ${ICO.empty}
          <p><b style="color:var(--ink);">Your vault is empty.</b></p>
          <p class="small">Misspelled words land here automatically. Perfect score, or a fresh start.</p>
        </div>
      ` : `
        <div class="scrollable-wrapper">
          <div class="vault-list">
            ${entries.map(([word,meta])=>`
              <div class="vault-item">
                <div>
                  <div class="vi-word">${escapeHtml(word)}</div>
                  <div class="vi-strikes">
                    ${[0,1,2].map(i=>`<div class="strike-dot ${i<meta.strikes?'filled':''}"></div>`).join("")}
                  </div>
                </div>
                <div class="vi-actions">
                  <div class="diff-cat ${meta.difficulty}" style="margin:0;">${meta.difficulty}</div>
                  <button class="vi-remove" data-remove="${escapeHtml(word)}" title="Remove from vault">${ICO.trash}</button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `}

      <div class="manual-add">
        <span class="field-label">Add a word you misspelled offline</span>
        <div class="manual-add-row">
          <input id="manual-word" type="text" placeholder="e.g. accommodation" autocomplete="off" autocapitalize="off" spellcheck="false">
          <button class="btn-secondary" id="manual-add-btn">Add to vault</button>
        </div>
        <div class="manual-diff-row">
          <span class="field-label">Difficulty</span>
          ${[["easy","Easy"],["medium","Medium"],["hard","Hard"]].map(([k,label])=>
            `<button class="pill sm ${state.manualDiff===k?'active':''}" data-manual-diff="${k}"><span class="dot ${k}"></span>${label}</button>`
          ).join("")}
        </div>
      </div>
    </div>
  </div>`;
}

/* =========================================================
   MAIN RENDER
========================================================= */
function render(scrollTop){
  const app = document.getElementById("app");
  let html = "";
  if(state.screen==="home") html = topbar() + screenHome();
  else if(state.screen==="session") html = topbar(true) + screenSession();
  else if(state.screen==="results") html = topbar(true) + screenResults();
  else if(state.screen==="vault") html = topbar() + screenVault();
  app.innerHTML = html;
  bindEvents();
  if(scrollTop) window.scrollTo({ top:0, behavior: "smooth" });
}

function topbar(minimal){
  const vaultCount = Object.keys(vault).length;
  return `
  <div class="topbar">
    <button class="brand" id="brand-home">
      <div class="brand-mark">${ICO.wave}</div>
      <div class="brand-text">
        <div class="name">IELTS Spelling Master</div>
        <div class="tag">Audio dictation trainer</div>
      </div>
    </button>
    ${minimal ? `` : `
    <div class="nav-actions">
      <button class="icon-btn" id="tb-vault">${ICO.vault} Vault ${vaultCount?`<span class="badge">${vaultCount}</span>`:``}</button>
    </div>`}
  </div>`;
}

/* =========================================================
   EVENT BINDING
========================================================= */
function bindEvents(){
  const q = sel=>document.querySelector(sel);
  const qa = sel=>Array.from(document.querySelectorAll(sel));

  const brand = q("#brand-home"); if(brand) brand.onclick = goHome;
  const tbVault = q("#tb-vault"); if(tbVault) tbVault.onclick = goVault;
  
  // Setup global shift+enter shortcut for Skip & Next button
  document.removeEventListener("keydown", window.sessionKeyHandler);
  window.sessionKeyHandler = function(e) {
    if (state.screen === "session" && e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      if (!state.session.revealed) {
        const skipBtn = q("#skip-btn");
        if(skipBtn) skipBtn.click();
      } else {
        const nextBtn = q("#next-btn");
        if(nextBtn) nextBtn.click();
      }
    }
  };
  document.addEventListener("keydown", window.sessionKeyHandler);

  if(state.screen==="home"){
    qa("[data-count]").forEach(b=> b.onclick = ()=>{ state.setup.count = +b.dataset.count; render(); });
    qa("[data-diff]").forEach(b=> b.onclick = ()=>{ state.setup.difficulty = b.dataset.diff; render(); });
    qa("[data-mode]").forEach(b=> b.onclick = ()=>{ state.setup.mode = b.dataset.mode; render(); });
    qa("[data-timer]").forEach(b=> b.onclick = ()=>{ state.setup.timer = +b.dataset.timer; render(); });
    const startBtn = q("#start-btn"); if(startBtn) startBtn.onclick = startSession;
    const vaultBtn = q("#vault-btn"); if(vaultBtn) vaultBtn.onclick = goVault;
  }

  if(state.screen==="session"){
    const playBtn = q("#play-btn"); if(playBtn) playBtn.onclick = playCurrent;
    const input = q("#spell-input");
    if(input){
      input.addEventListener("keydown", e=>{ 
        if(e.key==="Enter" && !e.shiftKey){ 
          e.preventDefault(); 
          submitAnswer(false); 
        } 
      });
      input.focus();
    }
    const submitBtn = q("#submit-btn"); if(submitBtn) submitBtn.onclick = ()=>submitAnswer(false);
    const skipBtn = q("#skip-btn"); if(skipBtn) skipBtn.onclick = skipWord;
    const nextBtn = q("#next-btn"); if(nextBtn) nextBtn.onclick = nextWord;
    const quitBtn = q("#quit-btn"); if(quitBtn) quitBtn.onclick = ()=>{
      if(confirm("End this session early? Progress so far will still be recorded.")){
        clearTimer(); stopSpeak();
        state.screen="results"; render(true);
      }
    };
  }

  if(state.screen==="results"){
    const retryBtn = q("#retry-btn"); if(retryBtn) retryBtn.onclick = retryMissed;
    const vaultBtn2 = q("#vault-btn-2"); if(vaultBtn2) vaultBtn2.onclick = goVault;
    const homeBtn = q("#home-btn"); if(homeBtn) homeBtn.onclick = goHome;
  }

  if(state.screen==="vault"){
    const backHome = q("#back-home"); if(backHome) backHome.onclick = goHome;
    const drillBtn = q("#drill-btn"); if(drillBtn) drillBtn.onclick = startVaultDrill;
    qa("[data-remove]").forEach(b=> b.onclick = ()=>{
      delete vault[b.dataset.remove];
      persistAll();
      render();
    });
    qa("[data-manual-diff]").forEach(b=> b.onclick = ()=>{ state.manualDiff = b.dataset.manualDiff; render(); });
    const manualBtn = q("#manual-add-btn");
    const manualInput = q("#manual-word");
    function doManualAdd(){
      const val = (manualInput.value||"").trim().toLowerCase();
      if(!val || !/^[a-z\-']+$/.test(val)) return;
      addToVault(val, state.manualDiff);
      manualInput.value = "";
      render();
      const refocus = document.getElementById("manual-word");
      if(refocus) refocus.focus();
    }
    if(manualBtn) manualBtn.onclick = doManualAdd;
    if(manualInput) manualInput.addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); doManualAdd(); } });
  }
}

render();

})();