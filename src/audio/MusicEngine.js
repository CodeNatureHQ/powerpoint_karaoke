// Procedural background music generator using Web Audio API
// Each presentation gets its own musical mood

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// Musical moods — each defines chords, melody scale, tempo, and character
const MOODS = {
  // Corporate elevator music — calm major 7ths, smooth jazz
  corporate: {
    chords: [
      [60, 64, 67, 71], // Cmaj7
      [65, 69, 72, 76], // Fmaj7
      [62, 65, 69, 72], // Dm7
      [67, 71, 74, 77], // G7
    ],
    melody: [60, 62, 64, 67, 69, 72, 74, 76],
    quirky: [61, 66, 73, 78],
    tempo: 900,
    padType: "sine",
    melodyType: "triangle",
    padVolume: 0.06,
    melodyVolume: 0.09,
    melodyChance: 0.6,
    quirkyChance: 0.06,
    swingFeel: 0.1,
  },

  // Bossa nova — warm, rhythmic, slightly syncopated
  bossa: {
    chords: [
      [64, 68, 71, 75], // Emaj7
      [62, 66, 69, 73], // Dmaj7
      [60, 64, 67, 70], // C7
      [65, 69, 72, 76], // Fmaj7
    ],
    melody: [64, 66, 69, 71, 73, 76, 78, 81],
    quirky: [63, 68, 75, 80],
    tempo: 750,
    padType: "sine",
    melodyType: "triangle",
    padVolume: 0.05,
    melodyVolume: 0.1,
    melodyChance: 0.7,
    quirkyChance: 0.08,
    swingFeel: 0.2,
  },

  // Techy/electronic — arpeggiated, slightly robotic
  tech: {
    chords: [
      [48, 55, 60, 64], // C (spread)
      [48, 55, 60, 63], // Cm
      [46, 53, 58, 62], // Bb
      [43, 50, 55, 59], // G
    ],
    melody: [60, 63, 65, 67, 70, 72, 75, 77],
    quirky: [61, 66, 73, 78, 84],
    tempo: 600,
    padType: "sawtooth",
    melodyType: "square",
    padVolume: 0.025,
    melodyVolume: 0.06,
    melodyChance: 0.8,
    quirkyChance: 0.1,
    swingFeel: 0,
  },

  // Minimal — sparse, delicate, piano-like
  minimal: {
    chords: [
      [60, 67, 72], // C (open)
      [57, 64, 69], // A min
      [65, 72, 76], // F
      [55, 62, 67], // G
    ],
    melody: [72, 74, 76, 79, 81, 84],
    quirky: [73, 78, 85],
    tempo: 1200,
    padType: "sine",
    melodyType: "sine",
    padVolume: 0.04,
    melodyVolume: 0.12,
    melodyChance: 0.4,
    quirkyChance: 0.05,
    swingFeel: 0.15,
  },

  // Spacey/sci-fi — ethereal, wide intervals, mysterious
  space: {
    chords: [
      [48, 55, 62, 67], // C5 add9
      [46, 53, 60, 65], // Bb5 add9
      [43, 50, 57, 64], // G wide
      [41, 48, 55, 60], // F wide
    ],
    melody: [60, 62, 67, 69, 74, 79, 81],
    quirky: [61, 66, 73, 78, 85, 54],
    tempo: 1100,
    padType: "sine",
    melodyType: "sine",
    padVolume: 0.05,
    melodyVolume: 0.07,
    melodyChance: 0.45,
    quirkyChance: 0.12,
    swingFeel: 0.3,
  },

  // Imperial/dramatic — minor key, march-like, powerful
  imperial: {
    chords: [
      [48, 51, 55, 60], // Cm
      [46, 50, 53, 58], // Bbm
      [43, 47, 50, 55], // G
      [41, 44, 48, 53], // Fm
    ],
    melody: [60, 63, 65, 67, 68, 70, 72, 75],
    quirky: [61, 66, 73, 56],
    tempo: 800,
    padType: "sawtooth",
    melodyType: "triangle",
    padVolume: 0.03,
    melodyVolume: 0.08,
    melodyChance: 0.55,
    quirkyChance: 0.07,
    swingFeel: 0,
  },
};

export default class MusicEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.timeouts = [];
    this.mood = null;
    this.chordIndex = 0;
    this.beatCount = 0;
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.3;
    this.masterGain.connect(this.ctx.destination);

    // Delay for reverb-like spaciousness
    this.delay = this.ctx.createDelay();
    this.delay.delayTime.value = 0.35;
    this.delayGain = this.ctx.createGain();
    this.delayGain.gain.value = 0.15;
    this.delay.connect(this.delayGain);
    this.delayGain.connect(this.masterGain);
  }

  playPad(notes, duration, mood) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    notes.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = mood.padType;
      osc.frequency.value = midiToFreq(note);

      // Low-pass filter to soften harsh waveforms
      filter.type = "lowpass";
      filter.frequency.value = mood.padType === "sawtooth" ? 800 : 4000;
      filter.Q.value = 0.5;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(mood.padVolume, now + 0.6);
      gain.gain.linearRampToValueAtTime(mood.padVolume * 0.7, now + duration - 0.4);
      gain.gain.linearRampToValueAtTime(0, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      gain.connect(this.delay);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  playMelodyNote(note, duration, mood) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = mood.melodyType;
    osc.frequency.value = midiToFreq(note);

    filter.type = "lowpass";
    filter.frequency.value = mood.melodyType === "square" ? 1200 : 6000;

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(mood.melodyVolume, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(mood.melodyVolume * 0.3, now + duration * 0.6);
    gain.gain.linearRampToValueAtTime(0, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    gain.connect(this.delay);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  playBassNote(note, duration, mood) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.value = midiToFreq(note - 12);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.07, now + 0.1);
    gain.gain.linearRampToValueAtTime(0.04, now + duration - 0.3);
    gain.gain.linearRampToValueAtTime(0, now + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  scheduleBeat() {
    if (!this.isPlaying || !this.mood) return;

    const mood = this.mood;
    const beatDuration = mood.tempo;
    const chord = mood.chords[this.chordIndex];

    // Play pad chord every 4 beats
    if (this.beatCount % 4 === 0) {
      this.playPad(chord, (beatDuration * 4) / 1000, mood);
      this.playBassNote(chord[0], (beatDuration * 4) / 1000, mood);
      this.chordIndex = (this.chordIndex + 1) % mood.chords.length;
    }

    // Play melody notes
    if (Math.random() < mood.melodyChance) {
      const isQuirky = Math.random() < mood.quirkyChance;
      const notePool = isQuirky ? mood.quirky : mood.melody;
      const note = notePool[Math.floor(Math.random() * notePool.length)];
      const noteDuration = (beatDuration * (0.4 + Math.random() * 1.2)) / 1000;

      const swingDelay = mood.swingFeel * beatDuration * Math.random();
      const t = setTimeout(() => {
        this.playMelodyNote(note, noteDuration, mood);
      }, swingDelay);
      this.timeouts.push(t);
    }

    this.beatCount++;

    const t = setTimeout(() => this.scheduleBeat(), beatDuration / 2);
    this.timeouts.push(t);
  }

  start(moodName = "corporate") {
    this.init();

    // If already playing a different mood, stop first
    if (this.isPlaying) {
      this.stop();
      // Small delay before restarting with new mood
      setTimeout(() => this._startWithMood(moodName), 600);
      return;
    }

    this._startWithMood(moodName);
  }

  _startWithMood(moodName) {
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.mood = MOODS[moodName] || MOODS.corporate;
    this.isPlaying = true;
    this.beatCount = 0;
    this.chordIndex = 0;
    this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    this.scheduleBeat();
  }

  stop() {
    this.isPlaying = false;
    this.timeouts.forEach(clearTimeout);
    this.timeouts = [];

    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.linearRampToValueAtTime(0, now + 0.5);
    }
  }

  toggle(moodName = "corporate") {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start(moodName);
    }
    return this.isPlaying;
  }

  // Switch mood while playing
  switchMood(moodName) {
    if (!this.isPlaying) return;
    this.stop();
    setTimeout(() => this.start(moodName), 600);
  }
}
