// === Tweaks panel — swappable color palettes ===
// Plain-JS implementation of the edit-mode protocol.

const PALETTES = {
  heirloom: {
    label: 'Heirloom',
    note: 'logo blue · cream · soft pastels',
    swatch: ['#9cb9d1', '#ecccc5', '#bcc6a8', '#faf6ec'],
    vars: {
      '--cream':      '#faf6ec',
      '--cream-2':    '#f4ecd9',
      '--cream-3':    '#ede2c8',
      '--blue':       '#9cb9d1',
      '--blue-deep':  '#5d7e98',
      '--blush':      '#ecccc5',
      '--blush-deep': '#c98a80',
      '--sage':       '#bcc6a8',
      '--ink':        '#2a2724',
      '--ink-soft':   '#5a554f',
    },
  },
  powder: {
    label: 'Powder & Gold',
    note: 'powder blue · champagne · ivory',
    swatch: ['#a8c3d8', '#d4b885', '#e9d2a3', '#fbf6ec'],
    vars: {
      '--cream':      '#fbf6ec',
      '--cream-2':    '#f1e7d2',
      '--cream-3':    '#e5d4ad',
      '--blue':       '#a8c3d8',
      '--blue-deep':  '#5e7f9c',
      '--blush':      '#e9d2a3',
      '--blush-deep': '#b08c4f',
      '--sage':       '#d4b885',
      '--ink':        '#2a261d',
      '--ink-soft':   '#574f3d',
    },
  },
  med: {
    label: 'Mediterranean',
    note: 'terracotta · olive · ivory',
    swatch: ['#c7794f', '#b3a37a', '#ddc097', '#f5ead7'],
    vars: {
      '--cream':      '#f5ead7',
      '--cream-2':    '#ecdcbe',
      '--cream-3':    '#e0cda7',
      '--blue':       '#c7794f',
      '--blue-deep':  '#8a4f30',
      '--blush':      '#ddc097',
      '--blush-deep': '#a8814a',
      '--sage':       '#b3a37a',
      '--ink':        '#332618',
      '--ink-soft':   '#665038',
    },
  },
  mono: {
    label: 'Monochrome',
    note: 'deep navy · cream · stone',
    swatch: ['#1f2a44', '#9aa1ad', '#d8d3c4', '#f7f3ea'],
    vars: {
      '--cream':      '#f7f3ea',
      '--cream-2':    '#ece6d6',
      '--cream-3':    '#dfd9c8',
      '--blue':       '#5d6c8c',
      '--blue-deep':  '#1f2a44',
      '--blush':      '#d8d3c4',
      '--blush-deep': '#8a8270',
      '--sage':       '#bdb9ad',
      '--ink':        '#0c1428',
      '--ink-soft':   '#3a4257',
    },
  },
};

// ----- core: apply a palette to :root -----
function applyPalette(key) {
  const p = PALETTES[key];
  if (!p) return;
  const root = document.documentElement;
  for (const [k, v] of Object.entries(p.vars)) root.style.setProperty(k, v);
  // mark active in UI
  document.querySelectorAll('[data-palette-key]').forEach(el => {
    el.classList.toggle('is-active', el.dataset.paletteKey === key);
  });
  // remember locally too (in case host persistence isn't available)
  try { localStorage.setItem('ppp.palette', key); } catch (e) {}
}

function readInitialPalette() {
  const root = document.documentElement;
  // 1. Check inline TWEAK_DEFAULTS that the host may have written
  const def = window.TWEAK_DEFAULTS || {};
  if (def.palette && PALETTES[def.palette]) return def.palette;
  // 2. Fall back to localStorage
  try { const v = localStorage.getItem('ppp.palette'); if (v && PALETTES[v]) return v; } catch (e) {}
  return 'heirloom';
}

// ----- UI: floating panel -----
function buildPanel() {
  if (document.getElementById('tweaks-panel')) return;
  const css = `
    #tweaks-panel{position:fixed;right:24px;bottom:24px;width:300px;background:#fbf8f2;
      border:1px solid rgba(42,39,36,0.18);border-radius:14px;
      box-shadow:0 22px 50px rgba(0,0,0,0.18),0 4px 12px rgba(0,0,0,0.06);
      font-family:'JetBrains Mono',ui-monospace,monospace;color:#2a2724;
      z-index:9999;overflow:hidden;display:none;}
    #tweaks-panel.is-open{display:block;}
    #tweaks-panel .head{display:flex;align-items:center;justify-content:space-between;
      padding:14px 16px;border-bottom:1px solid rgba(42,39,36,0.12);}
    #tweaks-panel .head h4{margin:0;font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:500;letter-spacing:0.02em;}
    #tweaks-panel .head button{background:transparent;border:0;cursor:pointer;color:#5a554f;
      font-size:18px;line-height:1;padding:2px 6px;border-radius:4px;}
    #tweaks-panel .head button:hover{background:rgba(0,0,0,0.06);color:#000;}
    #tweaks-panel .body{padding:14px 16px 18px;}
    #tweaks-panel .section-label{font-size:9.5px;letter-spacing:0.22em;text-transform:uppercase;
      color:#5a554f;margin:0 0 10px;}
    #tweaks-panel .pal-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    #tweaks-panel .pal{background:#fff;border:1.5px solid rgba(42,39,36,0.12);
      border-radius:10px;padding:10px;cursor:pointer;text-align:left;font:inherit;color:inherit;
      transition:border-color 160ms,transform 160ms;}
    #tweaks-panel .pal:hover{border-color:#2a2724;}
    #tweaks-panel .pal.is-active{border-color:#2a2724;border-width:1.5px;
      box-shadow:inset 0 0 0 1px #2a2724;}
    #tweaks-panel .pal .swatches{display:flex;gap:2px;border-radius:5px;overflow:hidden;height:34px;margin-bottom:8px;}
    #tweaks-panel .pal .sw{flex:1;}
    #tweaks-panel .pal .name{font-family:'Cormorant Garamond',serif;font-size:14px;font-weight:500;
      letter-spacing:0.02em;line-height:1.1;}
    #tweaks-panel .pal .note{font-size:8.5px;letter-spacing:0.12em;text-transform:uppercase;
      color:#5a554f;margin-top:3px;line-height:1.25;}
    #tweaks-panel .foot{font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:#8a857f;
      padding:0 16px 14px;margin-top:6px;}
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  const panel = document.createElement('div');
  panel.id = 'tweaks-panel';
  panel.innerHTML = `
    <div class="head">
      <h4>Tweaks</h4>
      <button type="button" aria-label="Close" data-close>×</button>
    </div>
    <div class="body">
      <p class="section-label">Palette</p>
      <div class="pal-grid"></div>
    </div>
    <div class="foot">click a swatch to preview</div>
  `;
  document.body.appendChild(panel);

  const grid = panel.querySelector('.pal-grid');
  for (const [key, p] of Object.entries(PALETTES)) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'pal';
    card.dataset.paletteKey = key;
    card.innerHTML = `
      <div class="swatches">
        ${p.swatch.map(c => `<span class="sw" style="background:${c}"></span>`).join('')}
      </div>
      <div class="name">${p.label}</div>
      <div class="note">${p.note}</div>
    `;
    card.addEventListener('click', () => {
      applyPalette(key);
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { palette: key } }, '*');
    });
    grid.appendChild(card);
  }

  panel.querySelector('[data-close]').addEventListener('click', () => {
    panel.classList.remove('is-open');
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  });
}

function showPanel() { buildPanel(); document.getElementById('tweaks-panel').classList.add('is-open'); }
function hidePanel() { const p = document.getElementById('tweaks-panel'); if (p) p.classList.remove('is-open'); }

// ----- protocol: register listener BEFORE announcing -----
window.addEventListener('message', (e) => {
  const d = e.data;
  if (!d || typeof d !== 'object') return;
  if (d.type === '__activate_edit_mode')   showPanel();
  if (d.type === '__deactivate_edit_mode') hidePanel();
});

// Apply initial palette ASAP (on script load, before paint)
applyPalette(readInitialPalette());

// Announce availability once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  });
} else {
  window.parent.postMessage({ type: '__edit_mode_available' }, '*');
}
