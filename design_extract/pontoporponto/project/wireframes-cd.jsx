// wireframes-cd.jsx — Wireframe C (Soft Collage / Dreamy) + D (Minimal Boutique)

const W2 = 1180;

// ============================================================
// WIREFRAME C — SOFT COLLAGE / DREAMY
// Scrapbook feel · tilted polaroids · script weaving through · romantic
// ============================================================
function WireframeC() {
  const w = W2;
  return (
    <div style={{ width: w, background: SK.paper, fontFamily: 'Kalam, cursive', color: SK.ink, position: 'relative', overflow: 'hidden' }}>
      <Note size={12} rotate={-3} style={{ position: 'absolute', left: -180, top: 60, width: 160, color: SK.pencil }}>
        Scrapbook · tilted polaroids · script weaving through. Very PT folk-romantic. Risk: feels twee — restraint matters.
      </Note>

      {/* NAV — minimal floating */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px' }}>
        <div style={{ display: 'flex', gap: 22 }}>
          {['About', 'Collections', 'Process', 'Visit', 'Contact'].map(i => <Mono key={i} size={11}>{i}</Mono>)}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['PT', 'EN', 'ES', 'IT'].map(c => <Flag key={c} code={c} />)}
        </div>
      </div>

      {/* HERO — collage with tilted overlapping images + script */}
      <SectionDivider label="01 / opening · collage" />
      <div style={{ position: 'relative', height: 760, padding: '20px 40px' }}>
        {/* Tilted polaroids */}
        <div style={{ position: 'absolute', left: 60, top: 50 }}>
          <ImgPlaceholder w={340} h={440} label="baby in linen gown · soft window light" rotate={-4} />
        </div>
        <div style={{ position: 'absolute', left: 440, top: 130, zIndex: 2 }}>
          <ImgPlaceholder w={300} h={380} label="lace detail · macro · golden hour" rotate={3} />
        </div>
        <div style={{ position: 'absolute', left: 780, top: 70 }}>
          <ImgPlaceholder w={320} h={420} label="mother & child · candid" rotate={-2} />
        </div>
        <div style={{ position: 'absolute', left: 200, top: 540 }}>
          <ImgPlaceholder w={260} h={180} label="hand stitching · close-up" rotate={5} />
        </div>
        <div style={{ position: 'absolute', left: 720, top: 560 }}>
          <ImgPlaceholder w={280} h={190} label="ribbon-tied box · still life" rotate={-3} />
        </div>

        {/* Big script statement weaving through */}
        <div style={{ position: 'absolute', left: 80, top: 360, fontFamily: '"Caveat", cursive', fontSize: 110, lineHeight: 0.9, color: SK.blue, transform: 'rotate(-2deg)', zIndex: 3, pointerEvents: 'none', mixBlendMode: 'multiply' }}>
          Made by hand,
        </div>
        <div style={{ position: 'absolute', left: 380, top: 460, fontFamily: '"Italiana", serif', fontSize: 80, lineHeight: 0.9, color: SK.charcoal, transform: 'rotate(1deg)', zIndex: 3, pointerEvents: 'none' }}>
          point by point.
        </div>

        <Note size={13} rotate={-2} style={{ position: 'absolute', left: 980, bottom: 80, width: 160, color: SK.pencil }}>
          ↑ five real photos · loose scrapbook layout · rotates slightly on scroll
        </Note>
      </div>

      {/* ABOUT — text wraps with handwritten notes in margins */}
      <SectionDivider label="02 / about · the four of us" />
      <div style={{ padding: '32px 60px 60px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 50, alignItems: 'flex-start' }}>
          <div style={{ position: 'relative' }}>
            <ImgPlaceholder w={420} h={520} label="four sisters · in the atelier · candid · b&w?" rotate={-2} />
            <Note size={12} rotate={5} style={{ position: 'absolute', right: -28, bottom: -10, color: SK.blue, fontSize: 22, fontFamily: '"Caveat", cursive' }}>
              the four of us ↓
            </Note>
          </div>
          <div>
            <Mono size={11}>QUEM SOMOS</Mono>
            <div style={{ fontFamily: '"Italiana", serif', fontSize: 50, lineHeight: 1.0, marginTop: 12 }}>
              We are <span style={{ fontFamily: '"Caveat", cursive', color: SK.blue, fontSize: 76 }}>four sisters</span>,<br />and we keep<br />a slow workshop<br />in Porto.
            </div>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.65, marginTop: 24, color: SK.ink, maxWidth: 460 }}>
              We sew christening gowns, communion dresses, and small ceremony pieces — the way our grandmothers taught us. With linen, with lace, with patience, and with a little bit of magic for the days families want to keep.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
              <Note size={20} color={SK.blue} style={{ fontFamily: '"Caveat", cursive' }}>com amor,</Note>
              <Note size={16} color={SK.pencil}>— Inês, Mariana, Sofia & Joana</Note>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS — scattered numbered notes */}
      <SectionDivider label="03 / process · little notes" />
      <div style={{ padding: '32px 60px 80px', position: 'relative', minHeight: 480 }}>
        <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, marginBottom: 30 }}>How a piece comes to be.</div>
        <div style={{ position: 'relative', height: 380 }}>
          {[
            { n: '01', t: 'Choose the cloth', d: 'French lace, Portuguese linen, Italian silk.', x: 0, y: 0, r: -2, c: SK.blush },
            { n: '02', t: 'Draw the pattern', d: 'Upstairs, every season, with chalk.', x: 280, y: 30, r: 2, c: SK.cream },
            { n: '03', t: 'Sew, by hand', d: 'Ponto por ponto. No machine line.', x: 580, y: 0, r: -1, c: SK.sage },
            { n: '04', t: 'Finish, finish, finish', d: 'Pearl buttons, hand-rolled hems, ribbon box.', x: 860, y: 40, r: 3, c: SK.blue },
          ].map(s => (
            <div key={s.n} style={{
              position: 'absolute', left: s.x, top: s.y, width: 220, height: 240,
              background: s.c, padding: 18, transform: `rotate(${s.r}deg)`,
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
            }}>
              <Mono size={11}>STEP {s.n}</Mono>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 22, lineHeight: 1.1, marginTop: 10 }}>{s.t}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 14, lineHeight: 1.5, marginTop: 12, color: SK.ink }}>{s.d}</div>
              <Note size={50} color={SK.ink} style={{ fontFamily: '"Caveat", cursive', position: 'absolute', right: 16, bottom: 4, opacity: 0.5 }}>{s.n}</Note>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES — tilted/scattered cards */}
      <SectionDivider label="04 / collections" />
      <div style={{ padding: '32px 60px 100px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 30 }}>
          <div>
            <Mono size={11}>BROWSE</Mono>
            <div style={{ fontFamily: '"Italiana", serif', fontSize: 56, lineHeight: 1, marginTop: 8 }}>
              For the <span style={{ fontFamily: '"Caveat", cursive', color: SK.blue, fontSize: 80 }}>little ones.</span>
            </div>
          </div>
          <Note size={14} rotate={2} style={{ maxWidth: 220, color: SK.pencil }}>
            Cards tilt slightly. On hover they straighten + lift — small piece of delight.
          </Note>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px 20px 40px' }}>
          {[
            ['MENINA', 'Girls', 'Christening gowns,\ncommunion dresses,\nceremony coats.', SK.blush, -3],
            ['MENINO', 'Boys', 'Linen suits,\nchristening shirts,\nblazers & shorts.', SK.sage, 2],
            ['ACESSÓRIOS', 'Accessories', 'Bonnets, ribbons,\nshoes, blankets,\nthe small things.', SK.blue, -2],
          ].map(([k, t, d, c, r]) => (
            <div key={k} style={{ width: 320, transform: `rotate(${r}deg)`, background: SK.paper, padding: 18, boxShadow: '0 6px 22px rgba(0,0,0,0.08)' }}>
              <ImgPlaceholder w={284} h={340} label={t.toLowerCase() + ' · soft natural light'} />
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 12, height: 12, borderRadius: 6, background: c }} />
                <Mono size={10}>{k}</Mono>
              </div>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 32, marginTop: 4 }}>{t}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 14, color: SK.pencil, marginTop: 8, whiteSpace: 'pre-line' }}>{d}</div>
              <div style={{ marginTop: 14, fontFamily: '"Caveat", cursive', fontSize: 22, color: SK.blue }}>see pieces →</div>
            </div>
          ))}
        </div>
      </div>

      {/* VISIT + CONTACT — combined, scrapbook-style */}
      <SectionDivider label="05 / write to us · visit us" />
      <div style={{ padding: '32px 60px 50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        {/* Left — address card */}
        <div style={{ position: 'relative' }}>
          <Box w={500} h={360} fill={SK.cream} sw={1.6}>
            <div style={{ padding: 28 }}>
              <Mono size={11}>FIND US</Mono>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 30, lineHeight: 1.1, marginTop: 12 }}>
                Rua João das Regras 95<br />4000-292 Porto
              </div>
              <div style={{ height: 1, width: 60, background: SK.faint, margin: '18px 0' }} />
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 16, lineHeight: 1.7 }}>
                geral@pontoporponto.pt<br />+351 22 208 4002
              </div>
              <div style={{ display: 'flex', gap: 14, marginTop: 18, fontFamily: '"Caveat", cursive', fontSize: 22, color: SK.blue }}>
                <div>@instagram</div><div>@facebook</div>
              </div>
            </div>
          </Box>
          <Note size={32} color={SK.blue} style={{ fontFamily: '"Caveat", cursive', position: 'absolute', top: -20, right: 30, transform: 'rotate(-5deg)' }}>
            come say bom dia ↓
          </Note>
        </div>
        {/* Right — contact form */}
        <div>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, lineHeight: 1.05 }}>Write us a note.</div>
          <Note size={16} color={SK.pencil} style={{ marginTop: 6 }}>We read every one — promised.</Note>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22 }}>
            <FormField label="your name" w={480} />
            <FormField label="email" w={480} />
            <FormField label="what would you like to say?" w={480} h={120} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
              <PillBtn label="Send  →" w={130} fill={SK.blue} color={SK.ink} />
              <Note size={18} color={SK.pencil} style={{ fontFamily: '"Caveat", cursive' }}>com carinho.</Note>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: `1px dashed ${SK.faint}`, padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Handwriting size={32} color={SK.blue}>Ponto por Ponto</Handwriting>
        <Mono size={10}>HANDMADE IN PORTUGAL · ©2026</Mono>
        <div style={{ display: 'flex', gap: 14, fontFamily: '"Caveat", cursive', fontSize: 22, color: SK.blue }}>
          <div>Insta</div><div>FB</div><div>Pin</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// WIREFRAME D — MINIMAL BOUTIQUE (with sticky side nav)
// Spacious, modern, gallery-style · alternating image/text sections
// ============================================================
function WireframeD() {
  const w = W2;
  const navW = 200;
  return (
    <div style={{ width: w, background: SK.paper, fontFamily: 'Kalam, cursive', color: SK.ink, position: 'relative', display: 'flex' }}>
      <Note size={12} rotate={-3} style={{ position: 'absolute', left: -180, top: 60, width: 160, color: SK.pencil }}>
        Sticky LEFT nav · gallery feel · lots of white space · each section breathes.
      </Note>

      {/* STICKY SIDE NAV */}
      <div style={{ width: navW, padding: '32px 24px', borderRight: `1px solid ${SK.faint}`, position: 'sticky', top: 0, alignSelf: 'flex-start', background: SK.paper }}>
        <Handwriting size={26} color={SK.blue}>Ponto<br />por<br />Ponto</Handwriting>
        <div style={{ height: 1, width: 32, background: SK.faint, margin: '20px 0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            ['01', 'Home'],
            ['02', 'About'],
            ['03', 'Process'],
            ['04', 'Collections'],
            ['05', 'Visit'],
            ['06', 'Contact'],
          ].map(([n, t], i) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Mono size={9}>{n}</Mono>
              <div style={{
                fontFamily: 'Kalam, cursive', fontSize: 14,
                color: i === 0 ? SK.ink : SK.pencil,
                borderBottom: i === 0 ? `1.4px solid ${SK.ink}` : 'none',
                paddingBottom: i === 0 ? 1 : 0,
              }}>{t}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Mono size={9}>LANGUAGE</Mono>
          <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
            {['PT', 'EN', 'ES', 'IT'].map(c => <Flag key={c} code={c} />)}
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <Mono size={9}>SOCIAL</Mono>
          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'Kalam, cursive', fontSize: 13 }}>
            <div>Instagram ↗</div>
            <div>Facebook ↗</div>
          </div>
        </div>
        <Note size={11} style={{ position: 'absolute', bottom: 24, left: 24, color: SK.pencil, maxWidth: 150 }}>
          Side nav stays visible — easy nav between sections without scrolling up.
        </Note>
      </div>

      {/* MAIN CONTENT COLUMN */}
      <div style={{ flex: 1, padding: '0 0 0 0' }}>
        {/* HERO — text-led, single image right */}
        <div style={{ padding: '70px 60px 30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', minHeight: 700 }}>
          <div>
            <Mono size={11}>CEREMONY · HANDMADE · PORTO</Mono>
            <div style={{ fontFamily: '"Italiana", serif', fontSize: 88, lineHeight: 1.0, marginTop: 24, letterSpacing: '-0.01em' }}>
              Heirloom pieces<br />for small<br />moments.
            </div>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, lineHeight: 1.6, marginTop: 26, color: SK.ink, maxWidth: 420 }}>
              Christening, communion & ceremony clothing — hand-sewn in our Porto atelier and sold through curated stockists across Europe.
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <PillBtn label="Trade enquiries →" w={170} />
              <PillBtn label="Browse" w={120} fill="transparent" color={SK.ink} style={{ border: `1.4px solid ${SK.ink}` }} />
            </div>
            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Mono size={9}>SCROLL</Mono>
              <div style={{ width: 60, height: 1, background: SK.ink }} />
            </div>
          </div>
          <ImgPlaceholder w={420} h={620} label="baby in linen christening gown · vertical · single light source" sublabel="brand image #1 · 2:3" />
        </div>

        {/* ABOUT — single narrow column, generous whitespace */}
        <div style={{ padding: '60px 60px 60px', borderTop: `1px solid ${SK.faint}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 60 }}>
            <Mono size={11}>02 · ABOUT</Mono>
            <div>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 48, lineHeight: 1.0, maxWidth: 520 }}>
                Four sisters in Porto, sewing the way grandmothers did.
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 32 }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 16, lineHeight: 1.7 }}>
                  Ponto por Ponto is a small atelier — four sisters, one workshop, one obsession: ceremony pieces that families keep. We choose linens, silks, and French laces by hand. We cut and sew in small runs.
                </div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 16, lineHeight: 1.7 }}>
                  Two collections a year — Verão and Inverno — available through a curated list of European stockists. New stockist? Trade enquiries open below.
                </div>
              </div>
              <ImgPlaceholder w={760} h={380} label="atelier interior · wide · natural light · brand image #2" style={{ marginTop: 36 }} />
            </div>
          </div>
        </div>

        {/* PROCESS — vertical numbered list */}
        <div style={{ padding: '60px 60px 60px', borderTop: `1px solid ${SK.faint}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 60 }}>
            <Mono size={11}>03 · PROCESS</Mono>
            <div>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, lineHeight: 1.0, marginBottom: 30 }}>
                Slow, by design.
              </div>
              {[
                ['01', 'Cloth + lace', 'Linens, silks, French laces — chosen for hand, not for price.'],
                ['02', 'Pattern', 'Cut to size, every season, in the atelier upstairs.'],
                ['03', 'Hand-sewn', 'Stitched by our small team — no production line.'],
                ['04', 'Finished', 'Pearl buttons, hand-rolled hems, ribbon-tied boxes.'],
              ].map(([n, t, d]) => (
                <div key={n} style={{ display: 'grid', gridTemplateColumns: '50px 1fr 1fr', gap: 24, padding: '20px 0', borderTop: `1px solid ${SK.faint}` }}>
                  <Mono size={11}>{n}</Mono>
                  <div style={{ fontFamily: '"Italiana", serif', fontSize: 26 }}>{t}</div>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 15, lineHeight: 1.6, color: SK.pencil }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CATEGORIES — alternating full-width sections */}
        <div style={{ padding: '60px 0 0', borderTop: `1px solid ${SK.faint}` }}>
          <div style={{ padding: '0 60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 60 }}>
              <Mono size={11}>04 · COLLECTIONS</Mono>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, lineHeight: 1.0, marginBottom: 24 }}>Three families of pieces.</div>
            </div>
          </div>
          {[
            ['MENINA', 'Girls', 'Christening gowns, communion dresses, ceremony coats. Linen, lace, silk. Sizes 0–10.', SK.blush, 'left'],
            ['MENINO', 'Boys', 'Linen suits, christening shirts, blazers, ceremony shorts. Sizes 0–10.', SK.sage, 'right'],
            ['ACESSÓRIOS', 'Accessories', 'Bonnets, hair ribbons, shoes, blankets, the small things that finish a look.', SK.blue, 'left'],
          ].map(([k, t, d, c, side], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: side === 'left' ? '1fr 1fr' : '1fr 1fr',
              alignItems: 'center', padding: '40px 60px', borderTop: i === 0 ? `1px solid ${SK.faint}` : 'none',
              direction: side === 'right' ? 'rtl' : 'ltr',
            }}>
              <ImgPlaceholder w={420} h={480} label={`${t.toLowerCase()} · brand photo`} style={{ direction: 'ltr' }} />
              <div style={{ direction: 'ltr', padding: side === 'left' ? '0 0 0 50px' : '0 50px 0 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 6, background: c }} />
                  <Mono size={11}>{k}</Mono>
                </div>
                <div style={{ fontFamily: '"Italiana", serif', fontSize: 56, lineHeight: 1, marginTop: 12 }}>{t}</div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.65, marginTop: 16, color: SK.ink, maxWidth: 380 }}>{d}</div>
                <div style={{ marginTop: 24, fontFamily: 'Kalam, cursive', fontSize: 14, borderBottom: `1.4px solid ${SK.ink}`, display: 'inline-block', paddingBottom: 1 }}>See pieces →</div>
              </div>
            </div>
          ))}
        </div>

        {/* VISIT */}
        <div style={{ padding: '60px 60px', borderTop: `1px solid ${SK.faint}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 60 }}>
            <Mono size={11}>05 · VISIT</Mono>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, lineHeight: 1.05 }}>
                  Rua João das Regras 95<br />4000-292 Porto
                </div>
                <div style={{ marginTop: 24, fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.7 }}>
                  geral@pontoporponto.pt<br />+351 22 208 4002
                </div>
                <div style={{ marginTop: 18, display: 'flex', gap: 18, fontFamily: 'Kalam, cursive', fontSize: 14 }}>
                  <div style={{ borderBottom: `1.2px solid ${SK.ink}` }}>Instagram</div>
                  <div style={{ borderBottom: `1.2px solid ${SK.ink}` }}>Facebook</div>
                </div>
              </div>
              <ImgPlaceholder w={460} h={300} label="minimal map · grey · single pin" />
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div style={{ padding: '60px 60px 60px', borderTop: `1px solid ${SK.faint}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 60 }}>
            <Mono size={11}>06 · CONTACT</Mono>
            <div>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 48, lineHeight: 1.0 }}>
                Get in touch.
              </div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.55, marginTop: 12, color: SK.pencil, maxWidth: 440, fontStyle: 'italic' }}>
                Trade enquiries, press, custom orders, or hello.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 560 }}>
                <FormField label="Name" w={560} />
                <FormField label="Email" w={560} />
                <FormField label="Message" w={560} h={140} />
                <PillBtn label="Send  →" w={140} style={{ marginTop: 6 }} />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ borderTop: `1px solid ${SK.faint}`, padding: '24px 60px', display: 'flex', justifyContent: 'space-between' }}>
          <Mono size={10}>©2026 PONTO POR PONTO</Mono>
          <Mono size={10}>HANDMADE IN PORTUGAL</Mono>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WireframeC, WireframeD });
