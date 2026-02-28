/* ============================================
   Physics Quiz Game — Game Engine
   State machine, UI, timer, sounds, confetti,
   power-ups, keyboard controls, bilingual
   ============================================ */

// ─── Language System ───
const LANG = {
  pt: {
    gameTitle: 'Physics Quiz',
    subtitle: 'Batalha de Equipes na Sala de Aula',
    teamNames: 'Nomes das Equipes',
    teamBlue: 'Time Azul',
    teamOrange: 'Time Laranja',
    gameSettings: 'Configuracoes do Jogo',
    rounds: 'Rodadas',
    timerLabel: 'Tempo por Pergunta',
    difficulty: 'Dificuldade',
    diffAll: 'Todas',
    diffEasy: 'Facil',
    diffMedium: 'Media',
    diffHard: 'Dificil',
    categories: 'Categorias',
    catCinematica: 'Cinematica e Mecanica',
    catEnergia: 'Energia e Trabalho',
    catTermodinamica: 'Termodinamica',
    catOndas: 'Ondas e Som',
    catOptica: 'Optica',
    catEletricidade: 'Eletricidade e Magnetismo',
    catModerna: 'Fisica Moderna',
    startGame: 'Iniciar Jogo',
    nextQuestion: 'Proxima Pergunta',
    playAgain: 'Jogar Novamente',
    explanation: 'Explicacao',
    tiebreaker: 'Empate! Pergunta de Desempate!',
    tiebreakerInstruction: 'Primeira equipe a responder corretamente vence!',
    puDouble: 'Pontos Duplos',
    puTime: 'Tempo Extra',
    puEliminate: 'Eliminar Duas',
    roundOf: 'Rodada {current} de {total}',
    teamTurn: 'Vez do {team}!',
    correct: 'Correto!',
    wrong: 'Errado!',
    timeUp: 'Tempo Esgotado!',
    winner: '{team} Venceu!',
    tie: 'Empate!',
    basePoints: 'Base: {pts}',
    timeBonus: 'Bonus tempo: +{pts}',
    streakBonus: 'Sequencia x{mult}',
    doubleBonus: 'Pontos Duplos: x2',
    streak: 'sequencia',
    diffEasyLabel: 'Facil',
    diffMediumLabel: 'Media',
    diffHardLabel: 'Dificil',
    powerupsAvailable: 'Power-ups disponiveis:',
    teamWinsCorrect: '{team} acertou e venceu!',
    teamWinsWrong: '{team} errou! {other} vence!',
    noOneBuzzed: 'Ninguem respondeu! Nova pergunta...',
  },
  en: {
    gameTitle: 'Physics Quiz',
    subtitle: 'Classroom Team Battle',
    teamNames: 'Team Names',
    teamBlue: 'Blue Team',
    teamOrange: 'Orange Team',
    gameSettings: 'Game Settings',
    rounds: 'Rounds',
    timerLabel: 'Time per Question',
    difficulty: 'Difficulty',
    diffAll: 'All',
    diffEasy: 'Easy',
    diffMedium: 'Medium',
    diffHard: 'Hard',
    categories: 'Categories',
    catCinematica: 'Kinematics & Mechanics',
    catEnergia: 'Energy & Work',
    catTermodinamica: 'Thermodynamics',
    catOndas: 'Waves & Sound',
    catOptica: 'Optics',
    catEletricidade: 'Electricity & Magnetism',
    catModerna: 'Modern Physics',
    startGame: 'Start Game',
    nextQuestion: 'Next Question',
    playAgain: 'Play Again',
    explanation: 'Explanation',
    tiebreaker: 'Tie! Tiebreaker Question!',
    tiebreakerInstruction: 'First team to answer correctly wins!',
    puDouble: 'Double Points',
    puTime: 'Extra Time',
    puEliminate: 'Eliminate Two',
    roundOf: 'Round {current} of {total}',
    teamTurn: '{team}\'s Turn!',
    correct: 'Correct!',
    wrong: 'Wrong!',
    timeUp: 'Time\'s Up!',
    winner: '{team} Wins!',
    tie: 'It\'s a Tie!',
    basePoints: 'Base: {pts}',
    timeBonus: 'Time bonus: +{pts}',
    streakBonus: 'Streak x{mult}',
    doubleBonus: 'Double Points: x2',
    streak: 'streak',
    diffEasyLabel: 'Easy',
    diffMediumLabel: 'Medium',
    diffHardLabel: 'Hard',
    powerupsAvailable: 'Power-ups available:',
    teamWinsCorrect: '{team} got it right and wins!',
    teamWinsWrong: '{team} got it wrong! {other} wins!',
    noOneBuzzed: 'No one answered! New question...',
  }
};

// ─── Game State ───
const Game = {
  state: 'SETUP', // SETUP, READY, QUESTION, ANSWER_REVEAL, SCORE_UPDATE, GAME_OVER, TIEBREAKER
  lang: 'pt',
  teams: {
    blue: { name: 'Time Azul', score: 0, streak: 0, powerups: { double: true, time: true, eliminate: true } },
    orange: { name: 'Time Laranja', score: 0, streak: 0, powerups: { double: true, time: true, eliminate: true } },
  },
  currentTeam: 'blue',
  rounds: 10,
  currentRound: 0,
  timerDuration: 30,
  timerRemaining: 30,
  timerInterval: null,
  difficulty: 'all',
  categories: ['cinematica', 'energia', 'termodinamica', 'ondas', 'optica', 'eletricidade', 'moderna'],
  questionPool: [],
  usedQuestionIds: new Set(),
  currentQuestion: null,
  shuffledOptions: [],
  correctShuffledIndex: -1,
  selectedAnswer: null,
  activePowerup: null,
  answered: false,
  // Tiebreaker
  tbBuzzedTeam: null,
  tbQuestion: null,
  tbTimerInterval: null,
  tbTimerRemaining: 30,
};

// ─── Sound Engine (Web Audio API) ───
const Sound = {
  ctx: null,

  init() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },

  ensure() {
    if (!this.ctx) this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },

  play(type) {
    this.ensure();
    const now = this.ctx.currentTime;
    switch (type) {
      case 'correct': this._tone(523.25, 0.15, 'sine', 0.3); this._tone(659.25, 0.15, 'sine', 0.3, 0.15); this._tone(783.99, 0.2, 'sine', 0.3, 0.3); break;
      case 'wrong': this._tone(200, 0.3, 'sawtooth', 0.15); this._tone(150, 0.4, 'sawtooth', 0.15, 0.15); break;
      case 'tick': this._tone(800, 0.05, 'sine', 0.1); break;
      case 'tick-urgent': this._tone(1000, 0.08, 'square', 0.12); break;
      case 'countdown': this._tone(440, 0.15, 'sine', 0.2); break;
      case 'go': this._tone(880, 0.3, 'sine', 0.25); break;
      case 'powerup': this._sweep(400, 1200, 0.3, 'sine', 0.2); break;
      case 'buzz': this._tone(300, 0.2, 'sine', 0.3); this._tone(500, 0.2, 'sine', 0.3, 0.1); break;
      case 'fanfare':
        this._tone(523.25, 0.2, 'sine', 0.25);
        this._tone(659.25, 0.2, 'sine', 0.25, 0.2);
        this._tone(783.99, 0.2, 'sine', 0.25, 0.4);
        this._tone(1046.5, 0.4, 'sine', 0.3, 0.6);
        break;
      case 'eliminate': this._sweep(800, 200, 0.25, 'sawtooth', 0.1); break;
    }
  },

  _tone(freq, dur, type, vol, delay = 0) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, this.ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + dur);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + dur + 0.05);
  },

  _sweep(startFreq, endFreq, dur, type, vol) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(endFreq, this.ctx.currentTime + dur);
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + dur + 0.05);
  },
};

// ─── Confetti Engine ───
const Confetti = {
  canvas: null,
  ctx: null,
  particles: [],
  running: false,
  raf: null,

  init() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
  },

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  start() {
    this.particles = [];
    const colors = ['#3b82f6', '#f97316', '#22c55e', '#fbbf24', '#a855f7', '#ef4444', '#ec4899'];
    for (let i = 0; i < 150; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
      });
    }
    this.running = true;
    this._loop();
  },

  stop() {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles = [];
  },

  _loop() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let alive = false;
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.vy += 0.05;
      if (p.y > this.canvas.height + 20) {
        p.opacity -= 0.02;
      }
      if (p.opacity <= 0) continue;
      alive = true;
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      this.ctx.restore();
    }
    if (alive) {
      this.raf = requestAnimationFrame(() => this._loop());
    } else {
      this.stop();
    }
  },
};

// ─── Helper Functions ───
function t(key, replacements = {}) {
  let str = LANG[Game.lang][key] || key;
  for (const [k, v] of Object.entries(replacements)) {
    str = str.replace(`{${k}}`, v);
  }
  return str;
}

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const screen = $(`#screen-${id}`);
  if (screen) {
    screen.classList.remove('active');
    // Force reflow for animation
    void screen.offsetWidth;
    screen.classList.add('active');
  }
}

function updateLangUI() {
  $$('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (LANG[Game.lang][key]) {
      el.textContent = LANG[Game.lang][key];
    }
  });
  // Update team input defaults
  if (Game.lang === 'en') {
    if ($('#team-blue-name').value === 'Time Azul') $('#team-blue-name').value = 'Blue Team';
    if ($('#team-orange-name').value === 'Time Laranja') $('#team-orange-name').value = 'Orange Team';
  } else {
    if ($('#team-blue-name').value === 'Blue Team') $('#team-blue-name').value = 'Time Azul';
    if ($('#team-orange-name').value === 'Orange Team') $('#team-orange-name').value = 'Time Laranja';
  }
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Setup Screen Logic ───
function initSetup() {
  // Button groups
  $$('.btn-group').forEach(group => {
    group.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // Language toggle
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      Game.lang = btn.dataset.langval;
      updateLangUI();
    });
  });

  // Start button
  $('#btn-start').addEventListener('click', startGame);
  $('#btn-play-again').addEventListener('click', resetGame);
  $('#btn-next').addEventListener('click', nextQuestion);
}

function startGame() {
  Sound.ensure();

  // Read settings
  Game.teams.blue.name = $('#team-blue-name').value.trim() || (Game.lang === 'pt' ? 'Time Azul' : 'Blue Team');
  Game.teams.orange.name = $('#team-orange-name').value.trim() || (Game.lang === 'pt' ? 'Time Laranja' : 'Orange Team');

  const roundsBtn = $('#rounds-group .option-btn.active');
  Game.rounds = parseInt(roundsBtn.dataset.value);

  const timerBtn = $('#timer-group .option-btn.active');
  Game.timerDuration = parseInt(timerBtn.dataset.value);

  const diffBtn = $('#difficulty-group .option-btn.active');
  Game.difficulty = diffBtn.dataset.value;

  Game.categories = [];
  $$('.category-check input').forEach(cb => {
    if (cb.checked) Game.categories.push(cb.value);
  });

  if (Game.categories.length === 0) {
    Game.categories = ['cinematica', 'energia', 'termodinamica', 'ondas', 'optica', 'eletricidade', 'moderna'];
  }

  // Reset game state
  Game.teams.blue.score = 0;
  Game.teams.orange.score = 0;
  Game.teams.blue.streak = 0;
  Game.teams.orange.streak = 0;
  Game.teams.blue.powerups = { double: true, time: true, eliminate: true };
  Game.teams.orange.powerups = { double: true, time: true, eliminate: true };
  Game.currentRound = 0;
  Game.currentTeam = 'blue';
  Game.usedQuestionIds = new Set();
  Game.activePowerup = null;

  // Build question pool
  buildQuestionPool();

  // Show scoreboard
  updateScoreboard();
  $('#scoreboard').classList.remove('hidden');

  // Start first round
  Game.state = 'READY';
  showReadyScreen();
}

function buildQuestionPool() {
  let pool = QUESTIONS.filter(q => Game.categories.includes(q.category));
  if (Game.difficulty !== 'all') {
    pool = pool.filter(q => q.difficulty === Game.difficulty);
  }
  Game.questionPool = shuffleArray(pool);
}

function updateScoreboard() {
  $('#sb-blue-name').textContent = Game.teams.blue.name;
  $('#sb-orange-name').textContent = Game.teams.orange.name;
  $('#sb-blue-score').textContent = Game.teams.blue.score;
  $('#sb-orange-score').textContent = Game.teams.orange.score;

  // Streak badges
  const blueStreak = Game.teams.blue.streak;
  const orangeStreak = Game.teams.orange.streak;
  $('#sb-blue-streak').textContent = blueStreak >= 2 ? `🔥${blueStreak}` : '';
  $('#sb-orange-streak').textContent = orangeStreak >= 2 ? `🔥${orangeStreak}` : '';

  if (blueStreak >= 2) $('#sb-blue-streak').style.animation = 'streakFire 0.5s ease';
  else $('#sb-blue-streak').style.animation = '';
  if (orangeStreak >= 2) $('#sb-orange-streak').style.animation = 'streakFire 0.5s ease';
  else $('#sb-orange-streak').style.animation = '';

  // Round indicator
  $('#round-indicator').textContent = t('roundOf', { current: Game.currentRound + 1, total: Game.rounds });
}

// ─── Ready Screen ───
function showReadyScreen() {
  const team = Game.teams[Game.currentTeam];
  const readyName = $('#ready-team-name');
  readyName.textContent = t('teamTurn', { team: team.name });
  readyName.className = 'ready-team ' + (Game.currentTeam === 'blue' ? 'blue-team' : 'orange-team');

  // Show available power-ups
  const puDiv = $('#ready-powerups');
  puDiv.innerHTML = '';
  const puNames = { double: t('puDouble'), time: t('puTime'), eliminate: t('puEliminate') };
  for (const [key, name] of Object.entries(puNames)) {
    const span = document.createElement('span');
    span.className = 'pu-preview' + (team.powerups[key] ? '' : ' used');
    span.textContent = name;
    puDiv.appendChild(span);
  }

  showScreen('ready');
  startCountdown();
}

function startCountdown() {
  let count = 3;
  const el = $('#countdown-number');
  el.textContent = count;

  Sound.play('countdown');

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      el.textContent = count;
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'zoomIn 0.5s ease';
      Sound.play('countdown');
    } else if (count === 0) {
      el.textContent = '🚀';
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'zoomIn 0.5s ease';
      Sound.play('go');
    } else {
      clearInterval(interval);
      showQuestionScreen();
    }
  }, 800);
}

// ─── Question Screen ───
function getNextQuestion() {
  // Find an unused question
  let question = null;
  for (const q of Game.questionPool) {
    if (!Game.usedQuestionIds.has(q.id)) {
      question = q;
      break;
    }
  }
  // If all used, reshuffle and reset
  if (!question) {
    Game.usedQuestionIds.clear();
    Game.questionPool = shuffleArray(Game.questionPool);
    question = Game.questionPool[0];
  }
  Game.usedQuestionIds.add(question.id);
  return question;
}

function showQuestionScreen() {
  Game.state = 'QUESTION';
  Game.answered = false;
  Game.selectedAnswer = null;
  Game.activePowerup = null;

  const q = getNextQuestion();
  Game.currentQuestion = q;

  // Get question text in current language
  const questionText = Game.lang === 'pt' ? q.question_pt : q.question_en;
  const options = Game.lang === 'pt' ? [...q.options_pt] : [...q.options_en];

  // Shuffle options and track correct index
  const indices = [0, 1, 2, 3];
  const shuffled = shuffleArray(indices);
  Game.shuffledOptions = shuffled.map(i => options[i]);
  Game.correctShuffledIndex = shuffled.indexOf(q.correct);

  // Category info
  const catInfo = CATEGORY_INFO[q.category];
  $('#q-cat-icon').textContent = catInfo.icon;
  $('#q-cat-name').textContent = Game.lang === 'pt' ? catInfo.name_pt : catInfo.name_en;

  // Difficulty badge
  const diffEl = $('#q-difficulty');
  diffEl.textContent = t(`diff${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}Label`);
  diffEl.className = 'difficulty-badge ' + q.difficulty;

  // Question text
  $('#q-text').textContent = questionText;

  // Options
  const grid = $('#options-grid');
  const cards = grid.querySelectorAll('.option-card');
  const keys = ['A', 'B', 'C', 'D'];
  cards.forEach((card, i) => {
    card.querySelector('.option-key').textContent = keys[i];
    card.querySelector('.option-text').textContent = Game.shuffledOptions[i];
    card.className = 'option-card';
    card.dataset.index = i;
    card.onclick = () => selectAnswer(i);
  });

  // Power-ups
  setupPowerups();

  // Update scoreboard
  updateScoreboard();

  // Hide active power-up indicator
  $('#active-powerup').classList.add('hidden');

  // Timer
  Game.timerRemaining = Game.timerDuration;
  showScreen('question');
  startTimer();
}

function setupPowerups() {
  const team = Game.teams[Game.currentTeam];
  const teamClass = Game.currentTeam === 'blue' ? 'team-blue' : 'team-orange';

  ['double', 'time', 'eliminate'].forEach(pu => {
    const btn = $(`#pu-${pu === 'double' ? 'double' : pu === 'time' ? 'time' : 'eliminate'}`);
    btn.className = 'powerup-btn';
    if (!team.powerups[pu]) {
      btn.classList.add('used');
    } else {
      btn.classList.add(teamClass);
    }
    btn.onclick = () => activatePowerup(pu);
  });
}

function activatePowerup(type) {
  if (Game.answered || Game.activePowerup) return;
  const team = Game.teams[Game.currentTeam];
  if (!team.powerups[type]) return;

  team.powerups[type] = false;
  Game.activePowerup = type;

  Sound.play('powerup');

  // Highlight the active power-up button
  const btnId = type === 'double' ? 'pu-double' : type === 'time' ? 'pu-time' : 'pu-eliminate';
  $(`#${btnId}`).classList.add('active-pu');
  $(`#${btnId}`).classList.remove('team-blue', 'team-orange');

  // Show indicator
  const indicator = $('#active-powerup');
  const puNames = { double: t('puDouble'), time: t('puTime'), eliminate: t('puEliminate') };
  $('#active-pu-text').textContent = `⚡ ${puNames[type]}`;
  indicator.classList.remove('hidden');

  // Apply power-up effects
  if (type === 'time') {
    Game.timerRemaining += 15;
    updateTimerDisplay();
  }

  if (type === 'eliminate') {
    eliminateTwoOptions();
  }
}

function eliminateTwoOptions() {
  Sound.play('eliminate');
  const cards = $('#options-grid').querySelectorAll('.option-card');
  // Find wrong option indices
  const wrongIndices = [];
  cards.forEach((card, i) => {
    if (i !== Game.correctShuffledIndex) wrongIndices.push(i);
  });
  // Randomly pick 2 wrong options to eliminate
  const toEliminate = shuffleArray(wrongIndices).slice(0, 2);
  toEliminate.forEach(i => {
    cards[i].classList.add('eliminated');
  });
}

// ─── Timer ───
function startTimer() {
  clearInterval(Game.timerInterval);
  updateTimerDisplay();

  const circumference = 2 * Math.PI * 54; // r=54 from SVG
  const totalTime = Game.timerRemaining;

  Game.timerInterval = setInterval(() => {
    Game.timerRemaining -= 1;

    if (Game.timerRemaining <= 0) {
      Game.timerRemaining = 0;
      clearInterval(Game.timerInterval);
      updateTimerDisplay();
      if (!Game.answered) {
        timeExpired();
      }
      return;
    }

    updateTimerDisplay();

    // Sound ticks
    if (Game.timerRemaining <= 5) {
      Sound.play('tick-urgent');
    } else if (Game.timerRemaining <= 10) {
      Sound.play('tick');
    }
  }, 1000);
}

function updateTimerDisplay() {
  const circumference = 2 * Math.PI * 54;
  const totalForDisplay = Game.activePowerup === 'time' ? Game.timerDuration + 15 : Game.timerDuration;
  const fraction = Game.timerRemaining / totalForDisplay;
  const offset = circumference * (1 - fraction);

  const fill = $('#timer-fill');
  const text = $('#timer-text');

  fill.style.strokeDasharray = circumference;
  fill.style.strokeDashoffset = offset;

  text.textContent = Game.timerRemaining;

  if (Game.timerRemaining <= 5) {
    fill.classList.add('urgent');
    text.classList.add('urgent');
  } else {
    fill.classList.remove('urgent');
    text.classList.remove('urgent');
  }
}

function timeExpired() {
  Game.answered = true;
  Game.selectedAnswer = -1;

  clearInterval(Game.timerInterval);
  Sound.play('wrong');

  // Reset streak
  Game.teams[Game.currentTeam].streak = 0;

  // Show reveal
  showRevealScreen(false, true);
}

// ─── Answer Selection ───
function selectAnswer(index) {
  if (Game.answered) return;
  Game.answered = true;
  Game.selectedAnswer = index;

  clearInterval(Game.timerInterval);

  const isCorrect = index === Game.correctShuffledIndex;

  // Highlight options
  const cards = $('#options-grid').querySelectorAll('.option-card');
  cards.forEach((card, i) => {
    if (i === Game.correctShuffledIndex) {
      card.classList.add('correct');
    }
    if (i === index && !isCorrect) {
      card.classList.add('wrong');
    }
    if (i !== index && i !== Game.correctShuffledIndex) {
      card.classList.add('disabled');
    }
  });

  if (isCorrect) {
    Sound.play('correct');
  } else {
    Sound.play('wrong');
  }

  // Brief delay then show reveal
  setTimeout(() => {
    showRevealScreen(isCorrect, false);
  }, 1000);
}

// ─── Reveal Screen ───
function showRevealScreen(isCorrect, isTimeout) {
  Game.state = 'ANSWER_REVEAL';

  const q = Game.currentQuestion;
  const team = Game.teams[Game.currentTeam];

  // Result header
  const resultDiv = $('#reveal-result');
  const iconEl = $('#reveal-icon');
  const textEl = $('#reveal-text');

  if (isTimeout) {
    resultDiv.className = 'reveal-result is-timeout';
    iconEl.textContent = '⏰';
    textEl.textContent = t('timeUp');
  } else if (isCorrect) {
    resultDiv.className = 'reveal-result is-correct';
    iconEl.textContent = '✓';
    textEl.textContent = t('correct');
  } else {
    resultDiv.className = 'reveal-result is-wrong';
    iconEl.textContent = '✗';
    textEl.textContent = t('wrong');
  }

  // Reveal options
  const revealDiv = $('#reveal-options');
  revealDiv.innerHTML = '';
  const keys = ['A', 'B', 'C', 'D'];
  Game.shuffledOptions.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'reveal-option';
    if (i === Game.correctShuffledIndex) div.classList.add('is-correct');
    if (i === Game.selectedAnswer && i !== Game.correctShuffledIndex) {
      div.classList.add('is-selected', 'is-wrong-choice');
    }
    div.innerHTML = `<span class="option-key">${keys[i]}</span><span>${opt}</span>`;
    revealDiv.appendChild(div);
  });

  // Explanation
  const explanation = Game.lang === 'pt' ? q.explanation_pt : q.explanation_en;
  $('#explanation-text').textContent = explanation;

  // Calculate points
  let points = 0;
  let breakdown = [];

  if (isCorrect) {
    // Base points
    const base = 100;
    breakdown.push(t('basePoints', { pts: base }));

    // Time bonus
    const timeBonus = Math.round((Game.timerRemaining / Game.timerDuration) * 50);
    if (timeBonus > 0) breakdown.push(t('timeBonus', { pts: timeBonus }));

    points = base + timeBonus;

    // Streak
    team.streak++;
    let mult = 1;
    if (team.streak >= 6) mult = 3;
    else if (team.streak >= 5) mult = 2.5;
    else if (team.streak >= 4) mult = 2;
    else if (team.streak >= 3) mult = 1.5;

    if (mult > 1) {
      breakdown.push(t('streakBonus', { mult }));
      points = Math.round(points * mult);
    }

    // Double points power-up
    if (Game.activePowerup === 'double') {
      breakdown.push(t('doubleBonus'));
      points *= 2;
    }

    team.score += points;
  } else {
    team.streak = 0;
  }

  // Points display
  const pointsVal = $('#points-value');
  pointsVal.textContent = isCorrect ? `+${points}` : '+0';
  pointsVal.className = 'points-value' + (isCorrect ? '' : ' zero');

  $('#points-breakdown').textContent = breakdown.join(' | ');

  // Update scoreboard
  updateScoreboard();

  showScreen('reveal');
}

// ─── Next Question / Game Flow ───
function nextQuestion() {
  Game.currentRound++;

  if (Game.currentRound >= Game.rounds) {
    checkGameOver();
    return;
  }

  // Switch teams
  Game.currentTeam = Game.currentTeam === 'blue' ? 'orange' : 'blue';
  Game.state = 'READY';
  showReadyScreen();
}

function checkGameOver() {
  const blueScore = Game.teams.blue.score;
  const orangeScore = Game.teams.orange.score;

  if (blueScore === orangeScore) {
    startTiebreaker();
  } else {
    showGameOver();
  }
}

function showGameOver() {
  Game.state = 'GAME_OVER';
  clearInterval(Game.timerInterval);

  const blueScore = Game.teams.blue.score;
  const orangeScore = Game.teams.orange.score;

  const winnerText = $('#winner-text');
  if (blueScore > orangeScore) {
    winnerText.textContent = t('winner', { team: Game.teams.blue.name });
    winnerText.className = 'winner-text blue-winner';
    $('#final-blue').classList.add('winner-highlight');
    $('#final-orange').classList.remove('winner-highlight');
  } else {
    winnerText.textContent = t('winner', { team: Game.teams.orange.name });
    winnerText.className = 'winner-text orange-winner';
    $('#final-orange').classList.add('winner-highlight');
    $('#final-blue').classList.remove('winner-highlight');
  }

  $('#final-blue-name').textContent = Game.teams.blue.name;
  $('#final-blue-score').textContent = blueScore;
  $('#final-orange-name').textContent = Game.teams.orange.name;
  $('#final-orange-score').textContent = orangeScore;

  // Hide scoreboard
  $('#scoreboard').classList.add('hidden');

  showScreen('gameover');

  // Fanfare + confetti
  Sound.play('fanfare');
  Confetti.start();
}

// ─── Tiebreaker ───
function startTiebreaker() {
  Game.state = 'TIEBREAKER';
  Game.tbBuzzedTeam = null;

  // Get a question
  Game.tbQuestion = getNextQuestion();
  const q = Game.tbQuestion;

  const questionText = Game.lang === 'pt' ? q.question_pt : q.question_en;
  const options = Game.lang === 'pt' ? [...q.options_pt] : [...q.options_en];

  // Shuffle options
  const indices = [0, 1, 2, 3];
  const shuffled = shuffleArray(indices);
  const shuffledOpts = shuffled.map(i => options[i]);
  const correctIdx = shuffled.indexOf(q.correct);

  // Store for checking
  Game.tbShuffledOptions = shuffledOpts;
  Game.tbCorrectIndex = correctIdx;

  // Set question text
  $('#tb-text').textContent = questionText;

  // Set options
  const cards = $('#tb-options-grid').querySelectorAll('.option-card');
  const keys = ['A', 'B', 'C', 'D'];
  cards.forEach((card, i) => {
    card.querySelector('.option-key').textContent = keys[i];
    card.querySelector('.option-text').textContent = shuffledOpts[i];
    card.className = 'option-card';
    card.onclick = null; // Disable direct clicks — must buzz in first
  });

  // Setup buzz buttons
  $('#buzz-blue-name').textContent = Game.teams.blue.name;
  $('#buzz-orange-name').textContent = Game.teams.orange.name;

  const buzzBlue = $('#buzz-blue');
  const buzzOrange = $('#buzz-orange');
  buzzBlue.className = 'buzz-btn buzz-blue';
  buzzOrange.className = 'buzz-btn buzz-orange';
  buzzBlue.onclick = () => buzzIn('blue');
  buzzOrange.onclick = () => buzzIn('orange');

  // Timer
  Game.tbTimerRemaining = Game.timerDuration;
  updateTbTimerDisplay();

  showScreen('tiebreaker');
  startTbTimer();
}

function buzzIn(teamKey) {
  if (Game.tbBuzzedTeam) return;
  Game.tbBuzzedTeam = teamKey;

  Sound.play('buzz');

  // Highlight buzzed team
  const buzzBtn = teamKey === 'blue' ? $('#buzz-blue') : $('#buzz-orange');
  const otherBtn = teamKey === 'blue' ? $('#buzz-orange') : $('#buzz-blue');
  buzzBtn.classList.add('buzzed');
  otherBtn.classList.add('disabled-buzz');

  // Enable option clicks for the buzzed team
  const cards = $('#tb-options-grid').querySelectorAll('.option-card');
  cards.forEach((card, i) => {
    card.onclick = () => tbAnswer(i);
  });
}

function tbAnswer(index) {
  if (!Game.tbBuzzedTeam) return;

  clearInterval(Game.tbTimerInterval);

  const isCorrect = index === Game.tbCorrectIndex;
  const cards = $('#tb-options-grid').querySelectorAll('.option-card');

  // Highlight
  cards.forEach((card, i) => {
    card.onclick = null;
    if (i === Game.tbCorrectIndex) card.classList.add('correct');
    if (i === index && !isCorrect) card.classList.add('wrong');
  });

  if (isCorrect) {
    Sound.play('correct');
    // Buzzed team wins — give them 1 point advantage
    Game.teams[Game.tbBuzzedTeam].score += 100;
    setTimeout(() => showGameOver(), 1500);
  } else {
    Sound.play('wrong');
    // Other team wins
    const otherTeam = Game.tbBuzzedTeam === 'blue' ? 'orange' : 'blue';
    Game.teams[otherTeam].score += 100;
    setTimeout(() => showGameOver(), 1500);
  }
}

function startTbTimer() {
  clearInterval(Game.tbTimerInterval);

  Game.tbTimerInterval = setInterval(() => {
    Game.tbTimerRemaining -= 1;

    if (Game.tbTimerRemaining <= 0) {
      Game.tbTimerRemaining = 0;
      clearInterval(Game.tbTimerInterval);
      updateTbTimerDisplay();

      if (!Game.tbBuzzedTeam) {
        // No one buzzed — new tiebreaker question
        setTimeout(() => startTiebreaker(), 2000);
      }
      return;
    }

    updateTbTimerDisplay();

    if (Game.tbTimerRemaining <= 5) {
      Sound.play('tick-urgent');
    } else if (Game.tbTimerRemaining <= 10) {
      Sound.play('tick');
    }
  }, 1000);
}

function updateTbTimerDisplay() {
  const circumference = 2 * Math.PI * 54;
  const fraction = Game.tbTimerRemaining / Game.timerDuration;
  const offset = circumference * (1 - fraction);

  const fill = $('#tb-timer-fill');
  const text = $('#tb-timer-text');

  fill.style.strokeDasharray = circumference;
  fill.style.strokeDashoffset = offset;

  text.textContent = Game.tbTimerRemaining;

  if (Game.tbTimerRemaining <= 5) {
    fill.classList.add('urgent');
    text.classList.add('urgent');
  } else {
    fill.classList.remove('urgent');
    text.classList.remove('urgent');
  }
}

// ─── Reset Game ───
function resetGame() {
  clearInterval(Game.timerInterval);
  clearInterval(Game.tbTimerInterval);
  Confetti.stop();

  Game.state = 'SETUP';
  Game.currentRound = 0;
  Game.currentTeam = 'blue';
  Game.usedQuestionIds.clear();
  Game.activePowerup = null;

  $('#scoreboard').classList.add('hidden');
  showScreen('setup');
}

// ─── Keyboard Controls ───
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  // Answer keys (1-4 or A-D) during question
  if (Game.state === 'QUESTION' && !Game.answered) {
    const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    if (key in keyMap) {
      e.preventDefault();
      selectAnswer(keyMap[key]);
      return;
    }
  }

  // Tiebreaker buzz keys
  if (Game.state === 'TIEBREAKER') {
    if (key === 'q' && !Game.tbBuzzedTeam) {
      e.preventDefault();
      buzzIn('blue');
      return;
    }
    if (key === 'p' && !Game.tbBuzzedTeam) {
      e.preventDefault();
      buzzIn('orange');
      return;
    }
    // Answer keys after buzzing
    if (Game.tbBuzzedTeam) {
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
      if (key in keyMap) {
        e.preventDefault();
        tbAnswer(keyMap[key]);
        return;
      }
    }
  }

  // Space/Enter to advance
  if (key === ' ' || key === 'enter') {
    e.preventDefault();
    if (Game.state === 'ANSWER_REVEAL') {
      nextQuestion();
    } else if (Game.state === 'GAME_OVER') {
      resetGame();
    }
    return;
  }

  // F for fullscreen
  if (key === 'f' && !e.ctrlKey && !e.metaKey) {
    if (Game.state !== 'SETUP') {
      e.preventDefault();
      toggleFullscreen();
    }
    return;
  }

  // Escape to quit to setup
  if (key === 'escape') {
    if (Game.state !== 'SETUP') {
      e.preventDefault();
      if (confirm(Game.lang === 'pt' ? 'Voltar ao menu principal?' : 'Return to main menu?')) {
        resetGame();
      }
    }
    return;
  }
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

// ─── Before Unload Warning ───
window.addEventListener('beforeunload', (e) => {
  if (Game.state !== 'SETUP' && Game.state !== 'GAME_OVER') {
    e.preventDefault();
    e.returnValue = '';
  }
});

// ─── Initialize ───
document.addEventListener('DOMContentLoaded', () => {
  Confetti.init();
  initSetup();
  updateLangUI();
  showScreen('setup');
});
