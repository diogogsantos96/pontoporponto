// sketch.jsx — shared low-fi primitives + system reference card
// Wobbly hand-drawn vibe via SVG strokes + Kalam/Caveat fonts.
// All components exported to window for use across wireframe files.

const SK = {
  ink: '#1f1d1b',
  paper: '#fbf8f2',
  pencil: 'rgba(31,29,27,0.55)',
  faint: 'rgba(31,29,27,0.18)',
  faintBg: 'rgba(31,29,27,0.04)',
  // Brand palette I'm proposing
  cream: '#faf6ec',
  blue: '#9cb9d1',
  blush: '#ecccc5',
  sage: '#bcc6a8',
  charcoal: '#2a2724',
};

// ---------- Wobbly SVG primitives ----------

// Generate a wobbly path between two points
function wobbleLine(x1, y1, x2, y2, amp = 1.2) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const steps = Math.max(4, Math.floor(len / 22));
  let d = `M ${x1} ${y1}`;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const x = x1 + dx * t + (Math.sin(i * 13.7) * amp);
    const y = y1 + dy * t + (Math.cos(i * 9.3) * amp);
    d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
}

// Wobbly rectangle outline (border-only)
function WobbleRect({ w, h, stroke = SK.ink, sw = 1.4, fill = 'none', r = 0, dash, style }) {
  // Build 4 wobbly edges
  const a = 1.0;
  const paths = [
    wobbleLine(r, 0, w - r, 0, a),
    wobbleLine(w, r, w, h - r, a),
    wobbleLine(w - r, h, r, h, a),
    wobbleLine(0, h - r, 0, r, a),
  ];
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', ...style }}>
      {fill !== 'none' && <rect x="1" y="1" width={w - 2} height={h - 2} rx={r} fill={fill} />}
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={stroke} strokeWidth={sw} fill="none"
          strokeLinecap="round" strokeDasharray={dash} />
      ))}
    </svg>
  );
}

// Box wrapper — wobbly border around children, children positioned absolutely
function Box({ w, h, children, stroke = SK.ink, sw = 1.4, fill = 'none', r = 0, dash, style, rotate = 0, onClick }) {
  return (
    <div onClick={onClick} style={{
      position: 'relative', width: w, height: h, flexShrink: 0,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style,
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <WobbleRect w={w} h={h} stroke={stroke} sw={sw} fill={fill} r={r} dash={dash} />
      </div>
      <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
    </div>
  );
}

// Image placeholder — hatched diagonal fill + descriptive label
function ImgPlaceholder({ w, h, label, sublabel, rotate = 0, sw = 1.4, density = 16, style }) {
  const hatches = [];
  for (let i = -h; i < w + h; i += density) {
    hatches.push(
      <line key={i} x1={i} y1="0" x2={i + h} y2={h}
        stroke={SK.faint} strokeWidth="1" />
    );
  }
  return (
    <div style={{
      position: 'relative', width: w, height: h, flexShrink: 0,
      transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style,
    }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', position: 'absolute', inset: 0 }}>
        <defs>
          <clipPath id={`clip-${w}-${h}-${label?.length || 0}`}>
            <rect width={w} height={h} />
          </clipPath>
        </defs>
        <g clipPath={`url(#clip-${w}-${h}-${label?.length || 0})`}>
          {hatches}
        </g>
      </svg>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <WobbleRect w={w} h={h} stroke={SK.ink} sw={sw} />
      </div>
      {label && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: 12, gap: 4,
        }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: SK.pencil, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {'[ image ]'}
          </div>
          <div style={{ fontFamily: 'Kalam, cursive', fontSize: 16, color: SK.ink, lineHeight: 1.15, maxWidth: '90%' }}>
            {label}
          </div>
          {sublabel && (
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: SK.pencil }}>
              {sublabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Text placeholder lines (zigzag underscores)
function TextLines({ count = 3, width = 200, gap = 10, lineH = 6, sw = 1.2, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
      {Array.from({ length: count }).map((_, i) => {
        const w = i === count - 1 ? Math.round(width * 0.55) : width;
        return (
          <svg key={i} width={w} height={lineH + 2} viewBox={`0 0 ${w} ${lineH + 2}`}>
            <path d={wobbleLine(2, lineH / 2 + 1, w - 2, lineH / 2 + 1, 0.6)}
              stroke={SK.pencil} strokeWidth={sw} fill="none" strokeLinecap="round" />
          </svg>
        );
      })}
    </div>
  );
}

// Heading placeholder — bigger wobbly bar(s)
function HeadingBar({ w = 280, h = 14, sw = 2, style }) {
  return (
    <svg width={w} height={h + 2} viewBox={`0 0 ${w} ${h + 2}`} style={style}>
      <path d={wobbleLine(2, h / 2 + 1, w - 2, h / 2 + 1, 0.8)}
        stroke={SK.ink} strokeWidth={sw} fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Handwriting handwriting — big italic "real" text
function Handwriting({ children, size = 56, color = SK.ink, style }) {
  return (
    <div style={{
      fontFamily: '"Caveat", "Kalam", cursive',
      fontSize: size,
      lineHeight: 0.95,
      color,
      fontWeight: 500,
      ...style,
    }}>{children}</div>
  );
}

// Handwritten note (margin annotation)
function Note({ children, color = SK.pencil, size = 13, rotate = 0, style }) {
  return (
    <div style={{
      fontFamily: '"Kalam", cursive',
      fontSize: size,
      color,
      lineHeight: 1.25,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      transformOrigin: 'left top',
      ...style,
    }}>{children}</div>
  );
}

// Caption — monospace label
function Mono({ children, size = 11, color = SK.pencil, style }) {
  return (
    <div style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: size,
      color,
      letterSpacing: '0.06em',
      ...style,
    }}>{children}</div>
  );
}

// Arrow with wobbly shaft + arrowhead
function Arrow({ from, to, style, color = SK.pencil, sw = 1.3 }) {
  const [x1, y1] = from, [x2, y2] = to;
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const ah = 8;
  const ax1 = x2 - ah * Math.cos(ang - 0.4);
  const ay1 = y2 - ah * Math.sin(ang - 0.4);
  const ax2 = x2 - ah * Math.cos(ang + 0.4);
  const ay2 = y2 - ah * Math.sin(ang + 0.4);
  const minX = Math.min(x1, x2, ax1, ax2) - 4;
  const minY = Math.min(y1, y2, ay1, ay2) - 4;
  const maxX = Math.max(x1, x2, ax1, ax2) + 4;
  const maxY = Math.max(y1, y2, ay1, ay2) + 4;
  return (
    <svg width={maxX - minX} height={maxY - minY}
      viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
      style={{ position: 'absolute', left: minX, top: minY, pointerEvents: 'none', ...style }}>
      <path d={wobbleLine(x1, y1, x2, y2, 1)} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />
      <path d={`M ${ax1} ${ay1} L ${x2} ${y2} L ${ax2} ${ay2}`}
        stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Flag glyphs as tiny rounded squares (sketch versions)
function Flag({ code, size = 22 }) {
  const palettes = {
    PT: ['#006600', '#cc0000'],
    EN: ['#012169', '#c8102e'],
    ES: ['#aa151b', '#f1bf00'],
    IT: ['#009246', '#ce2b37'],
  };
  const c = palettes[code] || ['#888', '#bbb'];
  return (
    <div style={{
      width: size, height: size * 0.7,
      display: 'inline-flex', borderRadius: 3, overflow: 'hidden',
      border: `1px solid ${SK.faint}`,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 9, color: '#fff',
      alignItems: 'center', justifyContent: 'center',
      background: `linear-gradient(90deg, ${c[0]} 50%, ${c[1]} 50%)`,
    }}>{code}</div>
  );
}

// Form field placeholder
function FormField({ label, w = 280, h = 38, lines = 1, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      <Mono size={10}>{label}</Mono>
      <Box w={w} h={h} sw={1.2} stroke={SK.pencil} />
    </div>
  );
}

// Pill button
function PillBtn({ label, w = 140, h = 36, fill = SK.charcoal, color = '#fff', style }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: h / 2, background: fill,
      color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Kalam", cursive', fontSize: 14, letterSpacing: '0.02em',
      ...style,
    }}>{label}</div>
  );
}

// ----- Top nav strip used inside several wireframes -----
function NavStrip({ variant = 'split' }) {
  // variant: 'split' | 'centered' | 'minimal'
  const items = ['Home', 'About', 'Categories', 'Stockists', 'Contact'];
  if (variant === 'centered') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: '22px 40px' }}>
        <Handwriting size={42}>Ponto por Ponto</Handwriting>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {items.map(i => <Mono key={i} size={11}>{i}</Mono>)}
        </div>
        <div style={{ position: 'absolute', top: 22, right: 36, display: 'flex', gap: 6 }}>
          {['PT', 'EN', 'ES', 'IT'].map(c => <Flag key={c} code={c} />)}
        </div>
      </div>
    );
  }
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 36px', borderBottom: `1px dashed ${SK.faint}`,
    }}>
      <Handwriting size={28}>Ponto por Ponto</Handwriting>
      <div style={{ display: 'flex', gap: 22 }}>
        {items.map(i => <Mono key={i} size={11}>{i}</Mono>)}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {['PT', 'EN', 'ES', 'IT'].map(c => <Flag key={c} code={c} />)}
      </div>
    </div>
  );
}

// Section divider
function SectionDivider({ label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '0 36px', margin: '8px 0',
    }}>
      <Mono size={9} style={{ color: SK.pencil }}>§ {label}</Mono>
      <div style={{ flex: 1, height: 1, background: SK.faint }} />
    </div>
  );
}

// ---------- System reference card (palette + type) ----------
function SystemCard({ w = 760, h = 880 }) {
  const swatches = [
    { name: 'Cream', hex: '#faf6ec', note: 'page background' },
    { name: 'Heirloom Blue', hex: SK.blue, note: 'from logo · primary accent' },
    { name: 'Blush', hex: SK.blush, note: 'secondary · girl' },
    { name: 'Sage', hex: SK.sage, note: 'secondary · boy' },
    { name: 'Charcoal', hex: SK.charcoal, note: 'body text' },
  ];
  return (
    <div style={{ width: w, height: h, background: SK.paper, padding: 36, position: 'relative', fontFamily: 'Kalam, cursive' }}>
      <div style={{ position: 'absolute', top: 18, right: 24 }}>
        <Mono size={10}>SYSTEM · v0.1</Mono>
      </div>
      <Handwriting size={48}>The system</Handwriting>
      <Note size={14} style={{ marginTop: 6, maxWidth: 540 }}>
        Soft & dreamy. Cream paper, the logo's pale blue, two quiet seconds (blush + sage) for category tints, a deep charcoal for text. Nothing saturated — everything heirloom-soft.
      </Note>

      <div style={{ marginTop: 28 }}>
        <Mono size={11}>01 · PALETTE</Mono>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 12 }}>
          {swatches.map(s => (
            <div key={s.hex}>
              <div style={{
                height: 110, background: s.hex, borderRadius: 4,
                border: `1px solid ${SK.faint}`,
              }} />
              <div style={{ marginTop: 8 }}>
                <div style={{ fontFamily: 'Kalam, cursive', fontSize: 14, color: SK.ink }}>{s.name}</div>
                <Mono size={9}>{s.hex}</Mono>
                <Mono size={9} style={{ marginTop: 2 }}>{s.note}</Mono>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 36 }}>
        <Mono size={11}>02 · TYPE PAIRING</Mono>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 12 }}>
          <div style={{ borderTop: `1px solid ${SK.faint}`, paddingTop: 14 }}>
            <Mono size={9}>display · "Italiana" or similar tall serif</Mono>
            <div style={{ fontFamily: '"Italiana", serif', fontSize: 60, lineHeight: 1.0, marginTop: 8, letterSpacing: '0.02em' }}>
              Cerimónia
            </div>
            <div style={{ fontFamily: '"Italiana", serif', fontSize: 22, lineHeight: 1.1, marginTop: 6, color: SK.pencil }}>
              Pieces for the moments that stay.
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${SK.faint}`, paddingTop: 14 }}>
            <Mono size={9}>body · "Cormorant Garamond" — warm reading serif</Mono>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 16, lineHeight: 1.55, marginTop: 8, color: SK.ink }}>
              Four sisters, one atelier in Porto. Every christening gown, communion dress, and ceremony piece is sewn by hand — point by point, ponto por ponto, the way our grandmothers taught us.
            </div>
          </div>
        </div>
        <div style={{ marginTop: 18, borderTop: `1px solid ${SK.faint}`, paddingTop: 14 }}>
          <Mono size={9}>script accent · logo only — never body text</Mono>
          <Handwriting size={56} color={SK.blue} style={{ marginTop: 6 }}>Ponto por Ponto</Handwriting>
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <Mono size={11}>03 · TONE NOTES</Mono>
        <div style={{ display: 'flex', gap: 14, marginTop: 12, flexWrap: 'wrap' }}>
          {['soft', 'dreamy', 'heirloom', 'handmade', 'quiet luxury', 'Portuguese', 'family'].map(t => (
            <div key={t} style={{
              border: `1.2px solid ${SK.ink}`, borderRadius: 14, padding: '4px 12px',
              fontFamily: 'Kalam, cursive', fontSize: 13,
            }}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  SK, Box, WobbleRect, ImgPlaceholder, TextLines, HeadingBar,
  Handwriting, Note, Mono, Arrow, Flag, FormField, PillBtn,
  NavStrip, SectionDivider, SystemCard,
});
